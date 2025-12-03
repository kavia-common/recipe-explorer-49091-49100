import React from 'react';
import RecipeCard from './RecipeCard';

// PUBLIC_INTERFACE
export default function RecipeGrid({ recipes, onOpen }) {
  /** Responsive card grid */
  return (
    <div
      role="list"
      aria-label="Recipe list"
      style={{
        display: 'grid',
        gap: '16px',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))'
      }}
    >
      {recipes.map((r) => (
        <div role="listitem" key={r.id}>
          <RecipeCard recipe={r} onOpen={onOpen} />
        </div>
      ))}
    </div>
  );
}
