export const theme = {
  // Ocean Professional theme constants
  colors: {
    primary: '#2563EB', // blue
    secondary: '#F59E0B', // amber
    success: '#F59E0B',
    error: '#EF4444',
    background: '#f9fafb',
    surface: '#ffffff',
    text: '#111827',
    textMuted: '#6B7280',
    border: '#E5E7EB',
    overlay: 'rgba(17, 24, 39, 0.6)',
  },
  radius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
  },
  shadow: {
    sm: '0 1px 2px rgba(0,0,0,0.06)',
    md: '0 4px 10px rgba(0,0,0,0.08)',
    lg: '0 10px 25px rgba(0,0,0,0.12)',
  },
  spacing: (n) => `${n * 8}px`,
  transition: 'all 200ms ease',
};

// PUBLIC_INTERFACE
export function applyCssVars() {
  /** Apply CSS variables to document root for global styling */
  const root = document.documentElement;
  const { colors } = theme;
  root.style.setProperty('--clr-primary', colors.primary);
  root.style.setProperty('--clr-secondary', colors.secondary);
  root.style.setProperty('--clr-success', colors.success);
  root.style.setProperty('--clr-error', colors.error);
  root.style.setProperty('--clr-bg', colors.background);
  root.style.setProperty('--clr-surface', colors.surface);
  root.style.setProperty('--clr-text', colors.text);
  root.style.setProperty('--clr-text-muted', colors.textMuted);
  root.style.setProperty('--clr-border', colors.border);
  root.style.setProperty('--shadow-sm', theme.shadow.sm);
  root.style.setProperty('--shadow-md', theme.shadow.md);
  root.style.setProperty('--shadow-lg', theme.shadow.lg);
  root.style.setProperty('--radius-sm', theme.radius.sm);
  root.style.setProperty('--radius-md', theme.radius.md);
  root.style.setProperty('--radius-lg', theme.radius.lg);
  root.style.setProperty('--radius-xl', theme.radius.xl);
  root.style.setProperty('--transition', theme.transition);
}
