import React from 'react';
import { Icon, IconName } from './icons';

export type TileColor =
  | 'purple'
  | 'blue'
  | 'indigo'
  | 'orange'
  | 'green'
  | 'gray'
  | 'red'
  | 'teal'
  | 'amber';

export type AccentName = 'orange' | 'blue' | 'green' | 'purple' | 'pink' | 'yellow';

export interface LargeTitleProps {
  children?: React.ReactNode;
  className?: string;
}

/** 34pt bold screen title (iOS large-title style). */
export function LargeTitle({ children, className }: LargeTitleProps) {
  return <h1 className={['on-large-title', className].filter(Boolean).join(' ')}>{children}</h1>;
}

export interface SectionLabelProps {
  children?: React.ReactNode;
  className?: string;
}

/** Uppercase section header above a Card (e.g. "TRANSPORT"). */
export function SectionLabel({ children, className }: SectionLabelProps) {
  return <div className={['on-section-label', className].filter(Boolean).join(' ')}>{children}</div>;
}

export interface FootnoteProps {
  children?: React.ReactNode;
  className?: string;
}

/** Small secondary explanation text under a Card. */
export function Footnote({ children, className }: FootnoteProps) {
  return <p className={['on-footnote', className].filter(Boolean).join(' ')}>{children}</p>;
}

export interface CardProps {
  children?: React.ReactNode;
  /** Add a hairline border (form/field cards). Default false (flat settings card). */
  bordered?: boolean;
  /** Add 16px inner padding for free-form content. Default false (rows manage their own). */
  padded?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/** Rounded (14pt) grouped container on surface2 — stack Rows inside it, or set
 * `padded` for free-form content. */
export function Card({ children, bordered, padded, className, style }: CardProps) {
  return (
    <div
      className={['on-card', bordered ? 'on-bordered' : '', padded ? 'on-padded' : '', className]
        .filter(Boolean)
        .join(' ')}
      style={style}
    >
      {children}
    </div>
  );
}

export interface IconTileProps {
  /** Glyph shown white on the colored tile. */
  icon: IconName;
  /** Tile background from the settings palette. Default 'blue'. */
  color?: TileColor;
  className?: string;
}

/** 30×30 rounded (7pt) colored icon tile used at the leading edge of Rows. */
export function IconTile({ icon, color = 'blue', className }: IconTileProps) {
  return (
    <span
      className={['on-icon-tile', className].filter(Boolean).join(' ')}
      style={{ background: `var(--on-tile-${color})` }}
    >
      <Icon name={icon} size={16} />
    </span>
  );
}

export interface RowProps {
  title: React.ReactNode;
  /** One-line secondary text; truncates with an ellipsis. */
  subtitle?: React.ReactNode;
  /** Render the subtitle in SF Mono (keys, IDs, URLs). */
  mono?: boolean;
  /** Leading colored icon tile. */
  icon?: IconName;
  /** Tile color when `icon` is set. */
  iconColor?: TileColor;
  /** Arbitrary leading element instead of icon/iconColor (e.g. an Avatar). */
  leading?: React.ReactNode;
  /** Trailing content: value text, Chip, Toggle, Badge… */
  trailing?: React.ReactNode;
  /** Show a disclosure chevron. Default true when onClick is set. */
  chevron?: boolean;
  onClick?: () => void;
  className?: string;
}

/** Settings-style list row: leading tile, title/subtitle, trailing content and
 * chevron. Consecutive Rows inside a Card draw their own inset dividers. */
export function Row({
  title,
  subtitle,
  mono,
  icon,
  iconColor = 'blue',
  leading,
  trailing,
  chevron,
  onClick,
  className,
}: RowProps) {
  const hasLeading = leading != null || icon != null;
  const showChevron = chevron ?? onClick != null;
  const Tag: 'button' | 'div' = onClick ? 'button' : 'div';
  return (
    <Tag
      type={onClick ? 'button' : undefined}
      className={['on-row', hasLeading ? '' : 'on-no-icon', className].filter(Boolean).join(' ')}
      onClick={onClick}
    >
      {leading ?? (icon ? <IconTile icon={icon} color={iconColor} /> : null)}
      <span className="on-row-main">
        <span className="on-row-title">{title}</span>
        {subtitle != null ? (
          <span className={['on-row-subtitle', mono ? 'on-mono' : ''].filter(Boolean).join(' ')}>{subtitle}</span>
        ) : null}
      </span>
      {trailing != null ? <span className="on-row-trailing">{trailing}</span> : null}
      {showChevron ? (
        <span className="on-row-chevron">
          <Icon name="chevron-right" size={14} strokeWidth={2.5} />
        </span>
      ) : null}
    </Tag>
  );
}

export interface ChipProps {
  children?: React.ReactNode;
  /** Tint with an identity accent (14% background, solid text). */
  accent?: AccentName;
  /** Semantic tint shortcuts. */
  tone?: 'green' | 'red' | 'blue';
  className?: string;
}

/** Tiny uppercase status badge (radius 4): "DEFAULT", "ACTIVE", "VERIFIED"… */
export function Chip({ children, accent, tone, className }: ChipProps) {
  const fg = accent ? `var(--on-accent-${accent})` : tone ? `var(--on-${tone})` : undefined;
  return (
    <span
      className={['on-chip', fg ? 'on-accented' : '', className].filter(Boolean).join(' ')}
      style={fg ? ({ ['--on-chip-fg' as string]: fg } as React.CSSProperties) : undefined}
    >
      {children}
    </span>
  );
}

export interface BadgeProps {
  /** Count or short text. */
  children?: React.ReactNode;
  /** Red variant for unread/alerts; default blue. */
  tone?: 'blue' | 'red';
  className?: string;
}

/** Small filled capsule counter (unread counts, invitation badges). */
export function Badge({ children, tone = 'blue', className }: BadgeProps) {
  return (
    <span className={['on-badge', tone === 'red' ? 'on-red' : '', className].filter(Boolean).join(' ')}>
      {children}
    </span>
  );
}

export interface ListItemProps {
  /** Leading element — typically an Avatar. */
  leading?: React.ReactNode;
  title: React.ReactNode;
  /** Message preview line; truncates. */
  preview?: React.ReactNode;
  /** Prefix the preview with a small lock glyph (encrypted chats). */
  locked?: boolean;
  /** Time label at the top right ("12:04", "Tue"). */
  time?: React.ReactNode;
  /** Unread Badge / chevron / other trailing stack content. */
  trailing?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

/** Conversation list row: avatar, name, preview, time and unread badge.
 * Consecutive items draw inset dividers. */
export function ListItem({ leading, title, preview, locked, time, trailing, onClick, className }: ListItemProps) {
  return (
    <button type="button" className={['on-list-item', className].filter(Boolean).join(' ')} onClick={onClick}>
      {leading}
      <span className="on-list-item-main">
        <span className="on-list-item-title">{title}</span>
        {preview != null ? (
          <span className="on-list-item-preview">
            {locked ? <Icon name="lock" size={12} /> : null}
            {preview}
          </span>
        ) : null}
      </span>
      <span className="on-list-item-side">
        {time != null ? <span className="on-list-item-time">{time}</span> : null}
        {trailing}
      </span>
    </button>
  );
}
