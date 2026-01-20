# 📘 User Guide - Journal App

> 🎓 **Educational Project**  
> This project was developed as part of the React course by **Fernando Herrera** - [DevTalles](https://cursos.devtalles.com/)

## 🚀 Quick Start

### 1. Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- Firebase account (optional for local development)
- Cloudinary account (optional for image storage)

### 2. Installation

```bash
# Clone the repository
git clone https://github.com/Jaguilars5/08-journal-app.git

# Enter the directory
cd 08-journal-app

# Install dependencies
npm install
```

### 3. Environment Variables Setup

Create a `.env` file in the project root based on `.env.example`:

```bash
cp .env.example .env
```

Fill in the variables with your Firebase credentials:

```env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123
```

### 4. Run the Application

```bash
npm run dev
```

The application will open at `http://localhost:5173`

---

## 🎯 Navigation and Features

### Login/Register Page

When accessing the application, you'll find two options:

- **Sign In**: Enter with email and password
- **Create Account**: Register a new user with name, email, and password
- **Google Authentication**: Quick access with your Google account

### Main Panel (Journal)

Once authenticated, you'll access the main panel with:

- **Top Navigation Bar**: Logo, title, and logout button
- **Left Sidebar**: List of all your saved notes
- **Central Editing Area**: Editor for the selected note or empty view
- **Floating Button (+)**: Create a new note

### Note Management

#### Create a New Note

1. Click the floating **+** button in the bottom-right corner
2. A new note will be automatically created with the current date
3. Add a title and content
4. Click **💾 Save** to store the changes

#### Edit an Existing Note

1. Select the note from the sidebar
2. Edit the title and/or content
3. **Auto-save**: Changes are saved when you click save
4. **Validation**: You cannot save notes without title or content

#### Upload Images

1. With a note selected, click **📷 Upload image**
2. Select one or more images from your device
3. Images will be automatically uploaded to Cloudinary
4. They will be displayed in a gallery below the editor

#### Delete a Note

1. Select the note you want to delete
2. Click the **🗑️ Delete** button
3. Confirm the action in the dialog
4. The note will be permanently deleted from Firebase

---

## 🎨 Main Features

### Secure Authentication

- ✅ Registration with email and password
- ✅ Form validation
- ✅ Google login (OAuth)
- ✅ Error messages in Spanish
- ✅ Route protection
- ✅ Persistent session

### Note Editor

- ✅ Customizable title and content
- ✅ Auto-formatted date in Spanish
- ✅ Required field validation
- ✅ Confirmation messages with SweetAlert2

### Image Management

- ✅ Multiple image upload
- ✅ Storage in Cloudinary
- ✅ Responsive gallery with Material-UI ImageList
- ✅ Image preview

### Responsive Design

- ✅ Adaptable to mobile, tablets, and desktop
- ✅ Collapsible drawer on small devices
- ✅ Custom purple theme
- ✅ Smooth animations

---

## 📚 Application Structure

### Main Routes

| Route            | Component       | Description                    | Authentication |
| ---------------- | --------------- | ------------------------------ | -------------- |
| `/auth/login`    | LoginPage       | Login page                     | Not required   |
| `/auth/register` | RegisterPage    | Registration page              | Not required   |
| `/`              | JournalPage     | Main notes panel               | Required       |
| `*`              | CheckingAuth    | Authentication verification    | -              |

### Main Components

#### Auth

- **LoginPage**: Login form with email/password and Google
- **RegisterPage**: Registration form with validation
- **AuthLayout**: Shared layout for authentication pages

#### Journal

- **JournalPage**: Main container with drawer and editing area
- **NoteView**: Note editor with title, date, content, and images
- **NothingSelectedView**: View when no note is selected
- **NavBar**: Top navigation bar
- **SideBar**: Sidebar with note list
- **SideBarItem**: Individual note item in the list
- **ImageGallery**: Image gallery with Material-UI ImageList

---

## 🔧 Custom Hooks

### `useForm(initialForm)`

Hook to handle forms with validation.

**Usage:**
```javascript
const { formState, onInputChange, onResetForm } = useForm({
  email: '',
  password: ''
});
```

**Returns:**
- `formState`: Object with form values
- `onInputChange`: Function to update fields
- `onResetForm`: Function to reset the form

### `useCheckAuth()`

Hook to verify authentication status when loading the app.

**Usage:**
```javascript
const status = useCheckAuth();
```

**Returns:**
- `'checking'`: Verifying authentication
- `'authenticated'`: User authenticated
- `'not-authenticated'`: User not authenticated

---

## 🔐 Implemented Security

### Environment Variables

- ✅ Firebase credentials in `.env` file
- ✅ `.env` included in `.gitignore`
- ✅ `.env.example` as template without sensitive data

### Route Protection

- ✅ Authentication verification in `AppRouter`
- ✅ Automatic redirection based on user status
- ✅ Strict comparison (`===`) for states

### Data Validation

- ✅ Frontend validation (title and content required)
- ✅ Backend validation (Redux thunks)
- ✅ Descriptive error messages
- ✅ Prevention of duplicate empty notes

---

## 💡 Usage Tips

1. **Save Frequently**: Although there's validation, save your changes regularly
2. **Descriptive Titles**: Use clear titles to easily find your notes
3. **Organization**: Most recent notes appear first in the sidebar
4. **Images**: You can upload multiple images at once
5. **Persistent Session**: You don't need to log in every time you return
6. **Secure Logout**: Always log out on shared devices

---

## 🐛 Troubleshooting

### Cannot log in

- Verify that your email and password are correct
- Make sure you've registered the account previously
- Check the browser console for error messages

### Error uploading images

- Verify your internet connection
- Confirm that Cloudinary credentials are correct
- Ensure the file is a valid image

### Notes are not saving

- Verify that you've completed title and content
- Check that Firebase credentials are correct
- Verify your internet connection

### Error "Firebase: Error (auth/...)"

- Authentication errors are automatically translated to Spanish
- Review the specific message in the dialog box
- Consult Firebase documentation for specific errors

---

## 📖 Additional Resources

- [React Documentation](https://react.dev)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [Firestore Database](https://firebase.google.com/docs/firestore)
- [Material-UI](https://mui.com)
- [React Router](https://reactrouter.com)

---

## 📧 Support

If you encounter problems or have questions:

- Review the [main documentation](../README.md)
- Check the [source code](https://github.com/Jaguilars5/08-journal-app)
- Contact the developer: [@Jaguilars5](https://github.com/Jaguilars5)

---

**Last updated**: January 2026

⭐ Enjoy organizing your thoughts with Journal App!
