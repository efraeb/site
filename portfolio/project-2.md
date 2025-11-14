# Project Two

Pushing the boundaries of web experiences through intentional design and smooth interactions.

## Vision

Create a portfolio that feels more like an art installation than a traditional website. Every interaction should feel deliberate and satisfying.

## Design System

### Typography

Used a monospace font family for its technical aesthetic and excellent readability. Font sizes follow a modular scale:

- Headings: 96px / 72px / 48px
- Body: 16px / 14px
- Small: 12px

### Color Palette

Intentionally limited:

```
Primary:   #000000 (Black)
Secondary: #666666 (Gray)
Accent:    #FFFFFF (White)
```

### Spacing

Everything follows an 8px grid system for perfect alignment and visual rhythm.

## Features

### Scroll Animations

Implemented using Intersection Observer API for performance. Elements fade in when they enter the viewport with staggered delays.

### Custom Cursor

A dual-layer cursor that smoothly follows mouse movement:

- Outer ring with delayed follow
- Inner dot with instant positioning
- Expands on hover over interactive elements

### Modal System

Full-screen overlays that display project details:

- Smooth fade transitions
- Background blur effect
- Escape key and click-outside to close
- Arrow key navigation between projects

## Performance Metrics

- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Lighthouse Score**: 98/100
- **Bundle Size**: < 50kb

## Accessibility

Built with accessibility in mind:

- Semantic HTML
- Keyboard navigation
- Focus indicators
- Screen reader friendly

## Future Improvements

- Add dark/light mode toggle
- Implement page transitions
- Add more micro-interactions
- Create loading animations

---

This project represents the intersection of design and development—where aesthetics meet functionality.
