Cine Seek PWA 🎬
A modern Progressive Web App for movie discovery built with Next.js, featuring offline functionality, installability, and native app-like performance.

https://img.shields.io/badge/PWA-Enabled-brightgreen
https://img.shields.io/badge/Next.js-14-black
https://img.shields.io/badge/TypeScript-Ready-blue

✨ Features
📱 Progressive Web App - Works offline and installable on any device

⚡ Lightning Fast - Optimized performance with service worker caching

🎬 Movie Discovery - Browse and search movies with detailed information

📴 Offline Access - View previously loaded movie data without internet

🔍 Cross-Platform - Seamless experience across desktop, tablet, and mobile

🚀 One-Click Install - Add to home screen like a native app

🛠️ Tech Stack
Framework: Next.js 14 with TypeScript

PWA: @ducanh2912/next-pwa

Icons: Custom PWA icon set

Deployment: Vercel

Caching: Service Worker with runtime caching

🚀 Quick Start
Prerequisites
Node.js 18+

npm or yarn

Installation
bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/alx-pwa-0x01.git

# Navigate to project
cd alx-movie-app

# Install dependencies
npm install

# Run development server
npm run dev
Open http://localhost:3000 to view the app.

Building for Production
bash
# Build the application
npm run build

# Start production server
npm start
📱 PWA Features Implementation
Service Worker
Automatic registration via next-pwa

Cache-first strategy for static assets

Runtime caching for movie images

Offline fallback pages

Web App Manifest
App metadata for installation

Platform-specific icons

Theme and display configurations

Splash screen support

Icons
192x192 (Android Chrome)

152x152 (Apple Touch)

310x310 (Windows)

🧪 Testing PWA Features
Local Testing:

bash
npm run dev
Open Chrome DevTools → Application tab

Verify Service Worker registration

Check Manifest configuration

Lighthouse Audit:

Run Lighthouse in Chrome DevTools

Target PWA score > 90

Verify installability

Production Testing:

Deploy to Vercel

Test install prompt

Verify offline functionality

🌐 Deployment
Deployed automatically via Vercel:

bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
Live Demo: [Your Vercel URL Here]

📁 Project Structure
text
alx-movie-app/
├── public/
│   ├── manifest.json
│   └── icons/
│       ├── android-chrome-192x192.png
│       ├── apple-icon-152x152.png
│       └── ms-icon-310x310.png
├── pages/
│   ├── _document.tsx
│   └── ...other pages
├── next.config.mjs
└── package.json
🔧 Configuration
next.config.mjs
javascript
import withPWA from "@ducanh2912/next-pwa";

export default withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
});
manifest.json
json
{
  "name": "Cine Seek",
  "short_name": "CineSeek",
  "display": "standalone",
  "theme_color": "#FFFFFF",
  "background_color": "#FFFFFF"
}
🎯 Learning Outcomes
This project demonstrates:

PWA fundamentals and implementation

Service Worker configuration and caching strategies

Web App Manifest creation

Cross-browser PWA compatibility

Performance optimization techniques

Production deployment best practices

🤝 Contributing
Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
This project is part of the ALX PWA Fundamentals curriculum.

🙏 Acknowledgments
ALX Software Engineering Program

Next.js PWA plugin maintainers

The Movie Database (TMDB) API

Vercel for deployment platform

Built with ❤️ for the ALX PWA Fundamentals Project

