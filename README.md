# Devansh Mathur - Portfolio Website

A modern, responsive portfolio website built with React.js (Vite) and Tailwind CSS.

## Features

- **Modern Design**: Split-screen hero section with minimalist aesthetic
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Scrolling**: Seamless navigation between sections
- **Interactive Components**: Dynamic navbar, contact form, and skill showcases
- **Performance Optimized**: Built with Vite for fast development and production builds

## Tech Stack

- React.js 19
- Vite
- Tailwind CSS
- React Icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Sticky navigation bar
│   ├── Hero.jsx        # Split-screen hero section
│   ├── About.jsx       # About me section
│   ├── Skills.jsx      # Skills showcase with icons
│   ├── Experience.jsx # Work experience timeline
│   ├── Projects.jsx    # Portfolio projects grid
│   ├── Contact.jsx     # Contact form and info
│   └── Footer.jsx      # Footer with social links
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles with Tailwind
```

## Customization

- Update personal information in each component file
- Modify colors in `tailwind.config.js`
- Replace placeholder portrait image in `Hero.jsx`
- Add/remove projects in `Projects.jsx`
- Update skills in `Skills.jsx`

## License

This project is private and personal.
