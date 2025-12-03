import React from 'react';

// PUBLIC_INTERFACE
export default function Loading({ label = 'Loading recipes...' }) {
  /** Accessible loading indicator */
  return (
    <div role="status" aria-live="polite" style={{ padding: '24px', textAlign: 'center', color: 'var(--clr-text-muted)' }}>
      <div
        aria-hidden="true"
        style={{
          margin: '0 auto 8px',
          width: 28, height: 28,
          border: '3px solid var(--clr-border)',
          borderTopColor: 'var(--clr-primary)',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite'
        }}
      />
      <span>{label}</span>
      <style>{`@keyframes spin{to{transform: rotate(360deg)}}`}</style>
    </div>
  );
}
