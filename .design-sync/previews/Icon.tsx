import React from 'react';
import { Icon } from '@onym/design';

const NAMES = [
  'chevron-right',
  'chevron-left',
  'chevron-down',
  'plus',
  'search',
  'gear',
  'bubble',
  'person',
  'camera',
  'qr',
  'trash',
  'check',
  'check-double',
  'mic',
  'arrow-up',
  'pencil',
  'lock',
  'bell',
  'globe',
  'key',
  'shield',
  'doc',
  'share',
  'x',
  'ellipsis',
  'antenna',
  'link',
] as const;

export const GlyphGrid = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: '16px 8px',
      padding: '16px 0',
    }}
  >
    {NAMES.map((name) => (
      <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
        <Icon name={name} size={22} />
        <span style={{ font: '10px/1.2 -apple-system, system-ui, sans-serif', color: 'var(--on-text2)' }}>
          {name}
        </span>
      </div>
    ))}
  </div>
);

export const SizesAndStroke = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 20, justifyContent: 'center', padding: '20px 0' }}>
    <Icon name="antenna" size={16} />
    <Icon name="antenna" size={24} />
    <Icon name="antenna" size={36} />
    <Icon name="antenna" size={36} strokeWidth={1.25} />
    <Icon name="antenna" size={36} strokeWidth={2.75} />
  </div>
);
