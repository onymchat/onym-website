import React from 'react';
import { Icon, IconName } from './icons';

export type OnymTheme = 'light' | 'dark' | 'auto';

export interface ScreenProps {
  /** 'light' | 'dark' | 'auto' (follows the OS). Default 'auto'. */
  theme?: OnymTheme;
  /** 'surface' (#F5F5F7 / #0E0E10, for settings-style lists) or 'bg' (pure white/black, for chat). Default 'surface'. */
  background?: 'surface' | 'bg';
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Root wrapper for every design. Provides the token scope, theme, background
 * and a scrollable content area. All other components must live inside a
 * Screen — outside it they render unstyled.
 */
export function Screen({ theme = 'auto', background = 'surface', children, className, style }: ScreenProps) {
  return (
    <div
      className={['on-screen', className].filter(Boolean).join(' ')}
      data-on-theme={theme === 'auto' ? undefined : theme}
      data-on-bg={background}
      style={style}
    >
      {children}
    </div>
  );
}

export interface ScreenContentProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/** Scrollable content region of a Screen; leaves room for a TabDock/Composer. */
export function ScreenContent({ children, className, style }: ScreenContentProps) {
  return (
    <div className={['on-screen-content', className].filter(Boolean).join(' ')} style={style}>
      {children}
    </div>
  );
}

export interface GlassButtonProps {
  /** Icon glyph to show. */
  icon?: IconName;
  /** Text label — turns the circle into a capsule. */
  label?: React.ReactNode;
  /** Tint the content blue (accent) instead of primary text color. */
  tinted?: boolean;
  onClick?: () => void;
  className?: string;
  'aria-label'?: string;
}

/** Circular (or capsule, when given a label) Liquid Glass button — nav bar
 * back/actions, floating controls. */
export function GlassButton({ icon, label, tinted, onClick, className, ...rest }: GlassButtonProps) {
  return (
    <button
      type="button"
      className={[
        'on-glass',
        'on-glass-button',
        label != null ? 'on-capsule' : '',
        tinted ? 'on-tinted' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      onClick={onClick}
      aria-label={rest['aria-label']}
    >
      {icon ? <Icon name={icon} size={22} /> : null}
      {label}
    </button>
  );
}

export interface NavBarProps {
  /** Centered title (inline style, 17pt semibold). */
  title?: React.ReactNode;
  /** Small line under the title (presence status etc.). */
  subtitle?: React.ReactNode;
  /** Leading side — typically a GlassButton with a chevron-left. */
  leading?: React.ReactNode;
  /** Trailing side — GlassButtons / other controls. */
  trailing?: React.ReactNode;
  /** Convenience: render a standard glass back button. */
  onBack?: () => void;
  className?: string;
}

/** Inline navigation bar: glass buttons at the sides, centered title. */
export function NavBar({ title, subtitle, leading, trailing, onBack, className }: NavBarProps) {
  return (
    <div className={['on-navbar', className].filter(Boolean).join(' ')}>
      <div className="on-navbar-side">
        {onBack ? <GlassButton icon="chevron-left" onClick={onBack} aria-label="Back" /> : null}
        {leading}
      </div>
      <div className="on-navbar-center">
        {title != null ? <div className="on-navbar-title">{title}</div> : null}
        {subtitle != null ? <div className="on-navbar-subtitle">{subtitle}</div> : null}
      </div>
      <div className="on-navbar-side">{trailing}</div>
    </div>
  );
}

export interface TabDockTab {
  icon: IconName;
  label: string;
}

export interface TabDockProps {
  /** Two or three tabs shown in the glass capsule. */
  tabs: TabDockTab[];
  /** Index of the active tab. */
  activeIndex?: number;
  /** Show the detached circular search button (Apple's Liquid Glass search slot). Default true. */
  search?: boolean;
  onTabChange?: (index: number) => void;
  onSearch?: () => void;
  className?: string;
}

/** Floating Liquid Glass tab bar: a capsule of tabs plus a detached circular
 * search button, pinned to the bottom of the Screen. */
export function TabDock({ tabs, activeIndex = 0, search = true, onTabChange, onSearch, className }: TabDockProps) {
  return (
    <div className={['on-tab-dock', className].filter(Boolean).join(' ')}>
      <div className="on-glass on-tab-capsule">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            type="button"
            className={['on-tab', i === activeIndex ? 'on-active' : ''].filter(Boolean).join(' ')}
            onClick={() => onTabChange?.(i)}
          >
            <Icon name={tab.icon} size={24} />
            {tab.label}
          </button>
        ))}
      </div>
      {search ? (
        <button type="button" className="on-glass on-tab-search" onClick={onSearch} aria-label="Search">
          <Icon name="search" size={24} strokeWidth={2.2} />
        </button>
      ) : null}
    </div>
  );
}
