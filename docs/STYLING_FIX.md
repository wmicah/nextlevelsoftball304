# Styling Not Loading - Fix Guide

## Issue
TailwindCSS styles are not appearing on the page.

## Solution

We're using TailwindCSS v4 with `@tailwindcss/postcss`. The CSS file has been updated to use:

```css
@import "tailwindcss";
```

## Steps to Fix

1. **Stop the dev server** (Ctrl+C in terminal)

2. **Clear Next.js cache**:
   ```powershell
   Remove-Item -Recurse -Force .next
   ```

3. **Restart dev server**:
   ```powershell
   pnpm dev
   ```

4. **Hard refresh browser** (Ctrl+Shift+R or Ctrl+F5)

## If Still Not Working

### Option 1: Check PostCSS Config
Make sure `postcss.config.mjs` contains:
```javascript
const config = {
  plugins: ["@tailwindcss/postcss"],
};
export default config;
```

### Option 2: Verify Tailwind Config
The `tailwind.config.ts` file should be recognized. If not, TailwindCSS v4 might need CSS-first config.

### Option 3: Check Browser Console
1. Open browser DevTools (F12)
2. Check the Console tab for errors
3. Check the Network tab - look for CSS files loading (status 200)
4. Check Elements tab - verify `<link>` tag for CSS is in the `<head>`

### Option 4: Verify globals.css is imported
Check that `src/app/layout.tsx` has:
```tsx
import "./globals.css";
```

### Option 5: Reinstall Dependencies
```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item pnpm-lock.yaml
pnpm install
pnpm dev
```

## Expected Result
After these steps, TailwindCSS classes should work and styles should appear.



