import React, { useEffect, useMemo, useState } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import ErrorState from '../components/ErrorState';
import RecipeGrid from '../components/RecipeGrid';
import Modal from '../components/Modal';
import Button from '../components/Button';
import { listRecipes, getRecipe } from '../services/RecipesService';

// PUBLIC_INTERFACE
export default function Recipes() {
  /**
   * Main recipes view with search, list/grid, and detail modal.
   */
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [status, setStatus] = useState('idle'); // idle | loading | error | ready
  const [error, setError] = useState('');
  const [selected, setSelected] = useState(null);

  const refresh = async (q = query) => {
    setStatus('loading');
    setError('');
    try {
      const data = await listRecipes(q);
      setRecipes(data);
      setStatus('ready');
    } catch (e) {
      setError('Failed to load recipes.');
      setStatus('error');
    }
  };

  useEffect(() => {
    refresh('');
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      refresh(query);
    }, 250);
    return () => clearTimeout(t);
    // eslint-disable-next-line
  }, [query]);

  const openRecipe = async (r) => {
    try {
      const detail = await getRecipe(r.id);
      setSelected(detail || r);
    } catch {
      setSelected(r);
    }
  };

  const closeRecipe = () => setSelected(null);

  const content = useMemo(() => {
    if (status === 'loading') return <Loading />;
    if (status === 'error') return <ErrorState message={error} onRetry={() => refresh(query)} />;
    if (!recipes.length) {
      return (
        <div style={{ padding: 24, textAlign: 'center', color: 'var(--clr-text-muted)' }}>
          No recipes found. Try a different search.
        </div>
      );
    }
    return <RecipeGrid recipes={recipes} onOpen={openRecipe} />;
  }, [status, error, query, recipes]);

  return (
    <div>
      <Header query={query} onQueryChange={setQuery} />
      <main style={{ maxWidth: 1100, margin: '0 auto', padding: '20px' }}>
        {content}
      </main>

      <Modal open={!!selected} onClose={closeRecipe} title={selected?.title || 'Recipe details'}>
        {selected && (
          <article>
            {selected.image && (
              <img
                src={selected.image}
                alt={selected.title}
                style={{
                  width: '100%',
                  borderRadius: 12,
                  maxHeight: 320,
                  objectFit: 'cover',
                  display: 'block',
                  marginBottom: 16
                }}
              />
            )}
            <section style={{ marginBottom: 16 }}>
              <h3 style={{ marginTop: 0 }}>Ingredients</h3>
              <ul>
                {(selected.ingredients || []).map((ing, idx) => (
                  <li key={idx} style={{ color: 'var(--clr-text)' }}>{ing}</li>
                ))}
              </ul>
            </section>
            <section style={{ marginBottom: 16 }}>
              <h3>Instructions</h3>
              <ol>
                {(selected.instructions || []).map((step, idx) => (
                  <li key={idx} style={{ color: 'var(--clr-text)' }}>{step}</li>
                ))}
              </ol>
            </section>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
              <Button variant="ghost" onClick={closeRecipe}>Close</Button>
            </div>
          </article>
        )}
      </Modal>
    </div>
  );
}
