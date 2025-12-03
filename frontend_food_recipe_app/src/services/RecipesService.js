import { MOCK_RECIPES } from './mockData';

const API_BASE = process.env.REACT_APP_API_BASE || '';

/**
 * PUBLIC_INTERFACE
 * listRecipes
 * Lists recipes with an optional search query. Uses API if REACT_APP_API_BASE is provided,
 * otherwise falls back to mock data. Returns a Promise resolving to an array of recipes.
 */
export async function listRecipes(search = '') {
  const query = (search || '').trim().toLowerCase();

  // If API base exists, try fetching
  if (API_BASE) {
    try {
      const res = await fetch(`${API_BASE.replace(/\/$/, '')}/recipes?search=${encodeURIComponent(query)}`, {
        headers: { 'Accept': 'application/json' }
      });
      if (!res.ok) throw new Error(`API error ${res.status}`);
      const data = await res.json();
      return Array.isArray(data) ? data : (data.items || []);
    } catch (err) {
      console.warn('Falling back to mock data due to API error:', err);
      return filterMock(query);
    }
  }

  // Mock fallback
  return filterMock(query);
}

/**
 * PUBLIC_INTERFACE
 * getRecipe
 * Gets a single recipe by id. Uses API if available, otherwise mock.
 */
export async function getRecipe(id) {
  if (!id) return null;

  if (API_BASE) {
    try {
      const res = await fetch(`${API_BASE.replace(/\/$/, '')}/recipes/${encodeURIComponent(id)}`, {
        headers: { 'Accept': 'application/json' }
      });
      if (!res.ok) throw new Error(`API error ${res.status}`);
      const data = await res.json();
      return data;
    } catch (err) {
      console.warn('Falling back to mock data for getRecipe due to API error:', err);
      return MOCK_RECIPES.find((r) => String(r.id) === String(id)) || null;
    }
  }

  return MOCK_RECIPES.find((r) => String(r.id) === String(id)) || null;
}

function filterMock(query) {
  if (!query) return MOCK_RECIPES;
  return MOCK_RECIPES.filter((r) => {
    const hay = [
      r.title,
      r.description,
      ...(r.ingredients || [])
    ].join(' ').toLowerCase();
    return hay.includes(query);
  });
}
