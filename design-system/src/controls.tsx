import React from 'react';
import { Icon, IconName } from './icons';

export interface PrimaryButtonProps {
  children?: React.ReactNode;
  /** Leading glyph. */
  icon?: IconName;
  disabled?: boolean;
  /** Red fill for destructive actions. */
  destructive?: boolean;
  /** Soft colored glow under the button (main CTA of a flow). */
  prominent?: boolean;
  onClick?: () => void;
  className?: string;
}

/** Full-width filled CTA: 50pt tall, radius 14, accent-blue fill. Disabled
 * state renders at 45% opacity. */
export function PrimaryButton({ children, icon, disabled, destructive, prominent, onClick, className }: PrimaryButtonProps) {
  return (
    <button
      type="button"
      className={[
        'on-primary-button',
        destructive ? 'on-destructive' : '',
        prominent ? 'on-prominent' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      disabled={disabled}
      onClick={onClick}
    >
      {icon ? <Icon name={icon} size={18} /> : null}
      {children}
    </button>
  );
}

export interface TextButtonProps {
  children?: React.ReactNode;
  icon?: IconName;
  /** Red text for destructive actions. */
  destructive?: boolean;
  /** Muted secondary-text color instead of blue. */
  quiet?: boolean;
  onClick?: () => void;
  className?: string;
}

/** Borderless full-width text button (44pt hit target), blue by default. */
export function TextButton({ children, icon, destructive, quiet, onClick, className }: TextButtonProps) {
  return (
    <button
      type="button"
      className={['on-text-button', destructive ? 'on-destructive' : '', quiet ? 'on-quiet' : '', className]
        .filter(Boolean)
        .join(' ')}
      onClick={onClick}
    >
      {icon ? <Icon name={icon} size={17} /> : null}
      {children}
    </button>
  );
}

export interface ToggleProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
  'aria-label'?: string;
}

/** iOS switch (51×31), green when on. */
export function Toggle({ checked = false, onChange, className, ...rest }: ToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={rest['aria-label']}
      className={['on-toggle', className].filter(Boolean).join(' ')}
      onClick={() => onChange?.(!checked)}
    />
  );
}

export interface TextFieldProps {
  value?: string;
  placeholder?: string;
  /** Render a multi-line textarea instead of a single-line input. */
  multiline?: boolean;
  /** Rows when multiline. Default 3. */
  rows?: number;
  /** SF Mono input (relay URLs, keys). */
  mono?: boolean;
  /** Helper text under the field. */
  helper?: React.ReactNode;
  onChange?: (value: string) => void;
  className?: string;
  'aria-label'?: string;
}

/** Rounded form field on surface2 with a hairline border; blue border on
 * focus. Supports multiline and monospaced variants. */
export function TextField({ value, placeholder, multiline, rows = 3, mono, helper, onChange, className, ...rest }: TextFieldProps) {
  const inputClass = ['on-field-input', mono ? 'on-mono' : ''].filter(Boolean).join(' ');
  return (
    <div className={['on-field', className].filter(Boolean).join(' ')}>
      {multiline ? (
        <textarea
          className={inputClass}
          value={value}
          placeholder={placeholder}
          rows={rows}
          aria-label={rest['aria-label']}
          onChange={(e) => onChange?.(e.target.value)}
        />
      ) : (
        <input
          className={inputClass}
          type="text"
          value={value}
          placeholder={placeholder}
          aria-label={rest['aria-label']}
          onChange={(e) => onChange?.(e.target.value)}
        />
      )}
      {helper != null ? <div className="on-field-helper">{helper}</div> : null}
    </div>
  );
}

export interface StepIndicatorProps {
  /** 1-based current step. */
  step: number;
  /** Total steps. Default 3. */
  count?: number;
  className?: string;
}

/** Onboarding progress capsules: active step stretches to 22pt. */
export function StepIndicator({ step, count = 3, className }: StepIndicatorProps) {
  return (
    <div className={['on-steps', className].filter(Boolean).join(' ')}>
      {Array.from({ length: count }, (_, i) => (
        <i key={i} className={i === step - 1 ? 'on-active' : undefined} />
      ))}
    </div>
  );
}
