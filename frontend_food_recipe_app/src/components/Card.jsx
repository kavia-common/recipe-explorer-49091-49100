import React from 'react';

// PUBLIC_INTERFACE
export default function Card({ children, onClick, role = 'article', ariaLabel, className = '' }) {
  /** Reusable card with subtle shadow and rounded corners */
  return (
    <div
      role={role}
      aria-label={ariaLabel}
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
      className={`ocean-card ${className}`}
      style={{
        background: 'var(--clr-surface)',
        borderRadius: '14px',
        boxShadow: 'var(--shadow-sm)',
        border: '1px solid var(--clr-border)',
        overflow: 'hidden',
        transition: 'var(--transition)',
        outline: 'none',
        cursor: onClick ? 'pointer' : 'default'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {children}
    </div>
  );
}
