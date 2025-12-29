# Next Level Softball Design System

## A. Color System

### Primary Palette

The Next Level Softball brand uses a minimalist black, gray, and white palette. All colors must adhere to these exact values.

#### Color Values

- **Black** — `#0B0B0C`
  - Primary dark background
  - High contrast text on light backgrounds
  - Brand anchor color

- **Dark Gray** — `#1E1E1F`
  - Secondary dark backgrounds
  - Card backgrounds in dark sections
  - Subtle contrast alternative to black

- **Medium Gray** — `#3A3A3C`
  - Borders and dividers
  - Disabled states
  - Secondary text on light backgrounds
  - Accent elements

- **Light Gray** — `#E4E5E7`
  - Borders on light backgrounds
  - Dividers in light sections
  - Subtle background variations
  - Input borders (default state)

- **Off-White** — `#F7F7F8`
  - Alternative light background
  - Card backgrounds in light sections
  - Subtle contrast to pure white

- **Pure White** — `#FFFFFF`
  - Primary light background
  - Text on dark backgrounds
  - High contrast emphasis

- **Silver Accent** — `#C9C9CC`
  - Subtle highlights
  - Hover states (light mode)
  - Decorative elements

- **Graphite Accent** — `#2D2D2E`
  - Hover states (dark backgrounds)
  - Subtle depth variations
  - Active states

### Usage Rules

#### Contrast Requirements

- Text on backgrounds must meet WCAG AA standards (minimum 4.5:1 for normal text, 3:1 for large text)
- Primary text: Black (#0B0B0C) on white (#FFFFFF) or light gray (#E4E5E7)
- Secondary text: Medium Gray (#3A3A3C) on white/light backgrounds
- Light text: White (#FFFFFF) or Off-White (#F7F7F8) on black or dark gray backgrounds

#### Light vs Dark Section Rules

**Light Sections (White/Off-White background)**
- Use Black (#0B0B0C) for primary headings
- Use Medium Gray (#3A3A3C) for secondary text
- Borders: Light Gray (#E4E5E7)
- Cards: White (#FFFFFF) or Off-White (#F7F7F8)
- Shadows: Subtle black with low opacity (0.05-0.1)

**Dark Sections (Black/Dark Gray background)**
- Use White (#FFFFFF) for primary headings
- Use Light Gray (#E4E5E7) for secondary text
- Borders: Medium Gray (#3A3A3C)
- Cards: Dark Gray (#1E1E1F)
- Shadows: Avoid or use very subtle white with low opacity

#### Border, Shadow, and Divider Rules

**Borders**
- Light sections: `border-light-gray` (#E4E5E7)
- Dark sections: `border-medium-gray` (#3A3A3C)
- Focus states: Black or White depending on background
- Border width: 1px for standard, 2px for emphasis

**Shadows**
- Use sparingly to maintain minimalist aesthetic
- Light sections: `box-shadow: 0 1px 3px rgba(11, 11, 12, 0.1)`
- Dark sections: `box-shadow: 0 1px 3px rgba(255, 255, 255, 0.05)`
- Hover elevation: `box-shadow: 0 4px 12px rgba(11, 11, 12, 0.15)`

**Dividers**
- Use 1px solid borders
- Light sections: Light Gray (#E4E5E7)
- Dark sections: Medium Gray (#3A3A3C)
- Spacing: Minimum 16px padding on either side

### Component DO/DON'Ts

**DO**
- Use high contrast combinations (black/white)
- Maintain consistent color application across components
- Use subtle grays for hierarchy without losing contrast
- Apply colors systematically based on section type (light/dark)

**DON'T**
- Mix warm or cool grays - stick to the defined palette
- Use colors for emphasis that aren't in the palette
- Apply shadows excessively
- Use low-contrast text combinations
- Introduce colors outside the defined palette

---

## B. Typography System

### Font Stacks

**Primary Font:** System sans-serif stack
- Font stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
- Rationale: Modern, clean, performant, native system feel

**Fallback:** Arial, sans-serif

### Heading Hierarchy

**H1 (Hero/Page Title)**
- Font size: 3rem (48px) desktop, 2rem (32px) mobile
- Font weight: 700 (Bold)
- Line height: 1.2
- Letter spacing: -0.02em
- Usage: Main page titles, hero headlines
- Color: Black on light, White on dark

**H2 (Section Titles)**
- Font size: 2.25rem (36px) desktop, 1.75rem (28px) mobile
- Font weight: 600 (Semi-bold)
- Line height: 1.3
- Letter spacing: -0.01em
- Usage: Major section headings
- Color: Black on light, White on dark

**H3 (Subsection Titles)**
- Font size: 1.5rem (24px) desktop, 1.25rem (20px) mobile
- Font weight: 600 (Semi-bold)
- Line height: 1.4
- Letter spacing: 0
- Usage: Card titles, feature headings
- Color: Black on light, White on dark

**H4 (Card/Component Titles)**
- Font size: 1.25rem (20px)
- Font weight: 600 (Semi-bold)
- Line height: 1.4
- Letter spacing: 0
- Usage: Smaller headings, list titles

**H5 (Small Headings)**
- Font size: 1rem (16px)
- Font weight: 600 (Semi-bold)
- Line height: 1.5
- Letter spacing: 0.01em
- Usage: Labels, small section headers

**H6 (Micro Headings)**
- Font size: 0.875rem (14px)
- Font weight: 600 (Semi-bold)
- Line height: 1.5
- Letter spacing: 0.01em
- Usage: Captions, metadata

### Body Text Sizes

**Large Body**
- Font size: 1.125rem (18px)
- Font weight: 400 (Regular)
- Line height: 1.7
- Letter spacing: 0
- Usage: Lead paragraphs, important content

**Regular Body**
- Font size: 1rem (16px)
- Font weight: 400 (Regular)
- Line height: 1.6
- Letter spacing: 0
- Usage: Standard body text, paragraphs

**Small Body**
- Font size: 0.875rem (14px)
- Font weight: 400 (Regular)
- Line height: 1.5
- Letter spacing: 0.01em
- Usage: Captions, metadata, fine print

### Button Text Rules

- Font size: 1rem (16px) for standard buttons
- Font weight: 600 (Semi-bold)
- Letter spacing: 0.02em
- Line height: 1 (for vertical alignment with padding)
- Text transform: None (use natural casing)

### Typography Tone

The typography system conveys:
- **Modern**: Clean, sans-serif, system fonts
- **Athletic**: Bold weights for headings, confident spacing
- **Minimalist**: Limited font weights (400, 600, 700), restrained sizing
- **Precise**: Consistent line heights, calculated letter spacing

### Usage Guidelines

- Always use semantic heading tags (h1-h6) in order
- Maintain consistent hierarchy - don't skip levels
- Use body text for all non-heading content
- Reserve bold (700) for H1 only
- Use semi-bold (600) for H2-H6
- Keep paragraphs to maximum 3-4 lines of text for readability
- Use line-height generously for body text (1.6-1.7)

---

## C. Spacing & Layout

### Spacing Scale

Based on 4px base unit for consistency:

- **4px** — Micro spacing, tight padding
- **8px** — Small spacing, icon-to-text gap
- **12px** — Minor spacing
- **16px** — Standard spacing, base unit
- **24px** — Medium spacing, section gaps
- **32px** — Large spacing, component separation
- **48px** — Extra large spacing, section padding
- **64px** — XXL spacing, major section breaks
- **96px** — Maximum spacing, page section separation

### Container Widths

- **Full width**: 100% viewport
- **Narrow container**: 768px max
- **Standard container**: 1200px max
- **Wide container**: 1400px max
- **Container padding**: 16px mobile, 24px tablet, 32px desktop

### Section Padding Rules

**Vertical Padding**
- Small sections: 48px top/bottom
- Standard sections: 64px top/bottom
- Large sections (hero): 96px top/bottom
- Mobile reduction: 50% of desktop values

**Horizontal Padding**
- Inherits from container padding
- Never less than 16px on mobile

### Grid System

**Base Grid**: 4px (all spacing multiples of 4)

**Component Grid**
- 2-column: Equal width, 24px gap
- 3-column: Equal width, 32px gap
- 4-column: Equal width, 24px gap
- Responsive: Collapses to single column on mobile

**Layout Patterns**
- Cards: 16px internal padding
- Feature grids: 32px gap between items
- Text columns: Max-width 65ch per column

### Responsive Breakpoints

- **Mobile**: 0-767px
  - Single column layouts
  - Reduced spacing (50% of desktop)
  - Stacked components

- **Tablet**: 768px-1023px
  - 2-column layouts where appropriate
  - Standard spacing
  - Adjusted font sizes

- **Desktop**: 1024px+
  - Multi-column layouts
  - Full spacing scale
  - Complete feature set

- **Large Desktop**: 1400px+
  - Max container width enforced
  - Content centered

### Consistency Rules

- Always use spacing scale values - no arbitrary numbers
- Maintain consistent padding within component types
- Use container max-widths consistently
- Apply responsive breakpoints uniformly
- Keep vertical rhythm consistent (use multiples of 16px)
- Maintain horizontal alignment across sections

---

## D. Components

### Buttons

#### Primary Button
- **Background**: Black (#0B0B0C)
- **Text**: White (#FFFFFF)
- **Padding**: 12px 24px
- **Border**: None
- **Border radius**: 4px
- **Font**: 16px, 600 weight
- **Hover**: Slight scale (1.02) or subtle shadow increase
- **Active**: Slight scale down (0.98)
- **Disabled**: Medium Gray (#3A3A3C) background, Light Gray (#E4E5E7) text, cursor: not-allowed
- **Focus**: 2px outline in contrasting color

#### Secondary Button
- **Background**: Transparent
- **Text**: Black (#0B0B0C) or White (on dark)
- **Border**: 1px solid Black or White (depending on background)
- **Padding**: 12px 24px
- **Border radius**: 4px
- **Hover**: Background fill with opposite color, text inverts
- **Active**: Slight scale down
- **Disabled**: 50% opacity

#### Ghost Button
- **Background**: Transparent
- **Text**: Medium Gray (#3A3A3C)
- **Border**: None
- **Padding**: 12px 24px
- **Hover**: Text darkens, slight underline
- **Active**: Text to Black/White (depending on section)

**Allowed Variants**: primary, secondary, ghost
**Accessibility**: Always include aria-label if icon-only, keyboard navigable, focus visible

---

### Inputs / Selects / Textareas

**Base Styles**
- **Background**: White or Off-White (depending on section)
- **Border**: 1px solid Light Gray (#E4E5E7)
- **Padding**: 12px 16px
- **Border radius**: 4px
- **Font**: 16px regular
- **Color**: Black (#0B0B0C)

**States**
- **Default**: Light Gray border
- **Hover**: Border darkens to Medium Gray (#3A3A3C)
- **Focus**: 2px outline, border to Black
- **Error**: Border to Medium Gray, add error text below
- **Disabled**: Background to Light Gray, text to Medium Gray, cursor: not-allowed

**Labels**
- 14px, Medium Gray, 8px spacing above input
- Required indicator: Asterisk in Medium Gray

**Placeholder**
- Light Gray (#E4E5E7) text
- Italic style

**Accessibility**: Proper label association, aria-describedby for errors, keyboard navigation

---

### Cards

**Structure**
- **Background**: White (light) or Dark Gray (dark sections)
- **Border**: 1px solid Light Gray or Medium Gray (depending on section)
- **Border radius**: 8px
- **Padding**: 24px
- **Shadow**: Subtle (see shadow rules)

**Variants**
- **Standard**: White background, Light Gray border
- **Elevated**: Stronger shadow on hover
- **Dark**: Dark Gray background, Medium Gray border (in dark sections)

**Hover States**
- Subtle elevation (shadow increase)
- Optional: Slight scale (1.01)
- Border may darken slightly

**Content Spacing**
- Title: 16px bottom margin
- Body: 16px bottom margin
- Actions: 24px top margin

**Accessibility**: Semantic structure, proper heading hierarchy

---

### Navbars

**Structure**
- **Background**: White or Black (depending on theme)
- **Height**: 64px (desktop), 56px (mobile)
- **Padding**: 16px horizontal
- **Border**: 1px bottom border (Light Gray or Medium Gray)

**Logo**
- Left-aligned
- Height: 32px (desktop), 28px (mobile)

**Navigation Links**
- Font: 16px, 600 weight
- Color: Black or White (depending on background)
- Spacing: 24px between items
- Active state: Underline or medium weight
- Hover: Slight opacity change or underline

**Mobile Menu**
- Full-screen overlay or slide-in
- Background: White or Black
- Links: Stacked, 48px height each
- Close button: Top right

**Accessibility**: ARIA labels, keyboard navigation, skip links

---

### Hero Sections

**Layout Options**
- **Centered**: Text center, max-width container
- **Split**: Image/content side-by-side (desktop)

**Text**
- H1 title: Largest heading size
- Subtitle: Large body text (18px), Medium Gray
- CTA buttons: 24px spacing below text

**Background**
- Solid color (White, Black, or Dark Gray)
- Optional subtle pattern (minimal)

**Padding**
- 96px top/bottom (desktop)
- 64px top/bottom (mobile)

**Height**
- Minimum viewport height: 60vh
- Maximum: 100vh

---

### Feature Grids

**Layout**
- 2x2, 3x1, or 4-column responsive grid
- Gap: 32px between items
- Equal-width columns

**Card Structure**
- Icon or number (32px size)
- Title (H3)
- Description (Regular body text)
- Optional link

**Spacing**
- Icon to title: 16px
- Title to description: 12px

---

### Testimonials

**Card Layout**
- Background: White or Off-White
- Border: 1px Light Gray
- Padding: 32px
- Max-width: 400px per testimonial

**Content**
- Quote: Large body text (18px), Medium Gray, italic
- Author: Regular body (16px), Black, 600 weight
- Role/Location: Small body (14px), Medium Gray

**Styling**
- Optional quotation marks (decorative, Light Gray)

---

### Pricing Tables

**Structure**
- Card-based layout
- Clear hierarchy for featured plan

**Plan Header**
- Title: H3
- Price: Large, bold (32px)
- Period: Small text, Medium Gray

**Features List**
- Bullet points or checkmarks
- Light Gray for unavailable features
- 8px spacing between items

**CTA Button**
- Full-width in card
- Primary style

**Featured Plan**
- Border: 2px Black
- Subtle background variation
- Optional "Popular" badge

---

### Contact Form

**Layout**
- Two-column on desktop (name/email side-by-side)
- Single column on mobile
- Gap: 16px between fields

**Fields**
- Name, Email, Phone, Message (textarea)
- Labels above inputs
- Required indicators

**Message Field**
- Textarea, minimum 120px height
- Resize: Vertical only

**Submit Button**
- Primary style
- Full-width on mobile, auto on desktop

**Success/Error States**
- Clear messaging below form
- Color: Medium Gray for errors

---

### Footer

**Structure**
- Background: Black (#0B0B0C)
- Text: White and Light Gray
- Padding: 48px top, 32px bottom

**Sections**
- Logo/brand (left)
- Links (center) - organized in columns
- Social/Contact (right)

**Links**
- Color: Light Gray (#E4E5E7)
- Hover: White
- 16px spacing between items

**Copyright**
- Small text (14px), Medium Gray (#3A3A3C)
- Bottom section, centered

---

## E. Semantic HTML Requirements

### Why Semantic HTML Matters

**Screen Readers**
- Semantic elements provide context and structure to assistive technologies
- Screen readers navigate by landmarks (header, nav, main, footer)
- Proper heading hierarchy enables efficient document outline navigation
- Form elements with labels create accessible input relationships

**SEO**
- Search engines use semantic HTML to understand page structure and importance
- Proper heading hierarchy helps establish content hierarchy
- Article and section elements help identify main content
- Semantic markup improves content discoverability

**AI Code Generation Consistency**
- Semantic HTML provides clear patterns for AI tools to follow
- Consistent structure makes code generation predictable and maintainable
- Well-structured HTML is easier for AI to understand and modify

**Clean DOM Hierarchy**
- Semantic elements create logical document structure
- Reduces reliance on div-heavy markup
- Makes CSS targeting more meaningful
- Improves code readability and maintainability

### Proper Element Usage

**`<header>`**
- Site header/navigation container
- Appears once per page at the top
- Contains logo and primary navigation

**`<nav>`**
- Navigation menus
- Can appear multiple times (header nav, footer nav)
- Always contains list of links (`<ul>` with `<li><a>`)

**`<main>`**
- Primary content of the page
- Appears once per page
- Contains all main content sections
- Should not include header, footer, or sidebar

**`<section>`**
- Thematic grouping of content
- Each section should have a heading (h2-h6)
- Use for distinct content areas (hero, features, testimonials, etc.)
- Can be nested within article or main

**`<article>`**
- Self-contained, independently distributable content
- Use for blog posts, testimonials, news items
- Should contain heading and full content

**`<aside>`**
- Tangentially related content
- Sidebars, callout boxes
- Can be nested within article or main

**`<footer>`**
- Site footer
- Contains copyright, links, contact info
- Appears once per page at the bottom

**`<h1>` through `<h6>`**
- Must be used in order (don't skip levels)
- Only one h1 per page
- h1 = page title
- h2-h6 = section and subsection headings

**Additional Semantic Elements**
- `<button>` for interactive buttons (not divs styled as buttons)
- `<a>` for links (with href)
- `<form>`, `<input>`, `<label>`, `<textarea>` for forms
- `<img>` with alt text for images
- `<figure>` and `<figcaption>` for images with captions

### Accessibility Best Practices

- Always associate labels with form inputs
- Use ARIA labels when semantic HTML isn't sufficient
- Maintain logical tab order
- Ensure keyboard navigation works for all interactive elements
- Use heading hierarchy correctly
- Include alt text for images
- Use landmarks (header, nav, main, footer) appropriately
- Ensure sufficient color contrast



