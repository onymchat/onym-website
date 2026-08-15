import React from 'react';
import { AccentName } from './content';

export interface OnymMarkProps {
  /** Square size in px. Default 40. */
  size?: number;
  /** Stroke color; defaults to currentColor (inherits text color). */
  color?: string;
  /** Slow continuous rotation (loading/branding moments). */
  spin?: boolean;
  className?: string;
}

/** The Onym logo: a broken ring — two 46% arcs with 4% gaps, rotated −45°,
 * stroke width 16% of the diameter. */
export function OnymMark({ size = 40, color = 'currentColor', spin, className }: OnymMarkProps) {
  const stroke = size * 0.16;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <svg
      className={['on-mark', spin ? 'on-spin' : '', className].filter(Boolean).join(' ')}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden="true"
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeDasharray={`${0.46 * c} ${0.04 * c} ${0.46 * c} ${0.04 * c}`}
        transform={`rotate(-45 ${size / 2} ${size / 2})`}
      />
    </svg>
  );
}

export interface AvatarProps {
  /** Diameter in px. Default 40. */
  size?: number;
  /** Image URL; when absent the OnymMark placeholder renders. */
  src?: string;
  alt?: string;
  /** Single letter/emoji fallback instead of the mark. */
  initial?: React.ReactNode;
  /** Identity accent used to tint the placeholder mark. */
  accent?: AccentName;
  /** Active-identity state: blue ring + blue-tinted fill. */
  active?: boolean;
  className?: string;
}

/** Circular avatar. Shows an image when given, otherwise the Onym broken-ring
 * mark (or an initial). `active` renders the identity-ring state. */
export function Avatar({ size = 40, src, alt = '', initial, accent, active, className }: AvatarProps) {
  return (
    <span
      className={['on-avatar', active ? 'on-active' : '', className].filter(Boolean).join(' ')}
      style={{ width: size, height: size, fontSize: size * 0.42, fontWeight: 600 }}
    >
      {src ? (
        <img src={src} alt={alt} />
      ) : initial != null ? (
        initial
      ) : (
        <OnymMark
          size={size * 0.55}
          color={accent ? `var(--on-accent-${accent})` : active ? 'var(--on-blue)' : 'var(--on-text2)'}
        />
      )}
    </span>
  );
}
