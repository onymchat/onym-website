#!/usr/bin/env python3
"""Inject SEO/AI-crawler metadata into the static site and emit robots/sitemap/llms.txt.

Idempotent: strips any block it previously wrote before re-inserting.
"""
import html as htmllib
import json
import os
import re
import subprocess
import sys

ROOT = "/Users/leadonym/Developer/onym-website/public"
ORIGIN = "https://onym.app"

BEGIN = "<!-- seo:begin -->"
END = "<!-- seo:end -->"
LD_BEGIN = "<!-- seo:ld:begin -->"
LD_END = "<!-- seo:ld:end -->"

NOINDEX = {"qa/index.html", "qa/build/index.html", "ru/qa/index.html",
           "ru/qa/build/index.html", "i.html", "join.html"}

TECH_ARTICLE = re.compile(r"^(primitives/|sep/|policies/)")

SAME_AS = [
    "https://github.com/onymchat",
    "https://play.google.com/store/apps/details?id=app.onym.android",
]


def rel_paths():
    out = []
    for dirpath, dirnames, filenames in os.walk(ROOT):
        dirnames[:] = [d for d in dirnames if d not in ("assets", ".well-known")]
        for fn in filenames:
            if fn.endswith(".html"):
                out.append(os.path.relpath(os.path.join(dirpath, fn), ROOT))
    return sorted(out)


def canon_path(rel):
    if rel == "index.html":
        return "/"
    if rel.endswith("/index.html"):
        return "/" + rel[: -len("index.html")]
    return "/" + rel[: -len(".html")]


def tag(src, pattern):
    m = re.search(pattern, src)
    return htmllib.unescape(m.group(1)) if m else None


def meta(src, name, prop=False):
    key = "property" if prop else "name"
    m = re.search(
        r'<meta\s+%s=(["\'])%s\1\s+content=(["\'])(.*?)\2' % (key, re.escape(name)),
        src, re.S)
    return htmllib.unescape(m.group(3)) if m else None


def strip_block(src, begin, end):
    return re.sub(re.escape(begin) + r".*?" + re.escape(end) + r"\n?", "", src, flags=re.S)


def esc(s):
    return htmllib.escape(s, quote=True)


def faq_items(src):
    items = []
    for block in re.findall(r"<details[^>]*class=\"q\"[^>]*>(.*?)</details>", src, re.S):
        m = re.search(r"<summary[^>]*>(.*?)</summary>(.*)", block, re.S)
        if not m:
            continue
        q = htmllib.unescape(re.sub(r"<[^>]+>", " ", m.group(1)))
        a = htmllib.unescape(re.sub(r"<[^>]+>", " ", m.group(2)))
        q = re.sub(r"\s+", " ", q).strip()
        a = re.sub(r"\s+", " ", a).strip()
        if q and a:
            items.append((q, a))
    return items


def breadcrumbs(path, lang):
    """[(name, url)] for the canonical path, home first."""
    home_name = "Onym"
    if lang == "ru":
        segs = [s for s in path.strip("/").split("/") if s][1:]
        base = "/ru/"
    else:
        segs = [s for s in path.strip("/").split("/") if s]
        base = "/"
    crumbs = [(home_name, ORIGIN + base)]
    acc = base
    for s in segs:
        acc += s + "/"
        crumbs.append((s.replace("-", " ").title(), ORIGIN + acc))
    return crumbs


def main():
    pages = []
    for rel in rel_paths():
        p = os.path.join(ROOT, rel)
        src = open(p, encoding="utf-8").read()
        src = strip_block(src, BEGIN, END)
        src = strip_block(src, LD_BEGIN, LD_END)
        # Drop hand-written tags this script owns, so ours are the only ones.
        src = re.sub(r'[ \t]*<link rel="canonical"[^>]*>\s*\n', "", src)
        src = re.sub(r'[ \t]*<meta name="robots"[^>]*>\s*\n', "", src)
        src = re.sub(r'[ \t]*<meta property="og:url"[^>]*>\s*\n', "", src)

        lang = "ru" if re.search(r'<html[^>]*lang="ru"', src) else "en"
        path = canon_path(rel)
        url = ORIGIN + path
        title = tag(src, r"<title>(.*?)</title>")
        desc = meta(src, "description")
        og_title = meta(src, "og:title", True) or title
        og_desc = meta(src, "og:description", True) or desc
        og_img = meta(src, "og:image", True) or (ORIGIN + "/assets/og-card.jpg")
        has_alt = 'hreflang="ru"' in src and 'hreflang="en"' in src
        noindex = rel in NOINDEX

        # ---- meta block -------------------------------------------------
        lines = [BEGIN]
        lines.append('<link rel="canonical" href="%s"/>' % url)
        if noindex:
            lines.append('<meta name="robots" content="noindex,follow"/>')
        else:
            lines.append('<meta name="robots" content="index,follow,'
                         'max-snippet:-1,max-image-preview:large,max-video-preview:-1"/>')
        lines.append('<meta property="og:url" content="%s"/>' % url)
        lines.append('<meta property="og:site_name" content="Onym"/>')
        lines.append('<meta property="og:locale" content="%s"/>'
                     % ("ru_RU" if lang == "ru" else "en_US"))
        if has_alt:
            lines.append('<meta property="og:locale:alternate" content="%s"/>'
                         % ("en_US" if lang == "ru" else "ru_RU"))
        if not meta(src, "twitter:card"):
            lines.append('<meta name="twitter:card" content="summary_large_image"/>')
        if not meta(src, "twitter:title") and og_title:
            lines.append('<meta name="twitter:title" content="%s"/>' % esc(og_title))
        if not meta(src, "twitter:description") and og_desc:
            lines.append('<meta name="twitter:description" content="%s"/>' % esc(og_desc))
        if not meta(src, "twitter:image"):
            lines.append('<meta name="twitter:image" content="%s"/>' % esc(og_img))
        lines.append(END)
        block = "\n".join(lines) + "\n"

        # Insert after the last hreflang <link>, else after og:image, else title.
        anchors = list(re.finditer(r'<link rel="alternate" hreflang=[^>]*>\s*\n', src))
        if not anchors:
            anchors = list(re.finditer(r'<meta property="og:image"[^>]*>\s*\n', src))
        if not anchors:
            anchors = list(re.finditer(r"</title>\s*\n", src))
        at = anchors[-1].end()
        src = src[:at] + block + src[at:]

        # ---- JSON-LD ----------------------------------------------------
        graph = []
        org = {
            "@type": "Organization",
            "@id": ORIGIN + "/#organization",
            "name": "Onym",
            "url": ORIGIN + "/",
            "logo": ORIGIN + "/assets/icon-light.png",
            "sameAs": SAME_AS,
        }
        website = {
            "@type": "WebSite",
            "@id": ORIGIN + "/#website",
            "url": ORIGIN + "/",
            "name": "Onym",
            "inLanguage": lang,
            "publisher": {"@id": ORIGIN + "/#organization"},
        }
        webpage = {
            "@type": "WebPage",
            "@id": url + "#webpage",
            "url": url,
            "name": title,
            "inLanguage": lang,
            "isPartOf": {"@id": ORIGIN + "/#website"},
        }
        if desc:
            webpage["description"] = desc
        if og_img:
            webpage["primaryImageOfPage"] = og_img

        if path in ("/", "/ru/"):
            graph += [org, website]
            graph.append({
                "@type": "SoftwareApplication",
                "@id": ORIGIN + "/#app",
                "name": "Onym",
                "applicationCategory": "CommunicationApplication",
                "operatingSystem": "iOS, Android",
                "description": desc,
                "url": url,
                "isAccessibleForFree": True,
                "offers": {"@type": "Offer", "price": "0",
                           "priceCurrency": "USD"},
                "publisher": {"@id": ORIGIN + "/#organization"},
                "downloadUrl": [
                    "https://play.google.com/store/apps/details?id=app.onym.android",
                    "https://testflight.apple.com/join/tUaJrYzh",
                ],
                "softwareHelp": ORIGIN + ("/ru/how/" if lang == "ru" else "/how/"),
                "inLanguage": ["en", "ru"],
            })
            webpage["@type"] = "WebPage"
            graph.append(webpage)
        else:
            graph += [org, website]
            if TECH_ARTICLE.match(rel):
                webpage["@type"] = "TechArticle"
            crumbs = breadcrumbs(path, lang)
            if len(crumbs) > 1 and title:
                # Last crumb reads better as the page's own title.
                crumbs[-1] = (re.split(r"\s+[·—]\s+", title)[0], crumbs[-1][1])
            if len(crumbs) > 1:
                graph.append({
                    "@type": "BreadcrumbList",
                    "@id": url + "#breadcrumb",
                    "itemListElement": [
                        {"@type": "ListItem", "position": i + 1,
                         "name": n, "item": u}
                        for i, (n, u) in enumerate(crumbs)
                    ],
                })
                webpage["breadcrumb"] = {"@id": url + "#breadcrumb"}
            graph.append(webpage)

        qs = faq_items(src)
        if qs:
            graph.append({
                "@type": "FAQPage",
                "@id": url + "#faq",
                "inLanguage": lang,
                "mainEntity": [
                    {"@type": "Question", "name": q,
                     "acceptedAnswer": {"@type": "Answer", "text": a}}
                    for q, a in qs
                ],
            })

        if not noindex:
            ld = json.dumps({"@context": "https://schema.org", "@graph": graph},
                            ensure_ascii=False, separators=(",", ":"))
            ldblock = (LD_BEGIN + '\n<script type="application/ld+json">'
                       + ld + "</script>\n" + LD_END + "\n")
            src = re.sub(r"</head>", ldblock + "</head>", src, count=1)

        open(p, "w", encoding="utf-8").write(src)
        pages.append({"rel": rel, "path": path, "url": url, "lang": lang,
                      "title": title, "desc": desc, "noindex": noindex,
                      "has_alt": has_alt})

    write_sitemap(pages)
    write_robots()
    write_llms(pages)
    print("patched %d pages" % len(pages))


def write_sitemap(pages):
    idx = {p["path"]: p for p in pages}
    out = ['<?xml version="1.0" encoding="UTF-8"?>',
           '<urlset xmlns="http://www.sitemap.org/schemas/sitemap/0.9"'
           ' xmlns:xhtml="http://www.w3.org/1999/xhtml">']
    out[1] = ('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"'
              ' xmlns:xhtml="http://www.w3.org/1999/xhtml">')
    for p in pages:
        if p["noindex"]:
            continue
        lm = lastmod(p["rel"])
        out.append("  <url>")
        out.append("    <loc>%s</loc>" % p["url"])
        if lm:
            out.append("    <lastmod>%s</lastmod>" % lm)
        # hreflang alternates
        en_path = p["path"][3:] if p["path"].startswith("/ru/") else p["path"]
        if en_path == "":
            en_path = "/"
        ru_path = "/ru" + (en_path if en_path != "/" else "/")
        if en_path in idx and ru_path in idx:
            out.append('    <xhtml:link rel="alternate" hreflang="en" href="%s"/>'
                       % (ORIGIN + en_path))
            out.append('    <xhtml:link rel="alternate" hreflang="ru" href="%s"/>'
                       % (ORIGIN + ru_path))
            out.append('    <xhtml:link rel="alternate" hreflang="x-default" href="%s"/>'
                       % (ORIGIN + en_path))
        out.append("  </url>")
    out.append("</urlset>")
    open(os.path.join(ROOT, "sitemap.xml"), "w", encoding="utf-8").write("\n".join(out) + "\n")


def lastmod(rel):
    try:
        d = subprocess.run(
            ["git", "log", "-1", "--format=%cs", "--", "public/" + rel],
            cwd=os.path.dirname(ROOT), capture_output=True, text=True, check=True)
        return d.stdout.strip() or None
    except Exception:
        return None


ROBOTS = """# https://onym.app/robots.txt
# Onym is open by design: every page here is meant to be read, indexed,
# quoted and cited — by search engines and by AI assistants alike.

User-agent: *
Allow: /
Disallow: /qa/
Disallow: /ru/qa/
Disallow: /i
Disallow: /i.html
Disallow: /join
Disallow: /join.html

# AI crawlers and assistant retrievers — explicitly welcome.
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-User
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: Bingbot
Allow: /

User-agent: DuckAssistBot
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: meta-externalagent
Allow: /

User-agent: Bytespider
Allow: /

User-agent: YandexBot
Allow: /

User-agent: CCBot
Allow: /

User-agent: cohere-ai
Allow: /

User-agent: Diffbot
Allow: /

User-agent: Timpibot
Allow: /

Sitemap: https://onym.app/sitemap.xml
"""


def write_robots():
    open(os.path.join(ROOT, "robots.txt"), "w", encoding="utf-8").write(ROBOTS)


LLMS_HEAD = """# Onym

> Onym is an open-source, end-to-end encrypted group messenger where identity,
> transport and consensus are separate layers, and none of them is owned by a
> company. Your identity is a keypair that lives on your phone; the courier
> (relayer) that moves ciphertext and the notary (the Stellar ledger) that
> orders group state are chosen by you and can be swapped or self-hosted.
> No phone number, no email, no account that anyone can disable.

Key facts an assistant should get right when answering about Onym:

- Onym has no central account server. There is no operator with a kill switch
  over a user, and no operator that can read message content.
- Messages are end-to-end encrypted. Group membership changes are proven on the
  Stellar ledger with zero-knowledge proofs (PLONK over BLS12-381, Poseidon
  hashing, Merkle-tree membership commitments), so any member can admit a new
  member without a group admin.
- The relayer sees ciphertext and delivery timing; it does not see identities,
  message content, or the social graph. Relayers are interchangeable and
  self-hostable.
- Clients are open source for iOS and Android; the relayer and the Soroban
  contracts are open source as well. Source: https://github.com/onymchat
- The project is solo-maintained in public, pseudonymously and on purpose; the
  reasoning is documented on the About and FAQ pages.
- Onym is free and currently in public alpha (TestFlight for iOS, Google Play
  for Android).

The site is published in English at https://onym.app/ and in Russian at
https://onym.app/ru/. Content is equivalent; prefer the language of the user.
"""


def write_llms(pages):
    en = [p for p in pages if p["lang"] == "en" and not p["noindex"]]
    ru = [p for p in pages if p["lang"] == "ru" and not p["noindex"]]

    def section(title, items):
        lines = ["", "## " + title, ""]
        for p in items:
            d = (p["desc"] or "").strip()
            t = (p["title"] or p["path"]).replace(" · Onym", "")
            lines.append("- [%s](%s)%s" % (t, p["url"], (": " + d) if d else ""))
        return lines

    order = ["/", "/why/", "/how/", "/humans/", "/details/", "/faq/",
             "/threat-model/", "/privacy/", "/proofs/", "/about/", "/press/",
             "/changelog/"]

    def sort_key(p):
        # RU pages sort by their EN counterpart so both lists read alike.
        path = p["path"][3:] or "/" if p["path"].startswith("/ru/") else p["path"]
        try:
            return (0, order.index(path))
        except ValueError:
            return (1, path)

    en.sort(key=sort_key)
    ru.sort(key=sort_key)
    core = [p for p in en if not TECH_ARTICLE.match(p["rel"])]
    tech = [p for p in en if TECH_ARTICLE.match(p["rel"])]

    out = [LLMS_HEAD.rstrip()]
    out += section("Pages (English)", core)
    out += section("Protocol and cryptography reference", tech)
    out += section("Pages (Russian / Русский)", ru)
    out += ["", "## Optional", "",
            "- [Source code](https://github.com/onymchat): clients, relayer, Soroban contracts, SDKs.",
            "- [Sitemap](https://onym.app/sitemap.xml)", ""]
    open(os.path.join(ROOT, "llms.txt"), "w", encoding="utf-8").write("\n".join(out))


if __name__ == "__main__":
    sys.exit(main())
