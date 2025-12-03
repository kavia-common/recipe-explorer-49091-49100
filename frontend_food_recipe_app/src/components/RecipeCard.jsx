import React from 'react';
import Card from './Card';

// PUBLIC_INTERFACE
export default function RecipeCard({ recipe, onOpen }) {
  /** Card showing image, title, and short description */
  return (
    <Card onClick={() => onOpen?.(recipe)} ariaLabel={`Open details for ${recipe.title}`}>
      <div style={{ position: 'relative', aspectRatio: '16 / 10', background: '#f3f4f6', overflow: 'hidden' }}>
        {recipe.image ? (
          <img
            src={recipe.image}
            alt={recipe.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            loading="lazy"
          />
        ) : (
          <div aria-hidden="true" style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center', color: '#9CA3AF' }}>
            No image
          </div>
        )}
        <div style={{
          position: 'absolute',
          inset: 'auto 12px 12px 12px',
          background: 'rgba(255,255,255,0.9)',
          borderRadius: '10px',
          padding: '8px 10px',
          boxShadow: 'var(--shadow-sm)',
          border: '1px solid var(--clr-border)'
        }}>
          <h3 style={{ margin: 0, fontSize: 16, color: 'var(--clr-text)' }}>{recipe.title}</h3>
        </div>
      </div>
      <div style={{ padding: '12px 14px 16px' }}>
        <p style={{ margin: 0, color: 'var(--clr-text-muted)', fontSize: 14 }}>
          {recipe.description || 'A delicious recipe.'}
        </p>
      </div>
    </Card>
  );
}
