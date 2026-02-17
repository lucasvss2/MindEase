# 🧠 MindEase

**MindEase** is a comprehensive mental health and well-being platform designed to support users through accessible and intuitive digital experiences. Available on both web and mobile platforms, MindEase provides tools and features to help users manage their mental wellness journey with ease and confidence.

---

## 📱 Platform Overview

MindEase is built as a multi-platform solution:

- **🌐 Web Application** - Modern, responsive web experience built with React and cutting-edge technologies
- **📱 Mobile Application** - Native mobile experience built with React Native for iOS and Android

---

## 🚀 Quick Start

### Web Application

Navigate to the web directory and follow the setup instructions:

```bash
cd mind-ease-web
npm install

npm run dev
```

For detailed web setup and documentation, see [mind-ease-web/README.md](./mind-ease-web/README.md)

### Mobile Application

Navigate to the mobile directory and follow the setup instructions:

```bash
cd mind-ease-mobile
npm install
npm start
```

> **Note**: The mobile application is built with **React Native** and requires additional setup for iOS and Android development environments.

---

## 🛠️ Technology Stack

### Web Platform
- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Linaria (Zero-runtime CSS-in-JS) with Ant Design
- **State Management**: Zustand + TanStack Query
- **Routing**: React Router v7

### Mobile Platform
- **Framework**: React Native
- **Language**: TypeScript
- **Platform Support**: iOS and Android

---

## 📁 Repository Structure

```
MindEase/
├── mind-ease-web/          # Web application
│   ├── src/                # Source code
│   ├── public/             # Static assets

│   ├── package.json        # Dependencies and scripts
│   └── README.md           # Web-specific documentation
│
├── mind-ease-mobile/       # Mobile application (React Native)
│   ├── src/                # Source code
│   ├── android/            # Android native code
│   ├── ios/                # iOS native code
│   ├── package.json        # Dependencies and scripts
│   └── README.md           # Mobile-specific documentation
│
└── README.md               # This file - Project overview
```

---

## ✨ Key Features

### 🎨 User Experience
- Modern, intuitive interface designed for accessibility
- Light and dark mode support across all platforms
- Responsive design that adapts to any screen size
- Consistent user experience between web and mobile

### 🔒 Privacy & Security
- User data protection and privacy-first approach
- Secure authentication and authorization
- Encrypted data transmission

### 📊 Mental Wellness Tools
- Dashboard for tracking mental health metrics
- Personalized recommendations and insights
- Progress tracking and goal setting

---

## 🚀 Development

### Prerequisites

#### For Web Development
- Node.js (v18 or higher)
- npm or yarn package manager
- Modern web browser

#### For Mobile Development
- Node.js (v18 or higher)
- npm or yarn package manager
- **For iOS**: macOS with Xcode installed
- **For Android**: Android Studio with SDK configured
- React Native CLI or Expo CLI (depending on project setup)

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd MindEase
   ```

2. **Choose your platform**
   - For web development: `cd mind-ease-web`
   - For mobile development: `cd mind-ease-mobile`

3. **Follow platform-specific instructions**
   - Each platform has its own README with detailed setup instructions
   - Refer to the respective README files for installation and development guidelines

---

## 🤝 Contributing

We welcome contributions to MindEase! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes with clear, descriptive messages
4. Push to your branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Standards
- Follow TypeScript best practices
- Maintain consistent code style across platforms
- Write meaningful commit messages
- Add appropriate tests for new features
- Update documentation as needed

---

## 📜 Scripts Overview

### Web Platform
| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run serve` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests (Vitest) |

### Mobile Platform
| Script | Description |
|--------|-------------|
| `npm start` | Start Metro bundler |
| `npm run android` | Run on Android device/emulator |
| `npm run ios` | Run on iOS device/simulator |
| `npm test` | Run tests |

---

## 🗺️ Roadmap

- [x] Web application with modern UI/UX
- [ ] React Native mobile application for iOS
- [ ] React Native mobile application for Android
- [ ] Cross-platform data synchronization
- [ ] Advanced analytics and insights
- [ ] Offline mode support
- [ ] Push notifications
- [ ] Social features and community support

---

## 📄 License

This project is private and proprietary.

---

## 🆘 Support

For issues, questions, or contributions:
- Create an issue in the repository
- Contact the development team
- Check platform-specific README files for detailed documentation

---

## 🙏 Acknowledgments

Built with ❤️ by the MindEase development team.

Special thanks to the open-source community for the amazing tools and libraries that make this project possible.

---

**MindEase** - Supporting mental wellness through technology 💙
