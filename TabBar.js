/* ============================================
   WAYVO DESIGN SYSTEM - CSS Custom Properties
   ============================================ */

:root {
  /* Brand Colors */
  --color-navy: #0D1B2A;
  --color-mid: #1B3A4B;
  --color-green: #00C896;
  --color-green-dark: #009E78;
  --color-gold: #F5A623;
  --color-red: #E53935;
  --color-purple: #7C3AED;
  --color-blue: #1D4ED8;
  --color-teal: #0D9488;
  --color-pink: #DB2777;
  --color-coral: #EA580C;

  /* Backgrounds */
  --color-background-primary: #0D1B2A;
  --color-background-secondary: #1B3A4B;
  --color-background-tertiary: #0D2E1F;
  --color-background-info: rgba(0, 200, 150, 0.08);
  --color-background-success: #F0FDF4;
  --color-background-warning: #FEF3C7;
  --color-background-error: #FEF2F2;

  /* Text */
  --color-text-primary: #ffffff;
  --color-text-secondary: rgba(255, 255, 255, 0.6);
  --color-text-tertiary: rgba(255, 255, 255, 0.4);
  --color-text-info: #00C896;
  --color-text-success: #166534;
  --color-text-warning: #92400E;
  --color-text-error: #B91C1C;

  /* Borders */
  --color-border-primary: rgba(255, 255, 255, 0.15);
  --color-border-secondary: rgba(255, 255, 255, 0.1);
  --color-border-tertiary: rgba(255, 255, 255, 0.08);
  --color-border-success: #BBF7D0;
  --color-border-warning: #FCD34D;
  --color-border-error: #FECACA;

  /* Gradients */
  --gradient-primary: linear-gradient(145deg, #0D1B2A, #1B3A4B 60%, #0D2E1F 100%);
  --gradient-gold: linear-gradient(135deg, #854F0B18, #F5A62318);

  /* Typography */
  --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --font-mono: 'SF Mono', Monaco, 'Cascadia Code', monospace;

  /* Spacing Scale */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;

  /* Border Radius */
  --radius-sm: 7px;
  --radius-md: 10px;
  --radius-lg: 12px;
  --radius-xl: 14px;
  --radius-2xl: 16px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.15);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.2);

  /* Z-Index Scale */
  --z-base: 0;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-fixed: 300;
  --z-modal-backdrop: 400;
  --z-modal: 500;
  --z-popover: 600;
  --z-toast: 700;
  --z-tooltip: 800;

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 350ms ease;
  --transition-spring: 400ms cubic-bezier(0.34, 1.56, 0.64, 1);

  /* Layout */
  --max-width-mobile: 430px;
  --header-height: 56px;
  --tab-bar-height: 64px;
  --safe-area-bottom: env(safe-area-inset-bottom, 0px);
}

/* ============================================
   GLOBAL RESET & BASE STYLES
   ============================================ */

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

body {
  font-family: var(--font-sans);
  background: var(--color-background-tertiary);
  color: var(--color-text-primary);
  line-height: 1.5;
  min-height: 100vh;
  overflow-x: hidden;
}

#root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Scrollbar Styling */
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: var(--color-border-primary);
  border-radius: var(--radius-full);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-text-tertiary);
}

/* Selection */
::selection {
  background: var(--color-green);
  color: var(--color-navy);
}

/* Focus Styles for Accessibility */
:focus-visible {
  outline: 2px solid var(--color-green);
  outline-offset: 2px;
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Print Styles */
@media print {
  body {
    background: white;
    color: black;
  }
}
