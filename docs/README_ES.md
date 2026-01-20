# 📔 Journal App - React & Firebase

Aplicación moderna de diario/journal construida con React, Redux Toolkit, Firebase y Material-UI. Administra tus notas personales con soporte para carga de imágenes y autenticación segura.

> 🎓 **Curso**: React de Cero a Experto (Hooks y MERN) - [Fernando Herrera](https://fernando-herrera.com/) | [DevTalles](https://cursos.devtalles.com/)  
> 📖 [View documentation in English](../README.md) | 📚 [Información del Curso](./CURSO.md)

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Tecnologías](#️-tecnologías)
- [Instalación](#-instalación)
- [Variables de Entorno](#-variables-de-entorno)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Características](#-características)
- [Seguridad](#-seguridad)
- [Scripts](#-scripts)
- [Autor y Créditos](#-autor-y-créditos)
- [Licencia](#-licencia)
- [Agradecimientos](#-agradecimientos)

## 📚 Documentación Adicional

- 🎓 **[Información del Curso](./CURSO.md)** - Información detallada del curso en Español
- 🎓 **[Course Information](./COURSE.md)** - Detailed course information in English
- 📘 **[Guía de Uso](./GUIA_USO.md)** - Guía completa de uso en Español
- 📘 **[User Guide](./USER_GUIDE.md)** - Complete usage guide in English
- 🗂️ **[Estructura del Proyecto](./ESTRUCTURA.md)** - Estructura detallada en Español
- 🗂️ **[Project Structure](./PROJECT_STRUCTURE.md)** - Detailed project structure in English
- 🌐 **[Full Documentation in English](../README.md)** - Documentación completa en Inglés

## 🚀 Descripción

Este proyecto es una aplicación de diario/journal desarrollada como parte del curso de React de **Fernando Herrera**. Es una implementación práctica que demuestra conceptos avanzados de React, gestión de estado con Redux Toolkit e integración con Firebase para autenticación y persistencia de datos.

> **Nota**: Este código es resultado de seguir el curso de React. Los ejercicios originales fueron creados por Fernando Herrera como material educativo.

La aplicación permite a los usuarios:

- Crear y administrar entradas de diario privadas
- Subir y adjuntar múltiples imágenes a las entradas
- Autenticarse de forma segura con Firebase Authentication
- Almacenar datos en Firebase Firestore
- Usar Material-UI para una interfaz moderna y responsiva

## 🛠️ Tecnologías

- **React** 18.2.0 - Librería de UI
- **Redux Toolkit** 2.2.1 - Gestión de estado
- **Firebase** 10.8.0 - Servicios backend (Auth y Firestore)
- **Material-UI** 5.15.9 - Librería de componentes
- **React Router DOM** 6.22.0 - Navegación
- **Vite** 5.0.8 - Herramienta de compilación y servidor de desarrollo
- **SweetAlert2** 11.10.5 - Alertas hermosas
- **Cloudinary** - Hosting de imágenes

## 📦 Instalación

\`\`\`bash

# Clonar el repositorio

git clone https://github.com/Jaguilars5/08-journal-app.git

# Entrar al directorio

cd 08-journal-app

# Instalar dependencias

npm install

# Configurar variables de entorno (ver siguiente sección)

cp .env.example .env

# Editar .env con tus credenciales de Firebase

# Iniciar servidor de desarrollo

npm run dev
\`\`\`

La aplicación se abrirá en \`http://localhost:5173\`

## 🔑 Variables de Entorno

Crea un archivo \`.env\` en el directorio raíz con tus credenciales de Firebase:

\`\`\`env
VITE_FIREBASE_API_KEY=tu_api_key_aqui
VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain_aqui
VITE_FIREBASE_PROJECT_ID=tu_project_id_aqui
VITE_FIREBASE_STORAGE_BUCKET=tu_storage_bucket_aqui
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id_aqui
VITE_FIREBASE_APP_ID=tu_app_id_aqui
\`\`\`

### Obtener Credenciales de Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. Ve a Configuración del Proyecto → General
4. Desplázate a la sección "Tus aplicaciones"
5. Haz clic en "</>" (aplicación web) para crear o ver una aplicación web
6. Copia los valores de configuración

### Configuración de Cloudinary

Para la carga de imágenes, configura Cloudinary en \`src/helpers/fileUpload.js\`:

1. Crea una cuenta en [Cloudinary](https://cloudinary.com/)
2. Obtén tu nombre de nube del dashboard
3. Actualiza la URL de carga en el helper

## 📁 Estructura del Proyecto

\`\`\`
08-journal-app/
├── src/
│ ├── auth/ # Módulo de autenticación
│ │ ├── layout/
│ │ │ └── AuthLayout.jsx
│ │ ├── pages/
│ │ │ ├── LoginPage.jsx
│ │ │ └── RegisterPage.jsx
│ │ └── routes/
│ │ └── AuthRoutes.jsx
│ ├── firebase/ # Configuración de Firebase
│ │ ├── confing.js
│ │ └── providers.js
│ ├── helpers/ # Funciones de utilidad
│ │ ├── fileUpload.js
│ │ ├── firebaseErrors.js
│ │ └── loadNotes.js
│ ├── hooks/ # Hooks personalizados de React
│ │ ├── useCheckAuth.js
│ │ └── useForm.js
│ ├── journal/ # Módulo principal del diario
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
│ ├── router/ # Configuración de rutas
│ │ └── AppRouter.jsx
│ ├── store/ # Store de Redux
│ │ ├── auth/
│ │ │ ├── authSlice.js
│ │ │ └── thunks.js
│ │ ├── journal/
│ │ │ ├── journalSlice.js
│ │ │ └── thunks.js
│ │ └── store.js
│ ├── theme/ # Tema de Material-UI
│ │ ├── AppTheme.jsx
│ │ └── purpleTheme.js
│ └── ui/ # Componentes de UI
│ └── components/
│ └── CheckingAuth.jsx
├── .env.example # Plantilla de variables de entorno
├── .gitignore
├── package.json
└── vite.config.js
\`\`\`

## ✨ Características

- ✅ Autenticación de usuarios (Email/Contraseña y Google Sign-In)
- ✅ Crear, editar y eliminar entradas de diario
- ✅ Subir múltiples imágenes por entrada
- ✅ Sincronización de datos en tiempo real con Firestore
- ✅ Diseño responsivo con Material-UI
- ✅ Rutas protegidas para usuarios autenticados
- ✅ Validación de formularios (título y contenido obligatorios)
- ✅ Gestión segura de variables de entorno
- ✅ Mensajes de error amigables en español
- ✅ Seguimiento de fecha y hora para entradas
- ✅ UI limpia y moderna con animaciones suaves

## 🔒 Seguridad

Esta aplicación implementa varias medidas de seguridad:

### Protección de Claves API

- ✅ Todas las credenciales de Firebase almacenadas en archivo \`.env\`
- ✅ \`.env\` agregado a \`.gitignore\`
- ✅ \`.env.example\` proporcionado como plantilla

### Autenticación

- ✅ Rutas protegidas solo para usuarios autenticados
- ✅ Redirección automática si no has iniciado sesión
- ✅ Persistencia de sesión con Firebase

### Validación de Datos

- ✅ Título y contenido obligatorios para las notas
- ✅ Validación en frontend antes del envío
- ✅ Validación en backend en thunks
- ✅ Previene la creación de notas vacías

### Experiencia de Usuario

- ✅ Mensajes de error en español para mejor UX
- ✅ Alertas claras y amigables
- ✅ Retroalimentación de validación de entrada

## 🎯 Scripts

\`\`\`bash

# Desarrollo

npm run dev # Iniciar servidor de desarrollo

# Compilación

npm run build # Crear compilación de producción
npm run preview # Vista previa de compilación de producción

# Linting

npm run lint # Ejecutar ESLint
\`\`\`

## 👨‍💻 Autor y Créditos

**Estudiante**: Jefferson Aguilar

**Instructor del Curso**: [Fernando Herrera](https://fernando-herrera.com/)

- 🎓 Curso: React de Cero a Experto (Hooks y MERN)
- 🔗 [DevTalles](https://cursos.devtalles.com/)

## 📄 Licencia

Los ejercicios originales son propiedad intelectual de Fernando Herrera y DevTalles. Este repositorio contiene mi implementación personal de esos ejercicios con fines educativos.

## 🙏 Agradecimientos

Quiero expresar mi gratitud a **Fernando Herrera** por:

- 📖 Crear contenido educativo de alta calidad
- 🎯 Explicar conceptos complejos de manera clara
- 💡 Compartir mejores prácticas de la industria
- 🚀 Motivar a seguir aprendiendo y mejorando

---

⭐ ¡Si este proyecto te ayudó a aprender React, Redux o Firebase, considera darle una estrella en GitHub!

**Hecho con ❤️ para aprender**
