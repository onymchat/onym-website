/* Onym home-page iPhone mockups.
   Renders the real OnymDesign React components (the same compiled bundle the
   iOS design system ships) into the .shot containers of the flow section.
   Ported from the "Onym Website" Claude Design board. */
(function () {
  'use strict';
  var h = React.createElement;
  var D = window.OnymDesign;
  if (!D) return;

  var RU = document.documentElement.lang === 'ru';
  var S = RU ? {
    largeChats: 'Алиса',
    chats: [
      { title: 'Поездка на выходные', preview: 'Майя: Я забронировала домик', time: '19:12' },
      { title: 'Семья', preview: 'Папа: В воскресенье у нас?', time: '18:40' },
      { title: 'Команда проекта', preview: 'Вы: Новая сборка готова', time: 'Вт' },
      { title: 'Соседи', preview: 'Лео: Нашёл пропавшего кота', time: 'Пн' }
    ],
    tabs: [{ icon: 'bubble', label: 'Чаты' }, { icon: 'gear', label: 'Настройки' }],
    convTitle: 'Поездка на выходные', convSub: '4 участника', today: 'СЕГОДНЯ',
    msg1: 'Я забронировала домик — с пятницы по воскресенье.',
    msg2: 'Две спальни, а терраса выходит на озеро.',
    msg3: 'Отлично. Я возьму каяк.',
    msg4: 'Я за рулём — три места свободны.',
    msg5: 'Добавляю вас обоих в список.',
    maya: 'Майя', leo: 'Лео', message: 'Сообщение',
    welcome: 'Добро пожаловать', noMsgs: 'Сообщений пока нет. Поздоровайтесь.',
    invitation: 'Приглашение',
    houseRules: 'Правила: будьте добры, делитесь лучшими фото, без спойлеров. Рады вам.',
    founderBy: 'Майя · основатель',
    g1t: 'Сквозное шифрование', g1s: 'Читать переписку может только ваша группа.',
    g2t: 'Без телефона и почты', g2s: 'Ваша личность — ключ, которым владеете вы.',
    g3t: 'Без центрального сервера', g3s: 'Членство закреплено в Stellar.',
    settings: 'Настройки', alice: 'Алиса', active: 'Активна',
    thisDevice: 'Это устройство · 4 группы', scanHint: 'Начните чат, отсканировав код',
    share: 'Поделиться', backup: 'Резерв', del: 'Удалить',
    anchors: 'Якоря', anchorsSub: 'Stellar · Testnet', relayer: 'Релэйер', relayerSub: 'Stellar Soroban',
    anchorsNote: 'Замените инстансы Onym собственными развёртываниями для максимальной приватности.',
    transport: 'Транспорт', nostr: 'Nostr-релеи', nostrSub: 'Инбокс и доставка приглашений',
    blossom: 'Blossom-релеи', blossomSub: 'Зашифрованное хранение медиа',
    notifications: 'Уведомления', alerts: 'Оповещения',
    newGroup: 'Новая группа', step: 'Шаг 1 из 2',
    groupName: 'Название группы', groupNameVal: 'Солнечный сад',
    groupNameHelp: 'Видно участникам. Можно изменить в любой момент.',
    inviteMsg: 'Текст приглашения', invitePh: 'Приветствие, правила группы или политика…',
    inviteHelp: 'Показывается людям до принятия приглашения. Необязательно.',
    groupType: 'Тип группы',
    founder: 'Основатель', founderSub: 'Вы решаете, кто вступает',
    council: 'Совет', councilSub: 'Изменения одобряют участники вместе',
    typeNote: 'Вы основатель — вы решаете, кто вступает, и управляете настройками группы. Общаться и делиться могут все; членство контролируете только вы.',
    next: 'Далее · Добавить людей',
    relays: 'Nostr-релеи', configured: 'Настроено · 1', official: 'Onym Official', chipDefault: 'По умолч.',
    addCustom: 'Свой URL', add: 'Добавить',
    addHelp: 'Используйте приватное развёртывание, localhost или любой доверенный Nostr-релей. Только схема wss://.',
    restore: 'Восстановить по умолчанию', restoreSub: 'Вернуть Onym Official как единственный релей',
    applyNote: 'Изменения применяются при следующем запуске. Транспорт читает список релеев один раз при старте.',
    selfHost: 'Свой хостинг', runOwn: 'Запустите свой релей', runOwnSub: 'Разверните Nostr-релей в Docker'
  } : {
    largeChats: 'Alice',
    chats: [
      { title: 'Weekend Trip', preview: 'Maya: I booked the cabin', time: '19:12' },
      { title: 'Family', preview: 'Dad: Sunday at our place?', time: '18:40' },
      { title: 'Project Team', preview: 'You: The new build is ready', time: 'Tue' },
      { title: 'Neighbors', preview: 'Leo: Found the missing cat', time: 'Mon' }
    ],
    tabs: [{ icon: 'bubble', label: 'Chats' }, { icon: 'gear', label: 'Settings' }],
    convTitle: 'Weekend Trip', convSub: '4 members', today: 'TODAY',
    msg1: 'I booked the cabin — Friday to Sunday.',
    msg2: 'Two bedrooms, and the porch faces the lake.',
    msg3: "Perfect. I'll bring the kayak.",
    msg4: 'I can drive — three seats free.',
    msg5: 'Adding you both to the ride list.',
    maya: 'Maya', leo: 'Leo', message: 'Message',
    welcome: 'Welcome', noMsgs: 'No messages yet. Say hi.',
    invitation: 'Invitation',
    houseRules: "House rules: be kind, share the good photos, no spoilers. Glad you're here.",
    founderBy: 'Maya · founder',
    g1t: 'End-to-end encrypted', g1s: "Only your group can read what's sent.",
    g2t: 'No phone number, no email', g2s: 'Your identity is a key you own.',
    g3t: 'No central server', g3s: 'Membership is anchored on Stellar.',
    settings: 'Settings', alice: 'Alice', active: 'Active',
    thisDevice: 'This device · 4 groups', scanHint: 'Start a chat by scanning',
    share: 'Share', backup: 'Backup', del: 'Delete',
    anchors: 'Anchors', anchorsSub: 'Stellar · Testnet', relayer: 'Relayer', relayerSub: 'Stellar Soroban',
    anchorsNote: 'Replace Onym-run instances with your own deployments for maximum privacy.',
    transport: 'Transport', nostr: 'Nostr Relays', nostrSub: 'Inbox + invitation transport',
    blossom: 'Blossom Relays', blossomSub: 'Encrypted media storage',
    notifications: 'Notifications', alerts: 'Alerts',
    newGroup: 'New Group', step: 'Step 1 of 2',
    groupName: 'Group name', groupNameVal: 'Sunny Orchard',
    groupNameHelp: 'Visible to members. You can change this anytime.',
    inviteMsg: 'Invitation message', invitePh: 'Add a greeting, group rules, or policy…',
    inviteHelp: 'Shown to people before they accept your invite. Optional.',
    groupType: 'Group type',
    founder: 'Founder', founderSub: 'You control who joins',
    council: 'Council', councilSub: 'Members approve changes together',
    typeNote: "You're the founder — you decide who joins and manage the group's settings. Everyone can chat and share; only you control membership.",
    next: 'Next · Add people',
    relays: 'Nostr Relays', configured: 'Configured · 1', official: 'Onym Official', chipDefault: 'Default',
    addCustom: 'Add custom URL', add: 'Add',
    addHelp: 'Use a private deployment, localhost, or any Nostr relay you trust. URLs must use the wss:// scheme.',
    restore: 'Restore default', restoreSub: 'Re-install Onym Official as the only relay',
    applyNote: 'Changes apply on the next app launch. The inbox transport reads relays once at boot.',
    selfHost: 'Self-host', runOwn: 'Run your own relay', runOwnSub: 'Deploy a Nostr relay with Docker'
  };

  var STATUS_SVG = '<svg width="66" height="12" viewBox="0 0 66 12" fill="currentColor" style="display:block"><rect x="0" y="7.6" width="3" height="4.4" rx="1"></rect><rect x="4.8" y="5.4" width="3" height="6.6" rx="1"></rect><rect x="9.6" y="3.2" width="3" height="8.8" rx="1"></rect><rect x="14.4" y="1" width="3" height="11" rx="1"></rect><path d="M22.6 4.1a9.4 9.4 0 0111.4 0" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"></path><path d="M25.2 7.1a5.6 5.6 0 016.2 0" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"></path><circle cx="28.3" cy="10.3" r="1.5"></circle><rect x="41" y="1.4" width="21" height="9.6" rx="3.2" fill="none" stroke="currentColor" stroke-width="1.1" opacity=".38"></rect><rect x="42.6" y="3" width="16.4" height="6.4" rx="2"></rect><path d="M63.4 4.6c1.1.5 1.1 2.3 0 2.8z" opacity=".45"></path></svg>';

  function statusBar(time) {
    return h('div', {
      style: { flex: 'none', height: 54, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px 0 34px', color: 'var(--on-text)' }
    },
      h('span', { style: { fontSize: 16, fontWeight: 600, letterSpacing: '.1px' } }, time),
      h('span', { style: { display: 'flex' }, dangerouslySetInnerHTML: { __html: STATUS_SVG } })
    );
  }

  function homeIndicator() {
    return h('div', {
      style: { position: 'absolute', left: '50%', bottom: 9, transform: 'translateX(-50%)', width: 139, height: 5, borderRadius: 3, background: 'var(--on-text)', opacity: 0.32, zIndex: 20 }
    });
  }

  function qrEl() {
    var N = 25, cells = [];
    var s = 20260815;
    function rnd() { s = (s * 1664525 + 1013904223) % 4294967296; return s / 4294967296; }
    for (var r = 0; r < N; r++) {
      for (var c = 0; c < N; c++) {
        var inF = (r < 7 && c < 7) || (r < 7 && c >= N - 7) || (r >= N - 7 && c < 7);
        var on;
        if (inF) {
          var rr = r < 7 ? r : r - (N - 7), cc = c < 7 ? c : c - (N - 7);
          on = Math.max(Math.abs(rr - 3), Math.abs(cc - 3)) !== 2;
        } else {
          var near = (r < 9 && c < 9) || (r < 9 && c >= N - 9) || (r >= N - 9 && c < 9);
          on = !near && rnd() > 0.5;
        }
        if (on) cells.push(h('rect', { key: r + '-' + c, x: c, y: r, width: 1, height: 1 }));
      }
    }
    return h('svg', {
      viewBox: '0 0 25 25', width: '100%', height: '100%', shapeRendering: 'crispEdges',
      fill: 'currentColor', style: { color: 'var(--on-text)', display: 'block' }
    }, cells);
  }

  function gap(px) { return h('div', { style: { height: px } }); }

  var SCREENS = {
    chats: function (theme) {
      return h(D.Screen, { theme: theme, background: 'bg' },
        statusBar('19:15'),
        h('div', { style: { flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2px 14px 4px' } },
          h(D.GlassButton, { icon: 'person', label: h(D.Icon, { name: 'chevron-down', size: 16 }), tinted: true }),
          h('div', { style: { display: 'flex', alignItems: 'center', gap: 7 } },
            h(D.GlassButton, { icon: 'key' }),
            h(D.GlassButton, { icon: 'qr' }),
            h(D.GlassButton, { icon: 'pencil', tinted: true })
          )
        ),
        h(D.LargeTitle, null, S.largeChats),
        h(D.ScreenContent, null,
          h(D.ListItem, { leading: h(D.Avatar, { accent: 'green', size: 46 }), title: S.chats[0].title, preview: S.chats[0].preview, locked: true, time: S.chats[0].time, trailing: h(D.Badge, null, '2') }),
          h(D.ListItem, { leading: h(D.Avatar, { accent: 'purple', size: 46 }), title: S.chats[1].title, preview: S.chats[1].preview, locked: true, time: S.chats[1].time }),
          h(D.ListItem, { leading: h(D.Avatar, { accent: 'orange', size: 46 }), title: S.chats[2].title, preview: S.chats[2].preview, locked: true, time: S.chats[2].time, trailing: h(D.Icon, { name: 'check-double', size: 16, style: { color: 'var(--on-blue)' } }) }),
          h(D.ListItem, { leading: h(D.Avatar, { accent: 'blue', size: 46 }), title: S.chats[3].title, preview: S.chats[3].preview, locked: true, time: S.chats[3].time })
        ),
        h(D.TabDock, { tabs: S.tabs, activeIndex: 0 }),
        homeIndicator()
      );
    },

    conversation: function (theme) {
      return h(D.Screen, { theme: theme, background: 'bg' },
        statusBar('19:31'),
        h(D.NavBar, { title: S.convTitle, subtitle: S.convSub, leading: h(D.GlassButton, { icon: 'chevron-left' }), trailing: h(D.GlassButton, { icon: 'ellipsis' }) }),
        h(D.ScreenContent, null,
          h('div', { style: { display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 16px 0' } },
            h('div', { style: { alignSelf: 'center', fontSize: 12, fontWeight: 600, letterSpacing: '.04em', color: 'var(--on-text3)', padding: '4px 0 10px' } }, S.today),
            h(D.ChatBubble, { direction: 'incoming', accent: 'orange', sender: S.maya }, S.msg1),
            h(D.ChatBubble, { direction: 'incoming', accent: 'orange', meta: '19:22' }, S.msg2),
            h(D.ChatBubble, { direction: 'outgoing', accent: 'blue', meta: '19:26', read: true }, S.msg3),
            h(D.ChatBubble, { direction: 'incoming', accent: 'green', sender: S.leo, meta: '19:29' }, S.msg4),
            h(D.ChatBubble, { direction: 'outgoing', accent: 'blue', meta: '19:31', read: true }, S.ms5 || S.msg5)
          )
        ),
        h(D.ChatComposer, { placeholder: S.message, action: 'mic' }),
        homeIndicator()
      );
    },

    welcome: function (theme) {
      return h(D.Screen, { theme: theme, background: 'bg' },
        statusBar('9:41'),
        h(D.NavBar, { title: S.convTitle, subtitle: S.convSub, leading: h(D.GlassButton, { icon: 'chevron-left' }), trailing: h(D.GlassButton, { icon: 'ellipsis' }) }),
        h(D.ScreenContent, null,
          h('div', { style: { display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px 24px 22px' } },
            h(D.Avatar, { accent: 'green', size: 76 }),
            h('div', { style: { fontSize: 22, fontWeight: 600, letterSpacing: '-.4px', marginTop: 16, color: 'var(--on-text)' } }, S.welcome),
            h('div', { style: { fontSize: 15, lineHeight: 1.4, color: 'var(--on-text2)', marginTop: 4, textAlign: 'center' } }, S.noMsgs)
          ),
          h(D.SectionLabel, null, S.invitation),
          h(D.Card, { padded: true },
            h('div', { style: { fontSize: 15, lineHeight: 1.45, color: 'var(--on-text)' } }, S.houseRules),
            h('div', { style: { fontSize: 13, color: 'var(--on-text3)', marginTop: 10 } }, S.founderBy)
          ),
          gap(18),
          h(D.Card, null,
            h(D.Row, { icon: 'lock', iconColor: 'green', title: S.g1t, subtitle: S.g1s }),
            h(D.Row, { icon: 'key', iconColor: 'blue', title: S.g2t, subtitle: S.g2s }),
            h(D.Row, { icon: 'globe', iconColor: 'purple', title: S.g3t, subtitle: S.g3s })
          )
        ),
        h(D.ChatComposer, { placeholder: S.message, action: 'mic' }),
        homeIndicator()
      );
    },

    settings: function (theme) {
      function quickAction(label, color) {
        return h('div', {
          style: { flex: 1, height: 38, borderRadius: 11, background: 'var(--on-surface3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14.5, fontWeight: 500, color: color }
        }, label);
      }
      return h(D.Screen, { theme: theme, background: 'surface' },
        statusBar('19:22'),
        h(D.LargeTitle, null, S.settings),
        h(D.ScreenContent, null,
          h(D.Card, { padded: true },
            h('div', { style: { display: 'flex', alignItems: 'center', gap: 13 } },
              h(D.Avatar, { active: true, size: 52 }),
              h('div', { style: { flex: 1, minWidth: 0 } },
                h('div', { style: { display: 'flex', alignItems: 'center', gap: 8 } },
                  h('span', { style: { fontSize: 20, fontWeight: 600, letterSpacing: '-.3px', color: 'var(--on-text)' } }, S.alice),
                  h(D.Chip, { tone: 'green' }, S.active)
                ),
                h('div', { style: { fontSize: 13, color: 'var(--on-text2)', marginTop: 2 } }, S.thisDevice)
              ),
              h(D.GlassButton, { icon: 'pencil', tinted: true })
            ),
            h('div', { style: { display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 18 } },
              h('div', { style: { width: 154, height: 154, padding: 11, borderRadius: 14, background: 'var(--on-bg)', border: '1px solid var(--on-hairline)' } }, qrEl()),
              h('div', { style: { fontSize: 13.5, color: 'var(--on-text2)', marginTop: 10 } }, S.scanHint),
              h('div', { style: { fontFamily: 'var(--on-font-mono)', fontSize: 12.5, color: 'var(--on-text3)', marginTop: 6 } }, 'BLS b0338a0215bc…')
            ),
            h('div', { style: { display: 'flex', gap: 8, marginTop: 16 } },
              quickAction(S.share, 'var(--on-blue)'),
              quickAction(S.backup, 'var(--on-blue)'),
              quickAction(S.del, 'var(--on-red)')
            )
          ),
          gap(20),
          h(D.SectionLabel, null, S.anchors),
          h(D.Card, null,
            h(D.Row, { icon: 'shield', iconColor: 'indigo', title: S.anchors, subtitle: S.anchorsSub, chevron: true }),
            h(D.Row, { icon: 'doc', iconColor: 'teal', title: S.relayer, subtitle: S.relayerSub, chevron: true })
          ),
          h(D.Footnote, null, S.anchorsNote),
          gap(14),
          h(D.SectionLabel, null, S.transport),
          h(D.Card, null,
            h(D.Row, { icon: 'antenna', iconColor: 'blue', title: S.nostr, subtitle: S.nostrSub, chevron: true, trailing: '1' }),
            h(D.Row, { icon: 'globe', iconColor: 'purple', title: S.blossom, subtitle: S.blossomSub, chevron: true, trailing: '1' })
          ),
          gap(14),
          h(D.SectionLabel, null, S.notifications),
          h(D.Card, null,
            h(D.Row, { icon: 'bell', iconColor: 'red', title: S.alerts, trailing: h(D.Toggle, { checked: true }) })
          )
        ),
        h(D.TabDock, { tabs: S.tabs, activeIndex: 1 }),
        homeIndicator()
      );
    },

    newgroup: function (theme) {
      return h(D.Screen, { theme: theme, background: 'surface' },
        statusBar('19:45'),
        h(D.NavBar, { title: S.newGroup, subtitle: S.step, trailing: h(D.GlassButton, { icon: 'x' }) }),
        h('div', { style: { flex: 'none', padding: '2px 0 14px' } }, h(D.StepIndicator, { step: 1, count: 2 })),
        h(D.ScreenContent, null,
          h(D.SectionLabel, null, S.groupName),
          h(D.TextField, { value: S.groupNameVal, helper: S.groupNameHelp, onChange: function () {} }),
          gap(18),
          h(D.SectionLabel, null, S.inviteMsg),
          h(D.TextField, { multiline: true, rows: 3, placeholder: S.invitePh, helper: S.inviteHelp }),
          gap(18),
          h(D.SectionLabel, null, S.groupType),
          h(D.Card, null,
            h(D.Row, { icon: 'person', iconColor: 'orange', title: S.founder, subtitle: S.founderSub, trailing: h(D.Icon, { name: 'check', size: 18, style: { color: 'var(--on-blue)' } }) }),
            h(D.Row, { icon: 'globe', iconColor: 'gray', title: S.council, subtitle: S.councilSub })
          ),
          h(D.Footnote, null, S.typeNote)
        ),
        h('div', { style: { position: 'absolute', left: 0, right: 0, bottom: 30, zIndex: 15 } },
          h(D.PrimaryButton, { prominent: true }, S.next)
        ),
        homeIndicator()
      );
    },

    relays: function (theme) {
      return h(D.Screen, { theme: theme, background: 'surface' },
        statusBar('19:42'),
        h(D.NavBar, { title: S.relays, leading: h(D.GlassButton, { icon: 'chevron-left' }) }),
        h(D.ScreenContent, null,
          h(D.SectionLabel, null, S.configured),
          h(D.Card, null,
            h(D.Row, { icon: 'antenna', iconColor: 'blue', title: S.official, subtitle: 'wss://nostr.onym.app', mono: true, trailing: h(D.Chip, { tone: 'blue' }, S.chipDefault) })
          ),
          gap(18),
          h(D.SectionLabel, null, S.addCustom),
          h('div', { style: { display: 'flex', gap: 9, alignItems: 'flex-start', paddingRight: 16 } },
            h('div', { style: { flex: 1, minWidth: 0 } },
              h(D.TextField, { mono: true, placeholder: 'wss://relay.example.com' })
            ),
            h('div', { style: { flex: 'none', height: 46, padding: '0 20px', borderRadius: 'var(--on-radius-field)', background: 'var(--on-blue)', color: 'var(--on-on-accent)', display: 'flex', alignItems: 'center', fontSize: 16, fontWeight: 600 } }, S.add)
          ),
          h(D.Footnote, null, S.addHelp),
          gap(14),
          h(D.Card, null,
            h(D.Row, { icon: 'antenna', iconColor: 'gray', title: S.restore, subtitle: S.restoreSub, chevron: true })
          ),
          h(D.Footnote, null, S.applyNote),
          gap(14),
          h(D.SectionLabel, null, S.selfHost),
          h(D.Card, null,
            h(D.Row, { icon: 'doc', iconColor: 'green', title: S.runOwn, subtitle: S.runOwnSub, chevron: true })
          )
        ),
        h(D.TabDock, { tabs: S.tabs, activeIndex: 1 }),
        homeIndicator()
      );
    }
  };

  function siteTheme() {
    var t = document.documentElement.getAttribute('data-theme');
    if (t === 'light' || t === 'dark') return t;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  var STAGE_W = 393, STAGE_H = 852;
  var mounts = [];

  function renderAll() {
    var theme = siteTheme();
    mounts.forEach(function (m) {
      m.root.render(
        h('div', {
          className: 'mock-stage',
          style: { width: STAGE_W, height: STAGE_H, transformOrigin: '0 0', transform: 'scale(var(--mock-scale,1))', position: 'absolute', left: 0, top: 0 }
        }, SCREENS[m.name](theme))
      );
    });
  }

  function rescale() {
    document.querySelectorAll('.screen').forEach(function (sc) {
      var s = sc.clientWidth / STAGE_W;
      sc.style.setProperty('--mock-scale', String(s));
    });
  }

  document.querySelectorAll('.shot[data-mock]').forEach(function (el) {
    var name = el.getAttribute('data-mock');
    if (!SCREENS[name]) return;
    mounts.push({ root: ReactDOM.createRoot(el), name: name });
  });
  if (!mounts.length) return;

  renderAll();
  rescale();
  window.addEventListener('resize', rescale);
  new MutationObserver(renderAll).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', renderAll);
  }
})();
