# Quick Start Guide

## Project Structure

```
nextlevelsoftbalofficial/
├── docs/
│   ├── DESIGN_SYSTEM.md      # Complete design system documentation
│   ├── IMPROVEMENTS.md        # Optional enhancements
│   └── QUICK_START.md         # This file
├── src/
│   ├── app/                   # Next.js app router pages
│   │   ├── about/            # About page
│   │   ├── contact/          # Contact page
│   │   ├── gallery/          # Gallery page
│   │   ├── programs/         # Programs/Services page
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Home page
│   ├── components/
│   │   ├── gallery/          # Gallery components
│   │   ├── layout/           # Navigation, Footer
│   │   ├── sections/         # Page sections (Hero, Features, etc.)
│   │   └── ui/               # Reusable UI components
│   └── lib/
│       └── utils.ts          # Utility functions
├── public/                    # Static assets (add images here)
├── tailwind.config.ts        # Tailwind configuration with color system
└── next.config.ts            # Next.js configuration
```

## Color System

The design system uses these exact colors:

- **Black**: #0B0B0C
- **Dark Gray**: #1E1E1F
- **Medium Gray**: #3A3A3C
- **Light Gray**: #E4E5E7
- **Off-White**: #F7F7F8
- **White**: #FFFFFF
- **Silver Accent**: #C9C9CC
- **Graphite Accent**: #2D2D2E

See `docs/DESIGN_SYSTEM.md` for complete usage guidelines.

## Running the Development Server

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Adding Gallery Images

1. Place images in the `public/` directory
2. Update the `galleryImages` array in `src/app/gallery/page.tsx` with actual image paths:

```typescript
const galleryImages = [
  {
    src: "/your-image-name.jpg",  // Path relative to public/
    alt: "Description of image",
    caption: "Optional caption",
  },
  // Add more images...
];
```

Recommended image dimensions: 1200x1200px minimum for square thumbnails.

## Customizing Content

### Home Page
Edit `src/app/page.tsx` to update:
- Hero section text
- Features list
- Testimonials
- Content sections

### Other Pages
- About: `src/app/about/page.tsx`
- Programs: `src/app/programs/page.tsx`
- Gallery: `src/app/gallery/page.tsx`
- Contact: `src/app/contact/page.tsx`

### Navigation
Update navigation links in `src/components/layout/navigation.tsx`

### Footer
Update footer content in `src/components/layout/footer.tsx`

## Components

### Reusable UI Components (`src/components/ui/`)
- `Button` - Primary, secondary, ghost variants
- `Input` - Text input with consistent styling
- `Textarea` - Multi-line text input
- `Label` - Form labels
- `Select` - Dropdown select
- `Card` - Card container with header, content, footer

### Page Sections (`src/components/sections/`)
- `Hero` - Hero section with title, subtitle, CTAs
- `Features` - Feature grid display
- `Testimonials` - Testimonial cards
- `ContentSection` - Flexible content sections
- `CTASection` - Call-to-action sections
- `Pricing` - Pricing table/plans
- `ContactForm` - Contact form component

### Layout Components (`src/components/layout/`)
- `Navigation` - Main navigation header
- `Footer` - Site footer

### Gallery Components (`src/components/gallery/`)
- `GalleryGrid` - Image gallery with lightbox

## Styling Guidelines

- Use Tailwind CSS utility classes
- Follow the spacing scale (4px, 8px, 16px, etc.)
- Maintain consistent typography hierarchy
- Follow color system rules (see DESIGN_SYSTEM.md)
- Use semantic HTML elements

## Form Integration

The contact form currently simulates submission. To make it functional:

1. Set up a form handler (Formspree, EmailJS, or custom API)
2. Update `src/components/sections/contact-form.tsx` with your handler
3. Add server-side validation and spam protection

See `docs/IMPROVEMENTS.md` for more details.

## Next Steps

1. Replace placeholder gallery images with actual photos
2. Update all page content with your specific information
3. Configure contact form submission handler
4. Add analytics (Google Analytics, etc.)
5. Test on various devices and browsers
6. Deploy to production

For more detailed information, see:
- `docs/DESIGN_SYSTEM.md` - Complete design system documentation
- `docs/IMPROVEMENTS.md` - Optional enhancements



