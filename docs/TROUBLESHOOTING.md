# Troubleshooting Guide

## Color Classes Not Working

If you see colors not displaying properly, check:

1. **Tailwind Config**: Colors are defined in `tailwind.config.ts` as:
   - `lightGray`, `mediumGray`, `darkGray`, `offWhite`, etc. (camelCase)
   - Used in components as: `text-light-gray`, `bg-light-gray`, etc. (kebab-case)

2. **Restart Dev Server**: After changing Tailwind config, restart the dev server:
   ```bash
   # Stop the server (Ctrl+C), then:
   pnpm dev
   ```

3. **Clear Next.js Cache**: If styles still don't update:
   ```bash
   rm -rf .next
   pnpm dev
   ```

## Icons Not Showing

If Lucide React icons aren't displaying:

1. Check that `lucide-react` is installed:
   ```bash
   pnpm list lucide-react
   ```

2. Verify icons are imported correctly:
   ```tsx
   import { Target, Award, Users } from "lucide-react";
   ```

3. Check browser console for errors

## Components Not Rendering

If sections aren't appearing:

1. Check browser console for React errors
2. Verify all imports are correct
3. Check that component files exist in `src/components/`
4. Verify page files are in correct `src/app/` directories

## Styling Issues

If styles look wrong:

1. **Tailwind Classes Not Working**: Check that classes match Tailwind config
2. **Spacing Issues**: Verify spacing scale values (4px, 8px, 16px, etc.)
3. **Color Issues**: Verify color values match design system
4. **Typography**: Check font sizes and weights match design system

## Common Issues

### "Cannot apply unknown utility class"

This happens when:
- A Tailwind class isn't defined
- Tailwind config needs to be rebuilt
- Dev server needs restart

**Fix**: Restart dev server after config changes

### Page Not Loading

Check:
1. Browser console for errors
2. Terminal for compilation errors
3. Network tab for failed requests
4. Verify all dependencies installed: `pnpm install`

### Icons Missing

1. Verify `lucide-react` is in `package.json`
2. Reinstall if needed: `pnpm install lucide-react`
3. Check import statements

## Quick Fixes

1. **Restart Dev Server**: Most issues fixed by restarting
2. **Clear Cache**: Delete `.next` folder and restart
3. **Reinstall Dependencies**: `pnpm install`
4. **Check Browser Console**: Look for JavaScript errors
5. **Verify File Structure**: Ensure all files are in correct locations

## Getting Help

If issues persist:
1. Check browser console for specific errors
2. Check terminal for compilation errors
3. Verify Tailwind config matches design system
4. Ensure all component imports are correct



