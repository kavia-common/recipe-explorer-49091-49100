import React from 'react';
import Button from './Button';

// PUBLIC_INTERFACE
export default function ErrorState({ message = 'Something went wrong.', onRetry }) {
  /** Error state with retry action */
  return (
    <div role="alert" style={{ padding: '24px', textAlign: 'center' }}>
      <p style={{ color: 'var(--clr-error)', marginBottom: 12, fontWeight: 600 }}>{message}</p>
      {onRetry && <Button onClick={onRetry} variant="secondary">Retry</Button>}
    </div>
  );
}
