import React from 'react';
import { StepIndicator } from '@onym/design';

const pad: React.CSSProperties = { padding: '20px 0', display: 'flex', justifyContent: 'center' };

export const Step1of3 = () => (
  <div style={pad}>
    <StepIndicator step={1} />
  </div>
);

export const Step2of3 = () => (
  <div style={pad}>
    <StepIndicator step={2} />
  </div>
);

export const Step5of5 = () => (
  <div style={pad}>
    <StepIndicator step={5} count={5} />
  </div>
);
