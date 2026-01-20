# 📔 Journal App - React & Firebase

A modern journal/diary application built with React, Redux Toolkit, Firebase, and Material-UI. Manage your personal notes with image upload support and secure authentication.

> 🎓 **Course**: React de Cero a Experto (Hooks y MERN) - [Fernando Herrera](https://fernando-herrera.com/) | [DevTalles](https://cursos.devtalles.com/)  
> 📖 [Ver documentación en Español](./docs/README_ES.md) | 📚 [Course Information](./docs/COURSE.md)

## 📋 Table of Contents

- [Description](#-description)
- [Technologies](#%EF%B8%8F-technologies)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Project Structure](#-project-structure)
- [Features](#-features)
- [Security](#-security)
- [Scripts](#-scripts)
- [Author and Credits](#-author-and-credits)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)

## 📚 Additional Documentation

- 🎓 **[Course Information](./docs/COURSE.md)** - Detailed course information in English
- 🎓 **[Información del Curso](./docs/CURSO.md)** - Información detallada del curso en Español
- 📘 **[User Guide](./docs/USER_GUIDE.md)** - Complete usage guide in English
- 📘 **[Guía de Uso](./docs/GUIA_USO.md)** - Guía de uso completa en Español
- 🗂️ **[Project Structure](./docs/PROJECT_STRUCTURE.md)** - Detailed project structure in English
- 🗂️ **[Estructura del Proyecto](./docs/ESTRUCTURA.md)** - Estructura detallada en Español
- 🌐 **[Documentación Completa en Español](./docs/README_ES.md)** - Full documentation in Spanish

## 🚀 Description

This project is a journal/diary application developed as part of the React course by **Fernando Herrera**. It's a practical implementation demonstrating advanced React concepts, state management with Redux Toolkit, and Firebase integration for authentication and data persistence.

> **Note**: This code is the result of following the React course. The original exercises were created by Fernando Herrera as educational material.

The application allows users to:

- Create and manage private journal entries
- Upload and attach multiple images to entries
- Authenticate securely with Firebase Authentication
- Store data in Firebase Firestore
- Use Material-UI for a modern, responsive interface

## 🛠️ Technologies

- **React** 18.2.0 - UI library
- **Redux Toolkit** 2.2.1 - State management
- **Firebase** 10.8.0 - Backend services (Auth & Firestore)
- **Material-UI** 5.15.9 - Component library
- **React Router DOM** 6.22.0 - Navigation
- **Vite** 5.0.8 - Build tool and dev server
- **SweetAlert2** 11.10.5 - Beautiful alerts
- **Cloudinary** - Image hosting

## 📦 Installation

\`\`\`bash

# Clone the repository

git clone https://github.com/Jaguilars5/08-journal-app.git

# Enter the directory

cd 08-journal-app

# Install dependencies

npm install

# Configure environment variables (see next section)

cp .env.example .env

# Edit .env with your Firebase credentials

# Start development server

npm run dev
\`\`\`

The application will open at \`http://localhost:5173\`

## 🔑 Environment Variables

Create a \`.env\` file in the root directory with your Firebase credentials:

\`\`\`env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
VITE_FIREBASE_PROJECT_ID=your_project_id_here
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
VITE_FIREBASE_APP_ID=your_app_id_here
\`\`\`

### Getting Firebase Credentials

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select existing one
3. Go to Project Settings → General
4. Scroll to "Your apps" section
5. Click on "</>" (Web app) to create or view web app
6. Copy the configuration values

### Cloudinary Setup

For image uploads, configure Cloudinary in \`src/helpers/fileUpload.js\`:

1. Create account at [Cloudinary](https://cloudinary.com/)
2. Get your cloud name from dashboard
3. Update the upload URL in the helper

## 📁 Project Structure

\`\`\`
08-journal-app/
├── src/
│ ├── auth/ # Authentication module
│ │ ├── layout/
│ │ │ └── AuthLayout.jsx
│ │ ├── pages/
│ │ │ ├── LoginPage.jsx
│ │ │ └── RegisterPage.jsx
│ │ └── routes/
│ │ └── AuthRoutes.jsx
│ ├── firebase/ # Firebase configuration
│ │ ├── confing.js
│ │ └── providers.js
│ ├── helpers/ # Utility functions
│ │ ├── fileUpload.js
│ │ ├── firebaseErrors.js
│ │ └── loadNotes.js
│ ├── hooks/ # Custom React hooks
│ │ ├── useCheckAuth.js
│ │ └── useForm.js
│ ├── journal/ # Main journal module
│ │ ├── components/
│ │ │ ├── ImageGallery.jsx
│ │ │ ├── NavBar.jsx
│ │ │ ├── SideBar.jsx
│ │ │ └── SideBarItem.jsx
│ │ ├── layout/
│ │ │ └── JournalLayout.jsx
│ │ ├── pages/
│ │ │ └── JournalPage.jsx
│ │ ├── routes/
│ │ │ └── JournalRoutes.jsx
│ │ └── views/
│ │ ├── NoteView.jsx
│ │ └── NothingSelectedView.jsx
│ ├── router/ # Route configuration
│ │ └── AppRouter.jsx
│ ├── store/ # Redux store
│ │ ├── auth/
│ │ │ ├── authSlice.js
│ │ │ └── thunks.js
│ │ ├── journal/
│ │ │ ├── journalSlice.js
│ │ │ └── thunks.js
│ │ └── store.js
│ ├── theme/ # Material-UI theme
│ │ ├── AppTheme.jsx
│ │ └── purpleTheme.js
│ └── ui/ # UI components
│ └── components/
│ └── CheckingAuth.jsx
├── .env.example # Environment variables template
├── .gitignore
├── package.json
└── vite.config.js
\`\`\`

## ✨ Features

- ✅ User authentication (Email/Password and Google Sign-In)
- ✅ Create, edit, and delete journal entries
- ✅ Upload multiple images per entry
- ✅ Real-time data synchronization with Firestore
- ✅ Responsive design with Material-UI
- ✅ Protected routes for authenticated users
- ✅ Form validation (required title and content)
- ✅ Secure environment variable management
- ✅ User-friendly error messages in Spanish
- ✅ Date and time tracking for entries
- ✅ Clean and modern UI with smooth animations

## 🔒 Security

This application implements several security measures:

### API Keys Protection

- ✅ All Firebase credentials stored in \`.env\` file
- ✅ \`.env\` added to \`.gitignore\`
- ✅ \`.env.example\` provided as template

### Authentication

- ✅ Protected routes for authenticated users only
- ✅ Automatic redirect if not logged in
- ✅ Session persistence with Firebase

### Data Validation

- ✅ Required title and content for notes
- ✅ Frontend validation before submission
- ✅ Backend validation in thunks
- ✅ Prevents empty notes creation

### User Experience

- ✅ Error messages in Spanish for better UX
- ✅ Clear, user-friendly alerts
- ✅ Input validation feedback

## 🎯 Scripts

\`\`\`bash

# Development

npm run dev # Start development server

# Build

npm run build # Create production build
npm run preview # Preview production build

# Linting

npm run lint # Run ESLint
\`\`\`

## 👨‍💻 Author and Credits

**Student**: Jefferson Aguilar

**Course Instructor**: [Fernando Herrera](https://fernando-herrera.com/)

- 🎓 Course: React de Cero a Experto (Hooks y MERN)
- 🔗 [DevTalles](https://cursos.devtalles.com/)

## 📄 License

The original exercises are intellectual property of Fernando Herrera and DevTalles. This repository contains my personal implementation of those exercises for educational purposes.

## 🙏 Acknowledgments

I want to express my gratitude to **Fernando Herrera** for:

- 📖 Creating high-quality educational content
- 🎯 Explaining complex concepts in a clear way
- 💡 Sharing industry best practices
- 🚀 Motivating continuous learning and improvement

---

⭐ If this project helped you learn React, Redux, or Firebase, consider giving it a star on GitHub!

**Made with ❤️ for learning**
