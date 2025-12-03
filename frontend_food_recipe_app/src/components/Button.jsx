import React from 'react';
import { theme } from '../theme/theme';

// PUBLIC_INTERFACE
export default function Button({ children, onClick, variant = 'primary', type = 'button', disabled = false, ariaLabel, className = '' }) {
  /** Ocean themed button with primary/secondary variants */
  const base = {
    primary: {
      backgroundColor: theme.colors.primary,
      color: '#fff',
      border: `1px solid ${theme.colors.primary}`,
    },
    secondary: {
      backgroundColor: theme.colors.secondary,
      color: '#111827',
      border: `1px solid ${theme.colors.secondary}`,
    },
    ghost: {
      backgroundColor: 'transparent',
      color: theme.colors.primary,
      border: `1px solid ${theme.colors.primary}`,
    }
  }[variant] || {};

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`ocean-btn ${className}`}
      style={{
        padding: '10px 16px',
        borderRadius: '10px',
        fontWeight: 600,
        boxShadow: 'var(--shadow-sm)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'var(--transition)',
        ...base
      }}
      onMouseOver={(e) => {
        if (disabled) return;
        e.currentTarget.style.transform = 'translateY(-1px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      }}
    >
      {children}
    </button>
  );
}
