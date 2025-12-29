# Strict Monochrome Color Palette

## Enforced Color System

This project uses ONLY the following colors. All default Tailwind colors are disabled.

### Allowed Colors

| Color Name | Hex Value | Tailwind Class |
|------------|-----------|----------------|
| Black | #0B0B0C | `black` |
| Dark | #1E1E1F | `dark` |
| Gray | #3A3A3C | `gray` |
| Graphite | #2D2D2E | `graphite` |
| Silver | #C9C9CC | `silver` |
| Light | #E4E5E7 | `light` |
| Offwhite | #F7F7F8 | `offwhite` |
| White | #FFFFFF | `white` |

### Usage Examples

```tsx
// Background colors
<div className="bg-black">...</div>
<div className="bg-dark">...</div>
<div className="bg-gray">...</div>
<div className="bg-white">...</div>
<div className="bg-offwhite">...</div>
<div className="bg-light">...</div>

// Text colors
<p className="text-black">...</p>
<p className="text-gray">...</p>
<p className="text-light">...</p>
<p className="text-white">...</p>

// Border colors
<div className="border border-light">...</div>
<div className="border border-gray">...</div>
```

### Forbidden Colors

**DO NOT USE:**
- Any default Tailwind colors (gray-*, zinc-*, slate-*, etc.)
- Any color outside the palette (yellow, blue, red, green, etc.)
- Any color variations not listed above

### Component Props

When using component props for background colors:
- `bgColor="white"` ✅
- `bgColor="offwhite"` ✅
- `bgColor="black"` ✅
- `bgColor="dark"` ✅
- `bgColor="off-white"` ❌ (use `offwhite`)
- `bgColor="dark-gray"` ❌ (use `dark`)

### Tailwind Config

The `tailwind.config.ts` file overrides the default color system to enforce this palette. All default Tailwind colors are disabled.


