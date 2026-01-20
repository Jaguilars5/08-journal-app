# 🗂️ Project Structure

> 🎓 **Educational Project**  
> Course exercises by **Fernando Herrera** - [DevTalles](https://cursos.devtalles.com/)

[📖 Ver en español](./ESTRUCTURA.md)

## 📊 Complete Directory Tree

```
08-journal-app/
│
├── 📄 README.md                      # Main documentation (English)
├── 📄 .env.example                   # Environment variables template
├── 📄 .env                           # Environment variables (not versioned)
├── 📄 .gitignore                     # Git ignored files
│
├── 📦 package.json                   # Dependencies and scripts
├── 📦 vite.config.js                 # Vite configuration
│
├── 📄 index.html                     # Main HTML
│
├── 📁 docs/                          # Additional documentation
│   ├── README_ES.md                  # Spanish documentation
│   ├── GUIA_USO.md                   # Usage guide (ES)
│   ├── USER_GUIDE.md                 # Usage guide (EN)
│   ├── ESTRUCTURA.md                 # Project structure (ES)
│   └── PROJECT_STRUCTURE.md          # This file (EN)
│
└── 📁 src/                           # Source code
    │
    ├── 📄 main.jsx                   # ⭐ Entry point
    ├── 📄 JournalApp.jsx             # App root component
    ├── 📄 styles.css                 # Global styles
    │
    ├── 📁 auth/                      # 🔐 Authentication module
    │   ├── layout/
    │   │   └── AuthLayout.jsx        # Layout for login/register
    │   │
    │   ├── pages/
    │   │   ├── index.js
    │   │   ├── LoginPage.jsx         # Login page
    │   │   └── RegisterPage.jsx      # Registration page
    │   │
    │   └── routes/
    │       └── AuthRoutes.jsx        # Authentication routes
    │
    ├── 📁 firebase/                  # 🔥 Firebase configuration
    │   ├── confing.js                # Firebase config with env vars
    │   └── providers.js              # Authentication providers
    │
    ├── 📁 helpers/                   # 🛠️ Helper functions
    │   ├── index.js
    │   ├── fileUpload.js             # File upload to Cloudinary
    │   ├── loadNotes.js              # Load notes from Firestore
    │   └── firebaseErrors.js         # Firebase errors translation
    │
    ├── 📁 hooks/                     # 🎣 Custom Hooks
    │   ├── index.js
    │   ├── useForm.js                # Form handling hook
    │   └── useCheckAuth.js           # Authentication check hook
    │
    ├── 📁 journal/                   # 📔 Journal module
    │   │
    │   ├── components/
    │   │   ├── index.js
    │   │   ├── NavBar.jsx            # Top navigation bar
    │   │   ├── SideBar.jsx           # Sidebar with notes list
    │   │   ├── SideBarItem.jsx       # Note item in sidebar
    │   │   └── ImageGallery.jsx      # Image gallery
    │   │
    │   ├── layout/
    │   │   └── JournalLayout.jsx     # Main journal layout
    │   │
    │   ├── pages/
    │   │   └── JournalPage.jsx       # Main journal page
    │   │
    │   ├── routes/
    │   │   └── JournalRoutes.jsx     # Journal routes
    │   │
    │   └── views/
    │       ├── index.js
    │       ├── NoteView.jsx          # Note editing view
    │       └── NothingSelectedView.jsx # Empty view
    │
    ├── 📁 router/                    # 🛤️ Routing configuration
    │   └── AppRouter.jsx             # ⭐ Main router with protection
    │
    ├── 📁 store/                     # 📦 Redux Store
    │   │
    │   ├── index.js                  # Store exports
    │   ├── store.js                  # Store configuration
    │   │
    │   ├── auth/
    │   │   ├── index.js
    │   │   ├── authSlice.js          # Authentication slice
    │   │   └── thunks.js             # Auth thunks (async)
    │   │
    │   └── journal/
    │       ├── index.js
    │       ├── journalSlice.js       # Journal slice
    │       └── thunks.js             # Journal thunks (async)
    │
    ├── 📁 theme/                     # 🎨 Theme configuration
    │   ├── index.js
    │   ├── AppTheme.jsx              # Theme provider
    │   └── purpleTheme.js            # Custom purple theme
    │
    └── 📁 ui/                        # 🖼️ UI components
        ├── index.js
        └── components/
            └── CheckingAuth.jsx      # Authentication loading
```

---

## 🎯 Key Files

### Entry Point

| File             | Description                              |
| ---------------- | ---------------------------------------- |
| `main.jsx`       | Entry point, configures Redux and Router |
| `JournalApp.jsx` | Root component, configures theme         |
| `AppRouter.jsx`  | Main router with route protection        |

### Configuration

| File              | Description                    |
| ----------------- | ------------------------------ |
| `.env`            | Environment variables (API keys) |
| `.env.example`    | Variables template             |
| `vite.config.js`  | Vite configuration             |
| `package.json`    | Dependencies and scripts       |

### Firebase

| File              | Description                      |
| ----------------- | -------------------------------- |
| `confing.js`      | Firebase configuration           |
| `providers.js`    | Authentication (Email/Google)    |

### Redux Store

| File                | Description                   |
| ------------------- | ----------------------------- |
| `store.js`          | Store configuration           |
| `authSlice.js`      | Authentication state          |
| `journalSlice.js`   | Journal state                 |
| `auth/thunks.js`    | Authentication async actions  |
| `journal/thunks.js` | Journal async actions         |

### Helpers

| File                 | Description                    |
| -------------------- | ------------------------------ |
| `fileUpload.js`      | Image upload to Cloudinary     |
| `loadNotes.js`       | Load notes from Firestore      |
| `firebaseErrors.js`  | Error translation              |

### Custom Hooks

| File               | Description                     |
| ------------------ | ------------------------------- |
| `useForm.js`       | Form handling                   |
| `useCheckAuth.js`  | Authentication verification     |

---

## 📋 Application Flow

### Application Startup

```
main.jsx
  ↓
  Configures Redux Provider
  ↓
  Configures BrowserRouter
  ↓
JournalApp.jsx
  ↓
  Configures AppTheme (Material-UI)
  ↓
AppRouter.jsx
  ↓
  Verifies authentication (useCheckAuth)
  ↓
  ┌─────────────────┬─────────────────┐
  ↓                 ↓                 ↓
CheckingAuth   AuthRoutes       JournalRoutes
(Loading)     (Login/Register)  (Main Journal)
```

### Authentication Flow

```
User accesses
    ↓
AppRouter checks status
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

### Notes Flow

```
User in JournalPage
    ↓
    ├─► Click "+" ──► startNewNote()
    │                   ↓
    │                 Creates note in Firestore
    │                   ↓
    │                 Updates Redux
    │                   ↓
    │                 Selects note (setActiveNote)
    │
    ├─► Selects note ──► setActiveNote()
    │                      ↓
    │                    NoteView displays
    │                      ↓
    │                    Edits title/content
    │                      ↓
    │                    Click "Save"
    │                      ↓
    │                    startSaveNote()
    │                      ↓
    │                    Validates fields
    │                      ↓
    │                    Updates Firestore
    │
    └─► Click "Delete" ──► startDeletingNote()
                             ↓
                           SweetAlert2 confirmation
                             ↓
                           Deletes from Firestore
                             ↓
                           Updates Redux
```

---

## 🏗️ Architecture Patterns

### 1. Modular by Features

Code is organized by functionality:
- `auth/`: Everything related to authentication
- `journal/`: Everything related to the journal
- `store/`: Global state separated by modules

### 2. Redux Toolkit with Slices

Each module has its own slice:
- `authSlice`: Login, logout, user updates
- `journalSlice`: Notes CRUD, active note selection

### 3. Thunks for Async Logic

Asynchronous operations are in thunks:
- Firebase calls
- Complex validations
- Error handling

### 4. Custom Hooks for Reusable Logic

- `useForm`: Generic form handling
- `useCheckAuth`: Persistent session verification

### 5. Presentational and Container Components

- **Presentational**: Pure UI components
- **Containers**: Pages that connect with Redux

---

## 🎨 Code Conventions

### Naming

- **Components**: PascalCase (`LoginPage.jsx`)
- **Hooks**: camelCase with 'use' prefix (`useForm.js`)
- **Functions**: camelCase (`startNewNote`)
- **Constants**: camelCase or UPPER_SNAKE_CASE
- **CSS**: kebab-case (Material-UI classes)

### Component Structure

```jsx
// 1. Imports
import { useState } from 'react';
import { useDispatch } from 'react-redux';

// 2. Component
export const MyComponent = () => {
  // 3. Redux hooks
  const dispatch = useDispatch();
  
  // 4. State hooks
  const [state, setState] = useState();
  
  // 5. Custom hooks
  const { formState, onInputChange } = useForm();
  
  // 6. Handler functions
  const handleSubmit = () => {};
  
  // 7. Return/JSX
  return (
    <div>
      {/* content */}
    </div>
  );
};
```

---

## 🔄 Redux Data Flow

### Global State

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

### Main Actions

#### Auth

- `login`: User authenticated
- `logout`: Close session and clear state
- `checkingCredentials`: Verifying credentials

#### Journal

- `addNewEmptyNote`: Create empty note
- `setActiveNote`: Select note
- `setNotes`: Load all notes
- `setSaving`: Saving state
- `updateNote`: Update note
- `deleteNoteById`: Delete note

---

## 📊 Dependencies by Module

| Module    | Main Dependencies                    |
| --------- | ------------------------------------ |
| Auth      | Firebase Auth, Redux, React Router   |
| Journal   | Firebase Firestore, Redux, Material-UI |
| UI        | Material-UI, SweetAlert2             |
| Store     | Redux Toolkit                        |
| Theme     | Material-UI                          |
| Router    | React Router DOM                     |

---

## 🚀 Entry Points

### Development

- **File**: `main.jsx`
- **Port**: 5173 (default)
- **Hot Reload**: ✅ Enabled
- **Command**: `npm run dev`

### Production

- **Build**: `npm run build`
- **Output**: `dist/`
- **Preview**: `npm run preview`

---

## 🔐 Security

### Environment Variables

All sensitive credentials are in `.env`:
- Firebase API Key
- Firebase Auth Domain
- Firebase Project ID
- Etc.

### Multi-level Validation

1. **Frontend**: Form validation
2. **Redux Thunks**: Validation before Firebase
3. **Firebase**: Firestore security rules

### Route Protection

- Verification in `AppRouter`
- Automatic redirection
- Persistent state with `onAuthStateChanged`

---

**Last updated**: January 2026
