---
name: Celestial Architect
colors:
  surface: '#131318'
  surface-dim: '#131318'
  surface-bright: '#39393e'
  surface-container-lowest: '#0e0e12'
  surface-container-low: '#1b1b20'
  surface-container: '#1f1f24'
  surface-container-high: '#2a292f'
  surface-container-highest: '#34343a'
  on-surface: '#e4e1e8'
  on-surface-variant: '#c7c4d8'
  inverse-surface: '#e4e1e8'
  inverse-on-surface: '#303035'
  outline: '#908fa1'
  outline-variant: '#464556'
  surface-tint: '#c1c1ff'
  primary: '#c1c1ff'
  on-primary: '#1500a8'
  primary-container: '#5d5cff'
  on-primary-container: '#fdf9ff'
  inverse-primary: '#4643e9'
  secondary: '#c8c5cc'
  on-secondary: '#303035'
  secondary-container: '#47464c'
  on-secondary-container: '#b6b4bb'
  tertiary: '#c6c6c7'
  on-tertiary: '#2f3131'
  tertiary-container: '#727373'
  on-tertiary-container: '#fafafa'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1dfff'
  primary-fixed-dim: '#c1c1ff'
  on-primary-fixed: '#09006b'
  on-primary-fixed-variant: '#2b20d2'
  secondary-fixed: '#e4e1e8'
  secondary-fixed-dim: '#c8c5cc'
  on-secondary-fixed: '#1b1b20'
  on-secondary-fixed-variant: '#47464c'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#131318'
  on-background: '#e4e1e8'
  surface-variant: '#34343a'
  glass-surface: rgba(31, 31, 36, 0.4)
  glow-violet: rgba(193, 193, 255, 0.05)
  on-surface-muted: '#c7c4d8'
  border-muted: rgba(144, 143, 161, 0.2)
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '400'
    lineHeight: '1.2'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 32px
  margin-mobile: 20px
  section-gap-desktop: 160px
  section-gap-mobile: 80px
---

## Brand & Style
The brand identity is "Celestial Architect"—a fusion of high-precision engineering and immersive, futuristic exploration. It targets a sophisticated audience of developers and digital-first enterprises, evoking a sense of technical mastery and depth.

The visual style is a hybrid of **Glassmorphism** and **Minimalism**. It utilizes a deep-space canvas with layers of translucent "glass" surfaces that provide structural clarity without breaking the immersive backdrop. The aesthetic is defined by sharp typography, ethereal glows, and a "dark mode by default" philosophy that emphasizes light-emitting elements as primary interactive cues.

## Colors
The palette is centered on a high-fidelity "Electric Indigo" primary color that serves as the main light source and action indicator. The background utilizes a deep "Obsidian" neutral to ensure maximum contrast for the glass effects.

- **Primary:** Electric Indigo (#5d5cff). Used for call-to-actions, highlights, and status indicators.
- **Surface:** Obsidian (#131318). The core foundation for the application.
- **Glass Surfaces:** Semi-transparent layering (31, 31, 36, 0.4) used to create depth and hierarchy.
- **Accents:** Muted Lavender (#c7c4d8) is used for secondary text to provide readability without competing with the primary headlines.

## Typography
The system uses a two-font approach. **Hanken Grotesk** is reserved for headlines and interactive labels, providing a clean, geometric, and modern feel. **Inter** handles all body content to ensure maximum legibility and a systematic appearance.

Typography roles are characterized by tight tracking in large headlines and generous tracking for labels. "Display" and "Headline Large" roles are used sparingly for section entries, while "Label MD" is frequently used for all-caps navigation and small buttons to maintain a technical, architectural vibe.

## Layout & Spacing
The design follows a **fixed grid** philosophy centered within a 1200px container for desktop environments. The spacing rhythm is built on an 8px base unit.

- **Desktop:** Utilizes a standard 12-column grid with 32px gutters and significant vertical breathing room (160px between sections) to emphasize the minimalist aesthetic.
- **Mobile:** The layout collapses to a single column with 20px margins. Section gaps are halved to 80px to maintain momentum during scrolling.
- **Bento Grid:** Project displays should utilize a modular bento grid system where elements can span 1 or 2 columns to create visual interest.

## Elevation & Depth
Elevation is expressed through **Glassmorphism** rather than traditional shadows. Depth is achieved via:
1.  **Backdrop Blur:** Surfaces use a 12px blur to separate themselves from the background canvas.
2.  **Border-Stroke Isolation:** Thin, low-opacity borders (border-muted) define the edges of floating surfaces.
3.  **Luminous Glows:** Interactive elements like buttons and icons utilize "soft shadows" that are actually colored glows (tinted with the Primary Indigo) to mimic light emission on dark surfaces.
4.  **Tonal Layers:** Backgrounds alternate between the pure surface color and slightly lighter surface-container values to distinguish sections without hard dividers.

## Shapes
The shape language is "Soft-Precise." While the general roundedness is low (4px for base elements) to maintain a professional look, it scales to 12px (rounded-lg) for large cards and 24px (rounded-full) for circular avatars or decorative icons. 

Buttons utilize a minimal 4px radius to feel like solid engineering components, whereas content cards use larger radii to feel approachable and modern.

## Components
- **Buttons:**
    - *Primary:* Solid Indigo background, all-caps Hanken Grotesk labels, slight brightness increase on hover, and a subtle indigo glow shadow.
    - *Secondary/Ghost:* Thin border (outline-variant) with ghost-fill, turning to a glass-surface on hover.
- **Glass Cards:** The signature component. 40% opacity obsidian background, 12px blur, and a 1px border. Often used in bento-style grids.
- **Chips/Badges:** Small, high-contrast rectangles with 4px rounding. Backgrounds are either Primary (10% opacity) for features or Surface-Variant for categories.
- **Inputs:** Underlined-style with only a bottom border. The border transitions from muted-gray to Electric Indigo on focus, accompanied by a label that uses the Label MD typography.
- **Navigation:** Fixed top-bar with 80% opacity and strong backdrop blur. Active states are indicated by an indigo bottom-border and primary-colored text.