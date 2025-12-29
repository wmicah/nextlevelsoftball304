# Next Level Softball - Website System

A fully-designed, fully-documented website system for Next Level Softball, built with Next.js and TailwindCSS, following a minimalist black/gray/white palette.

## Overview

This project includes:

1. **Complete Design System Documentation** (`docs/DESIGN_SYSTEM.md`)
   - Color system with exact values and usage rules
   - Typography system with font stacks and hierarchy
   - Spacing & layout guidelines
   - Component design rules
   - Semantic HTML requirements

2. **Fully Functional Website**
   - Home page with hero, features, testimonials, and CTAs
   - About page with mission, story, and values
   - Programs/Services page with pricing
   - Gallery page with lightbox viewer
   - Contact page with form

3. **Reusable Component Library**
   - UI components (Button, Input, Card, etc.)
   - Layout components (Navigation, Footer)
   - Page sections (Hero, Features, Testimonials, etc.)
   - Gallery component with lightbox functionality

## Quick Start

See `docs/QUICK_START.md` for detailed setup instructions.

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## Design System

The website follows a strict minimalist black/gray/white color palette:

- **Black** (#0B0B0C) - Primary dark backgrounds
- **Dark Gray** (#1E1E1F) - Secondary dark backgrounds
- **Medium Gray** (#3A3A3C) - Borders, secondary text
- **Light Gray** (#E4E5E7) - Borders on light backgrounds
- **Off-White** (#F7F7F8) - Alternative light background
- **White** (#FFFFFF) - Primary light background
- **Silver Accent** (#C9C9CC) - Subtle highlights
- **Graphite Accent** (#2D2D2E) - Hover states

Complete design system documentation: `docs/DESIGN_SYSTEM.md`

## Project Structure

```
src/
├── app/                    # Next.js pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── gallery/           # Gallery page
│   ├── programs/          # Programs/Services page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # Reusable UI components
│   ├── layout/            # Navigation, Footer
│   ├── sections/          # Page sections
│   └── gallery/           # Gallery components
└── lib/
    └── utils.ts           # Utility functions

docs/
├── DESIGN_SYSTEM.md       # Complete design system
├── IMPROVEMENTS.md        # Optional enhancements
└── QUICK_START.md         # Setup guide
```

## Features

- **Semantic HTML** - Proper use of semantic elements for accessibility and SEO
- **Responsive Design** - Mobile-first approach with breakpoints at 768px and 1024px
- **Accessibility** - ARIA labels, keyboard navigation, focus indicators
- **Performance** - Optimized with Next.js Image component, lazy loading
- **Type Safety** - Full TypeScript implementation
- **Component Architecture** - Reusable, composable components

## Customization

### Content Updates

- **Home Page**: Edit `src/app/page.tsx`
- **About Page**: Edit `src/app/about/page.tsx`
- **Programs Page**: Edit `src/app/programs/page.tsx`
- **Gallery**: Add images to `public/` and update `src/app/gallery/page.tsx`
- **Contact**: Edit `src/app/contact/page.tsx`

### Styling

- Colors: Update `tailwind.config.ts` (follow design system)
- Typography: Modify `src/app/globals.css` or `tailwind.config.ts`
- Components: Edit individual component files in `src/components/`

## Next Steps

1. Replace placeholder gallery images with actual photos
2. Update all page content with your specific information
3. Configure contact form submission (see `docs/IMPROVEMENTS.md`)
4. Add analytics if desired
5. Test on various devices and browsers
6. Deploy to production

## Documentation

- **Design System**: `docs/DESIGN_SYSTEM.md` - Complete design guidelines
- **Quick Start**: `docs/QUICK_START.md` - Setup and usage guide
- **Improvements**: `docs/IMPROVEMENTS.md` - Optional enhancements

## Technologies

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **TailwindCSS 4** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Radix UI** - Accessible component primitives

## License

Private project for Next Level Softball.
