import React from 'react';

export type IconName =
  | 'chevron-right'
  | 'chevron-left'
  | 'chevron-down'
  | 'plus'
  | 'search'
  | 'gear'
  | 'bubble'
  | 'person'
  | 'camera'
  | 'qr'
  | 'trash'
  | 'check'
  | 'check-double'
  | 'mic'
  | 'arrow-up'
  | 'pencil'
  | 'lock'
  | 'bell'
  | 'globe'
  | 'key'
  | 'shield'
  | 'doc'
  | 'share'
  | 'x'
  | 'ellipsis'
  | 'antenna'
  | 'link';

const PATHS: Record<IconName, React.ReactNode> = {
  'chevron-right': <path d="M9 5l7 7-7 7" />,
  'chevron-left': <path d="M15 5l-7 7 7 7" />,
  'chevron-down': <path d="M5 9l7 7 7-7" />,
  plus: <path d="M12 4v16M4 12h16" />,
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.5 15.5L21 21" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.2 5.2l2.1 2.1M16.7 16.7l2.1 2.1M18.8 5.2l-2.1 2.1M7.3 16.7l-2.1 2.1" />
    </>
  ),
  bubble: <path d="M21 12a8 8 0 01-8 8H4l2.3-3A8 8 0 1121 12z" />,
  person: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4.5 20.5c1.4-3.4 4.2-5 7.5-5s6.1 1.6 7.5 5" />
    </>
  ),
  camera: (
    <>
      <path d="M4 8h3l2-2.5h6L17 8h3a1 1 0 011 1v9a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1z" />
      <circle cx="12" cy="13" r="3.4" />
    </>
  ),
  qr: (
    <>
      <rect x="4" y="4" width="6" height="6" />
      <rect x="14" y="4" width="6" height="6" />
      <rect x="4" y="14" width="6" height="6" />
      <path d="M14 14h2.5v2.5H14zM17.5 17.5H20V20h-2.5" />
    </>
  ),
  trash: <path d="M4 7h16M9 7V4.5h6V7M6.5 7l1 13h9l1-13M10 11v5.5M14 11v5.5" />,
  check: <path d="M4.5 12.5l5 5L19.5 7" />,
  'check-double': <path d="M2.5 12.5l4.5 4.5L15.5 8.5M11.5 15.5l1.5 1.5L21.5 8.5" />,
  mic: (
    <>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5.5 11.5a6.5 6.5 0 0013 0M12 18v3.5" />
    </>
  ),
  'arrow-up': <path d="M12 20V4M5.5 10.5L12 4l6.5 6.5" />,
  pencil: <path d="M4 20l1-4.5L16.5 4a2.1 2.1 0 013 3L8 18.5 4 20z" />,
  lock: (
    <>
      <rect x="5.5" y="10.5" width="13" height="9.5" rx="2" />
      <path d="M8.5 10.5V7.5a3.5 3.5 0 017 0v3" />
    </>
  ),
  bell: <path d="M6 17h12c-1.4-1.5-1.8-3-1.8-5.2 0-3-1.5-5.8-4.2-5.8s-4.2 2.8-4.2 5.8c0 2.2-.4 3.7-1.8 5.2zM10.3 20a1.9 1.9 0 003.4 0" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.5 2.4 3.7 5.2 3.7 8.5s-1.2 6.1-3.7 8.5c-2.5-2.4-3.7-5.2-3.7-8.5s1.2-6.1 3.7-8.5z" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="14" r="4.5" />
      <path d="M11.5 10.5L20 2M16 6l3 3M13.5 8.5l2.5 2.5" />
    </>
  ),
  shield: <path d="M12 3l7.5 3v5.5c0 4.6-3 8-7.5 9.5-4.5-1.5-7.5-4.9-7.5-9.5V6L12 3z" />,
  doc: (
    <>
      <path d="M6 3h8l4 4v14H6V3zM14 3v4h4" />
      <path d="M9 12h6M9 16h6" />
    </>
  ),
  share: <path d="M12 14V3.5M8 7l4-3.5L16 7M5 11v9.5h14V11" />,
  x: <path d="M6 6l12 12M18 6L6 18" />,
  ellipsis: (
    <>
      <circle cx="5" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="19" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </>
  ),
  antenna: (
    <>
      <path d="M12 21V9M8.5 21h7" />
      <circle cx="12" cy="7" r="2.2" />
      <path d="M7.2 11.8a6.8 6.8 0 010-9.6M16.8 2.2a6.8 6.8 0 010 9.6" />
    </>
  ),
  link: <path d="M10 14a4.5 4.5 0 006.4 0l3-3a4.5 4.5 0 00-6.4-6.4l-1.7 1.7M14 10a4.5 4.5 0 00-6.4 0l-3 3a4.5 4.5 0 006.4 6.4l1.7-1.7" />,
};

export interface IconProps {
  /** Glyph name. */
  name: IconName;
  /** Square size in px. Default 24. */
  size?: number;
  /** Stroke width. Default 2. */
  strokeWidth?: number;
  className?: string;
  style?: React.CSSProperties;
}

/** Line icon set drawn in the SF Symbols style (round caps, 2pt stroke). */
export function Icon({ name, size = 24, strokeWidth = 2, className, style }: IconProps) {
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
