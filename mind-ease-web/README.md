# 🧠 MindEase Web

**MindEase** is a modern web application designed to support mental health and well-being through an intuitive and accessible interface. Built with cutting-edge technologies and a focus on user experience, MindEase provides tools and features to help users manage their mental wellness journey.

## ✨ Features

- 🎨 **Modern UI with PandaCSS** - Beautiful, themeable design system with light/dark mode support
- 🚀 **Fast & Responsive** - Built with Vite for lightning-fast development and optimized production builds
- 📱 **Mobile-First Design** - Fully responsive layout that works seamlessly across all devices
- 🔄 **Real-time State Management** - Efficient state management with Zustand
- 🎯 **Type-Safe** - Full TypeScript support for enhanced developer experience and code reliability
- 🌐 **Modern Routing** - Client-side routing with React Router v7
- 🎨 **Rich Component Library** - Powered by Ant Design for professional UI components
- 🔍 **Smart Data Fetching** - TanStack Query for efficient server state management
- 🌓 **Theme Support** - Seamless light and dark mode with accessible color palettes

## 🛠️ Tech Stack

### Core Technologies
- **[React 19](https://react.dev/)** - Latest version of the popular UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Static type checking for enhanced code quality
- **[Vite](https://vitejs.dev/)** - Next-generation frontend build tool

### Styling & Design
- **[PandaCSS](https://panda-css.com/)** - Build-time CSS-in-JS with zero runtime
- **[Ant Design](https://ant.design/)** - Enterprise-class UI component library
- **[Polished](https://polished.js.org/)** - Lightweight toolkit for writing styles

### State & Data Management
- **[Zustand](https://zustand-demo.pmnd.rs/)** - Lightweight state management
- **[TanStack Query](https://tanstack.com/query/latest)** - Powerful asynchronous state management
- **[Axios](https://axios-http.com/)** - Promise-based HTTP client

### Routing & Navigation
- **[React Router v7](https://reactrouter.com/)** - Declarative routing for React

### Utilities
- **[Day.js](https://day.js.org/)** - Fast 2kB alternative to Moment.js
- **[Lodash](https://lodash.com/)** - Modern JavaScript utility library
- **[Sonner](https://sonner.emilkowal.ski/)** - Opinionated toast component for React

### Development Tools
- **[ESLint](https://eslint.org/)** - Linting for code quality
- **[Prettier](https://prettier.io/)** - Code formatting
- **[TanStack Query DevTools](https://tanstack.com/query/latest/docs/framework/react/devtools)** - Debugging tools for Query

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mind-ease-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Generate PandaCSS**
   ```bash
   npm run prepare
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Build the application for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm run prepare` | Generate PandaCSS styled-system (runs automatically on install) |

## 📁 Project Structure

```
mind-ease-web/
├── public/                     # Static assets
├── src/
│   ├── app/                    # Application setup and routing
│   │   └── routes/            # Route definitions
│   ├── assets/                # Images, icons, and other assets
│   │   ├── icons/
│   │   └── images/
│   ├── dashboard/             # Dashboard features
│   ├── features/              # Feature modules
│   │   └── dashboard/         # Dashboard-specific features
│   ├── shared/                # Shared utilities and components
│   │   ├── components/       # Reusable UI components
│   │   ├── contexts/         # React contexts
│   │   ├── hooks/            # Custom React hooks
│   │   ├── services/         # API services and integrations
│   │   ├── stores/           # Zustand stores
│   │   ├── styles/           # Global styles and PandaCSS system
│   │   ├── types/            # TypeScript type definitions
│   │   └── utils/            # Utility functions
│   ├── main.tsx              # Application entry point
│   └── styles.css            # Global CSS
├── .gitignore                # Git ignore rules
├── eslint.config.js          # ESLint configuration
├── index.html                # HTML template
├── package.json              # Project dependencies and scripts
├── panda.config.ts           # PandaCSS configuration
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite configuration
└── README.md                 # This file
```

## 🎨 Design System

MindEase uses a custom design system built with PandaCSS featuring:

### Color Scheme
- **Brand Colors**: Teal and Mint palettes for a calming aesthetic
- **Semantic Tokens**: Context-aware colors that adapt to light/dark modes
- **Accessibility**: WCAG-compliant color contrasts for readability

### Theme Modes
The application supports both light and dark modes with carefully crafted color palettes:
- **Light Mode**: Soft backgrounds with deep, readable text
- **Dark Mode**: Dark backgrounds with bright, accessible text

### Key Design Tokens
- Brand Primary: Teal (`#2D8C96` / `#89F0D1`)
- Brand Secondary: Blue (`#6AB2E4` / `#A3D5F7`)
- Backgrounds: Subtle blue-tinted whites to pure blacks
- Typography: Optimized for readability and reduced eye strain

## ⚙️ Configuration

### PandaCSS
The project uses PandaCSS for styling with configuration in [`panda.config.ts`](file:///e:/MindEase/mind-ease-web/panda.config.ts). Key features:
- Custom semantic tokens for theming
- Light/dark mode support via `data-color-mode` attribute
- Global CSS reset and base styles
- Output directory: `src/shared/styles/styled-system`

### Vite
Configuration is managed through [`vite.config.ts`](file:///e:/MindEase/mind-ease-web/vite.config.ts). Features include:
- React SWC for fast refresh
- TypeScript path aliases (`@/` resolves to `src/`)
- Optimized build settings

### TypeScript
The project uses TypeScript 5.9 with strict type checking. See [`tsconfig.json`](file:///e:/MindEase/mind-ease-web/tsconfig.json) for configuration.

## 🚀 Development

### Code Style
- ESLint is configured for React and TypeScript best practices
- Prettier is available for consistent code formatting
- Follow the existing code structure and naming conventions

### Adding New Features
1. Create feature modules in `src/features/`
2. Add shared components to `src/shared/components/`
3. Use PandaCSS tokens for styling consistency
4. Create custom hooks in `src/shared/hooks/` for reusable logic
5. Define API services in `src/shared/services/`

### State Management
- Use Zustand for global application state
- Use TanStack Query for server state and caching
- Keep state as close to where it's needed as possible

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Quality
- Ensure all TypeScript types are properly defined
- Run `npm run lint` before committing
- Write meaningful commit messages
- Add comments for complex logic

## 📄 License

This project is private and proprietary.

## 🆘 Support

For issues, questions, or contributions, please contact the development team.

---

**MindEase** - Supporting mental wellness through technology 💙
