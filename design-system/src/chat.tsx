import React from 'react';
import { Icon } from './icons';
import { AccentName } from './content';

export interface ChatBubbleProps {
  children?: React.ReactNode;
  /** 'incoming' (accent @20% tint) or 'outgoing' (solid accent). */
  direction: 'incoming' | 'outgoing';
  /** Sender identity accent. Default 'blue'. */
  accent?: AccentName;
  /** Sender name shown above the bubble (group chats, incoming only). */
  sender?: React.ReactNode;
  /** Time/status line under the bubble ("12:04"). */
  meta?: React.ReactNode;
  /** Show a blue double-check read receipt next to the meta line. */
  read?: boolean;
  className?: string;
}

/** Chat message bubble (radius 14). Outgoing fills with the sender accent;
 * incoming tints it at 20%. */
export function ChatBubble({ children, direction, accent = 'blue', sender, meta, read, className }: ChatBubbleProps) {
  const accentVar = `var(--on-accent-${accent})`;
  return (
    <div
      className={['on-bubble-group', className].filter(Boolean).join(' ')}
      style={{ ['--on-bubble-accent' as string]: accentVar } as React.CSSProperties}
    >
      {sender != null && direction === 'incoming' ? (
        <div className="on-bubble-sender" style={{ color: accentVar }}>
          {sender}
        </div>
      ) : null}
      <div className={['on-bubble', direction === 'incoming' ? 'on-incoming' : 'on-outgoing'].join(' ')}>
        {children}
      </div>
      {meta != null || read ? (
        <div className="on-bubble-meta" style={direction === 'incoming' ? { alignSelf: 'flex-start' } : undefined}>
          {meta}
          {read ? <Icon name="check-double" size={14} /> : null}
        </div>
      ) : null}
    </div>
  );
}

export interface ChatComposerProps {
  value?: string;
  placeholder?: string;
  /** Show the leading attach (+) button. Default true. */
  attach?: boolean;
  /** Trailing button: 'send' (filled blue arrow) or 'mic'. Default 'mic' when empty, use 'send' when there is text. */
  action?: 'send' | 'mic';
  onChange?: (value: string) => void;
  onSend?: () => void;
  onAttach?: () => void;
  className?: string;
}

/** Message input bar pinned to the bottom of a Screen: glass attach button,
 * pill text field, send/mic button. */
export function ChatComposer({ value, placeholder = 'Message', attach = true, action = 'mic', onChange, onSend, onAttach, className }: ChatComposerProps) {
  return (
    <div className={['on-composer', className].filter(Boolean).join(' ')}>
      {attach ? (
        <button type="button" className="on-glass on-composer-button" onClick={onAttach} aria-label="Attach">
          <Icon name="plus" size={22} />
        </button>
      ) : null}
      <input
        className="on-composer-field"
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
      />
      <button
        type="button"
        className={['on-composer-button', action === 'send' ? 'on-send' : 'on-glass'].join(' ')}
        onClick={onSend}
        aria-label={action === 'send' ? 'Send' : 'Record'}
      >
        <Icon name={action === 'send' ? 'arrow-up' : 'mic'} size={22} />
      </button>
    </div>
  );
}
