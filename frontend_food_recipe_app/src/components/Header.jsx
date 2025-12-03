import React from 'react';

// PUBLIC_INTERFACE
export default function Header({ query, onQueryChange }) {
  /** App header with title and search bar */
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        background: 'linear-gradient(180deg, rgba(37,99,235,0.08) 0%, rgba(249,250,251,1) 100%)',
        padding: '16px 20px',
        borderBottom: '1px solid var(--clr-border)',
        backdropFilter: 'blur(6px)'
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
          <span
            aria-hidden="true"
            style={{
              display: 'inline-block',
              width: 12, height: 12,
              background: 'var(--clr-secondary)',
              borderRadius: 4,
              marginRight: 6
            }}
          />
          <h1 style={{ margin: 0, color: 'var(--clr-text)' }}>Recipe Explorer</h1>
        </div>
        <div>
          <label htmlFor="recipe-search" className="sr-only">Search recipes</label>
          <div style={{ position: 'relative' }}>
            <input
              id="recipe-search"
              type="search"
              value={query}
              onChange={(e) => onQueryChange?.(e.target.value)}
              placeholder="Search recipes by name or ingredient..."
              aria-label="Search recipes"
              style={{
                width: '100%',
                padding: '12px 42px 12px 14px',
                borderRadius: '12px',
                border: '1px solid var(--clr-border)',
                outline: 'none',
                boxShadow: 'var(--shadow-sm)',
                background: 'var(--clr-surface)',
                color: 'var(--clr-text)'
              }}
            />
            <span aria-hidden="true" style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--clr-text-muted)' }}>⌘K</span>
          </div>
        </div>
      </div>
      <style>{`.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;}`}</style>
    </header>
  );
}
