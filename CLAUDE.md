# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the marketing website for LiteGraph, an AI-native multi-dimensional database. The site is a static website built with vanilla HTML, CSS, and JavaScript, designed to showcase LiteGraph's features and provide getting started information.

**Important**: This repository contains only the marketing website. The actual LiteGraph database library can be found at: https://github.com/litegraphdb/litegraph

## Architecture

- **Static Website**: No build process required - files are served directly
- **index.html**: Main landing page with all content sections
- **styles.css**: Complete CSS with theme support (light/dark modes) and responsive design
- **script.js**: Interactive JavaScript features including theme switching, code tabs, and animations
- **README.md**: Basic project description

## Key Features

- **Theme System**: Light/dark mode toggle with localStorage persistence
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Interactive Code Examples**: Tabbed code samples for different languages (C#, JavaScript, Python, cURL)
- **Smooth Animations**: Intersection Observer for fade-in effects and scroll-based navbar shadows
- **Performance Optimized**: Debounced scroll handlers and image preloading

## File Structure

```
www/
├── index.html          # Main website content
├── styles.css          # All styling with CSS variables for theming
├── script.js           # Interactive functionality
├── README.md           # Project description
└── CNAME              # GitHub Pages domain configuration
```

## Development

### No Build Process
This is a static website - no compilation, bundling, or build steps required. Simply open `index.html` in a browser or serve the files through any web server.

### Local Development
```bash
# Serve locally (any method)
python -m http.server 8000
# or
npx http-server
# or just open index.html directly in browser
```

### Deployment
The site is deployed via GitHub Pages. Changes to the main branch are automatically deployed.

## Code Patterns

### Theme Implementation
- CSS variables in `:root` and `[data-theme="dark"]` selectors
- JavaScript theme toggle with localStorage persistence
- Theme state managed via `data-theme` attribute on `<html>`

### Interactive Elements
- Event delegation for performance
- Intersection Observer for animations
- Debounced scroll handlers
- Mobile-responsive navigation (prepared but not fully implemented)

### Code Examples
- Tabbed interface for multiple language examples
- Copy-to-clipboard functionality for code blocks
- Syntax highlighting through CSS classes

## Content Sections

1. **Hero**: Main value proposition and call-to-action
2. **Features**: Key technical capabilities
3. **Benefits**: Differentiation from other databases
4. **Comparison**: Problems with traditional approaches
5. **Use Cases**: Real-world applications
6. **Getting Started**: Code examples in multiple languages
7. **SDKs**: Available client libraries
8. **Docker**: Deployment instructions

## External Dependencies

- Google Fonts (Inter font family)
- GitHub-hosted assets (favicon, logos)
- External links to documentation, package registries, and GitHub

## Browser Support

Modern browsers with support for:
- CSS Variables
- CSS Grid/Flexbox
- ES6+ JavaScript features
- Intersection Observer API
- LocalStorage