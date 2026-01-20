# 🗂️ Estructura del Proyecto

> 🎓 **Proyecto Educativo**  
> Ejercicios del curso de React de **Fernando Herrera** - [DevTalles](https://cursos.devtalles.com/)

## 📊 Árbol de Directorios Completo

```
08-journal-app/
│
├── 📄 README.md                      # Documentación principal (English)
├── 📄 .env.example                   # Plantilla de variables de entorno
├── 📄 .env                           # Variables de entorno (no versionado)
├── 📄 .gitignore                     # Archivos ignorados por Git
│
├── 📦 package.json                   # Dependencias y scripts
├── 📦 vite.config.js                 # Configuración de Vite
│
├── 📄 index.html                     # HTML principal
│
├── 📁 docs/                          # Documentación adicional
│   ├── README_ES.md                  # Documentación en español
│   ├── GUIA_USO.md                   # Guía de uso detallada (ES)
│   ├── USER_GUIDE.md                 # Guía de uso (EN)
│   ├── ESTRUCTURA.md                 # Este archivo (ES)
│   └── PROJECT_STRUCTURE.md          # Estructura del proyecto (EN)
│
└── 📁 src/                           # Código fuente
    │
    ├── 📄 main.jsx                   # ⭐ Punto de entrada
    ├── 📄 JournalApp.jsx             # Componente raíz de la app
    ├── 📄 styles.css                 # Estilos globales
    │
    ├── 📁 auth/                      # 🔐 Módulo de autenticación
    │   ├── layout/
    │   │   └── AuthLayout.jsx        # Layout para login/registro
    │   │
    │   ├── pages/
    │   │   ├── index.js
    │   │   ├── LoginPage.jsx         # Página de inicio de sesión
    │   │   └── RegisterPage.jsx      # Página de registro
    │   │
    │   └── routes/
    │       └── AuthRoutes.jsx        # Rutas de autenticación
    │
    ├── 📁 firebase/                  # 🔥 Configuración de Firebase
    │   ├── confing.js                # Config de Firebase con env vars
    │   └── providers.js              # Proveedores de autenticación
    │
    ├── 📁 helpers/                   # 🛠️ Funciones auxiliares
    │   ├── index.js
    │   ├── fileUpload.js             # Subida de archivos a Cloudinary
    │   ├── loadNotes.js              # Carga de notas desde Firestore
    │   └── firebaseErrors.js         # Traducción de errores Firebase
    │
    ├── 📁 hooks/                     # 🎣 Custom Hooks
    │   ├── index.js
    │   ├── useForm.js                # Hook para formularios
    │   └── useCheckAuth.js           # Hook para verificar autenticación
    │
    ├── 📁 journal/                   # 📔 Módulo del diario
    │   │
    │   ├── components/
    │   │   ├── index.js
    │   │   ├── NavBar.jsx            # Barra de navegación superior
    │   │   ├── SideBar.jsx           # Barra lateral con notas
    │   │   ├── SideBarItem.jsx       # Item de nota en la barra
    │   │   └── ImageGallery.jsx      # Galería de imágenes
    │   │
    │   ├── layout/
    │   │   └── JournalLayout.jsx     # Layout principal del diario
    │   │
    │   ├── pages/
    │   │   └── JournalPage.jsx       # Página principal del diario
    │   │
    │   ├── routes/
    │   │   └── JournalRoutes.jsx     # Rutas del diario
    │   │
    │   └── views/
    │       ├── index.js
    │       ├── NoteView.jsx          # Vista de edición de nota
    │       └── NothingSelectedView.jsx # Vista vacía
    │
    ├── 📁 router/                    # 🛤️ Configuración de rutas
    │   └── AppRouter.jsx             # ⭐ Router principal con protección
    │
    ├── 📁 store/                     # 📦 Redux Store
    │   │
    │   ├── index.js                  # Exportaciones del store
    │   ├── store.js                  # Configuración del store
    │   │
    │   ├── auth/
    │   │   ├── index.js
    │   │   ├── authSlice.js          # Slice de autenticación
    │   │   └── thunks.js             # Thunks de auth (async)
    │   │
    │   └── journal/
    │       ├── index.js
    │       ├── journalSlice.js       # Slice del diario
    │       └── thunks.js             # Thunks del diario (async)
    │
    ├── 📁 theme/                     # 🎨 Configuración del tema
    │   ├── index.js
    │   ├── AppTheme.jsx              # Provider del tema
    │   └── purpleTheme.js            # Tema morado personalizado
    │
    └── 📁 ui/                        # 🖼️ Componentes de UI
        ├── index.js
        └── components/
            └── CheckingAuth.jsx      # Loading de autenticación
```

---

## 🎯 Archivos Clave

### Punto de Entrada

| Archivo          | Descripción                                 |
| ---------------- | ------------------------------------------- |
| `main.jsx`       | Punto de entrada, configura Redux y Router  |
| `JournalApp.jsx` | Componente raíz, configura el tema          |
| `AppRouter.jsx`  | Router principal con protección de rutas    |

### Configuración

| Archivo           | Descripción                          |
| ----------------- | ------------------------------------ |
| `.env`            | Variables de entorno (API keys)      |
| `.env.example`    | Plantilla de variables               |
| `vite.config.js`  | Configuración de Vite                |
| `package.json`    | Dependencias y scripts               |

### Firebase

| Archivo            | Descripción                         |
| ------------------ | ----------------------------------- |
| `confing.js`       | Configuración de Firebase           |
| `providers.js`     | Autenticación (Email/Google)        |

### Redux Store

| Archivo             | Descripción                       |
| ------------------- | --------------------------------- |
| `store.js`          | Configuración del store           |
| `authSlice.js`      | Estado de autenticación           |
| `journalSlice.js`   | Estado del diario                 |
| `auth/thunks.js`    | Acciones async de autenticación   |
| `journal/thunks.js` | Acciones async del diario         |

### Helpers

| Archivo              | Descripción                       |
| -------------------- | --------------------------------- |
| `fileUpload.js`      | Subida de imágenes a Cloudinary   |
| `loadNotes.js`       | Carga de notas desde Firestore    |
| `firebaseErrors.js`  | Traducción de errores             |

### Custom Hooks

| Archivo            | Descripción                        |
| ------------------ | ---------------------------------- |
| `useForm.js`       | Manejo de formularios              |
| `useCheckAuth.js`  | Verificación de autenticación      |

---

## 📋 Flujo de la Aplicación

### Inicio de la Aplicación

```
main.jsx
  ↓
  Configura Redux Provider
  ↓
  Configura BrowserRouter
  ↓
JournalApp.jsx
  ↓
  Configura AppTheme (Material-UI)
  ↓
AppRouter.jsx
  ↓
  Verifica autenticación (useCheckAuth)
  ↓
  ┌─────────────────┬─────────────────┐
  ↓                 ↓                 ↓
CheckingAuth   AuthRoutes       JournalRoutes
(Loading)     (Login/Register)  (Diario Principal)
```

### Flujo de Autenticación

```
Usuario accede
    ↓
AppRouter verifica estado
    ↓
    ├─► status === 'checking' ──► CheckingAuth (Loading)
    │
    ├─► status === 'not-authenticated' ──► AuthRoutes
    │                                         ├─► /auth/login
    │                                         └─► /auth/register
    │
    └─► status === 'authenticated' ──► JournalRoutes
                                          └─► / (JournalPage)
```

### Flujo de Notas

```
Usuario en JournalPage
    ↓
    ├─► Click en "+" ──► startNewNote()
    │                      ↓
    │                    Crea nota en Firestore
    │                      ↓
    │                    Actualiza Redux
    │                      ↓
    │                    Selecciona nota (setActiveNote)
    │
    ├─► Selecciona nota ──► setActiveNote()
    │                          ↓
    │                        NoteView se muestra
    │                          ↓
    │                        Edita título/contenido
    │                          ↓
    │                        Click en "Guardar"
    │                          ↓
    │                        startSaveNote()
    │                          ↓
    │                        Valida campos
    │                          ↓
    │                        Actualiza Firestore
    │
    └─► Click en "Borrar" ──► startDeletingNote()
                                 ↓
                               Confirmación SweetAlert2
                                 ↓
                               Elimina de Firestore
                                 ↓
                               Actualiza Redux
```

---

## 🏗️ Patrones de Arquitectura

### 1. Modular por Features

El código está organizado por funcionalidad:
- `auth/`: Todo relacionado con autenticación
- `journal/`: Todo relacionado con el diario
- `store/`: Estado global separado por módulos

### 2. Redux Toolkit con Slices

Cada módulo tiene su propio slice:
- `authSlice`: Login, logout, actualización de usuario
- `journalSlice`: CRUD de notas, selección de nota activa

### 3. Thunks para Lógica Async

Las operaciones asíncronas están en thunks:
- Llamadas a Firebase
- Validaciones complejas
- Manejo de errores

### 4. Custom Hooks para Lógica Reutilizable

- `useForm`: Manejo genérico de formularios
- `useCheckAuth`: Verificación de sesión persistente

### 5. Componentes Presentacionales y Contenedores

- **Presentacionales**: Componentes de UI pura
- **Contenedores**: Pages que conectan con Redux

---

## 🎨 Convenciones de Código

### Nomenclatura

- **Componentes**: PascalCase (`LoginPage.jsx`)
- **Hooks**: camelCase con prefijo 'use' (`useForm.js`)
- **Funciones**: camelCase (`startNewNote`)
- **Constantes**: camelCase o UPPER_SNAKE_CASE
- **CSS**: kebab-case (clases en Material-UI)

### Estructura de Componentes

```jsx
// 1. Imports
import { useState } from 'react';
import { useDispatch } from 'react-redux';

// 2. Componente
export const MyComponent = () => {
  // 3. Hooks de Redux
  const dispatch = useDispatch();
  
  // 4. Hooks de estado
  const [state, setState] = useState();
  
  // 5. Custom Hooks
  const { formState, onInputChange } = useForm();
  
  // 6. Funciones manejadoras
  const handleSubmit = () => {};
  
  // 7. Return/JSX
  return (
    <div>
      {/* contenido */}
    </div>
  );
};
```

---

## 🔄 Flujo de Datos Redux

### Estado Global

```javascript
{
  auth: {
    status: 'checking' | 'not-authenticated' | 'authenticated',
    uid: string | null,
    email: string | null,
    displayName: string | null,
    photoURL: string | null,
    errorMessage: string | null
  },
  journal: {
    isSaving: boolean,
    messageSaved: string,
    notes: Array<Note>,
    active: Note | null
  }
}
```

### Acciones Principales

#### Auth

- `login`: Usuario autenticado
- `logout`: Cerrar sesión y limpiar estado
- `checkingCredentials`: Verificando credenciales

#### Journal

- `addNewEmptyNote`: Crear nota vacía
- `setActiveNote`: Seleccionar nota
- `setNotes`: Cargar todas las notas
- `setSaving`: Estado de guardado
- `updateNote`: Actualizar nota
- `deleteNoteById`: Eliminar nota

---

## 📊 Dependencias por Módulo

| Módulo    | Dependencias Principales               |
| --------- | -------------------------------------- |
| Auth      | Firebase Auth, Redux, React Router     |
| Journal   | Firebase Firestore, Redux, Material-UI |
| UI        | Material-UI, SweetAlert2               |
| Store     | Redux Toolkit                          |
| Theme     | Material-UI                            |
| Router    | React Router DOM                       |

---

## 🚀 Puntos de Entrada

### Desarrollo

- **Archivo**: `main.jsx`
- **Puerto**: 5173 (por defecto)
- **Hot Reload**: ✅ Habilitado
- **Comando**: `npm run dev`

### Producción

- **Build**: `npm run build`
- **Output**: `dist/`
- **Preview**: `npm run preview`

---

## 🔐 Seguridad

### Variables de Entorno

Todas las credenciales sensibles están en `.env`:
- Firebase API Key
- Firebase Auth Domain
- Firebase Project ID
- Etc.

### Validación Multinivel

1. **Frontend**: Validación en formularios
2. **Redux Thunks**: Validación antes de Firebase
3. **Firebase**: Reglas de seguridad en Firestore

### Protección de Rutas

- Verificación en `AppRouter`
- Redirección automática
- Estado persistente con `onAuthStateChanged`

---

**Última actualización**: Enero 2026
