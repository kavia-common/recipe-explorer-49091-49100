# Recipe Explorer Frontend (Ocean Professional)

A modern React UI to browse, search, and view food recipes.

## Features
- Ocean Professional theme (blue primary with amber accents)
- App header with search
- Responsive grid of recipe cards
- Recipe details in an accessible modal
- Client-side search and filter
- Reusable components: Button, Card, Loading, Error
- Env-based API usage with graceful mock fallback

## Quick Start
```
npm install
npm start
```
The app runs on http://localhost:3000

## Environment Variables
Create a .env file in this folder if you have an API:
- REACT_APP_API_BASE: Base URL for the recipes API (e.g., https://api.example.com)

If REACT_APP_API_BASE is not provided or is empty:
- The app automatically uses a local mock dataset (no extra setup needed).

Optional:
- REACT_APP_NODE_ENV: May be used by your environment; not required.

## Service Interface
RecipesService provides:
- listRecipes(search?: string) => Promise<Recipe[]>
- getRecipe(id: string) => Promise<Recipe | null>

If API is set, requests are made to:
- GET {REACT_APP_API_BASE}/recipes?search=...
- GET {REACT_APP_API_BASE}/recipes/:id

Otherwise the mock dataset is used.

## Accessibility
- Keyboard and screen-reader friendly modal and cards
- Focus outlines for interactive elements
- Labels for search input

## Project Structure
- src/theme: Theme constants and CSS variables
- src/components: Reusable UI and recipe components
- src/pages: Page-level views (Recipes)
- src/services: API service and mock data

## Build
```
npm run build
```

