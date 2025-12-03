import React, { useEffect } from 'react';
import './App.css';
import './index.css';
import Recipes from './pages/Recipes';
import { applyCssVars } from './theme/theme';

/**
 * PUBLIC_INTERFACE
 * App
 * Entry point that applies theme and renders the Recipes page.
 */
function App() {
  useEffect(() => {
    applyCssVars();
  }, []);

  return (
    <div
      className="App"
      style={{
        background: 'var(--clr-bg)',
        color: 'var(--clr-text)',
        minHeight: '100vh'
      }}
    >
      <Recipes />
    </div>
  );
}

export default App;
