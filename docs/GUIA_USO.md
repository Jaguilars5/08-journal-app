# 📘 Guía de Uso - Journal App

> 🎓 **Proyecto Educativo**  
> Este proyecto fue desarrollado como parte del curso de React de **Fernando Herrera** - [DevTalles](https://cursos.devtalles.com/)

## 🚀 Inicio Rápido

### 1. Requisitos Previos

- Node.js (versión 16 o superior)
- npm o yarn
- Cuenta de Firebase (opcional para desarrollo local)
- Cuenta de Cloudinary (opcional para almacenamiento de imágenes)

### 2. Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Jaguilars5/08-journal-app.git

# Entrar al directorio
cd 08-journal-app

# Instalar dependencias
npm install
```

### 3. Configuración de Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto basándote en `.env.example`:

```bash
cp .env.example .env
```

Completa las variables con tus credenciales de Firebase:

```env
VITE_FIREBASE_API_KEY=tu-api-key
VITE_FIREBASE_AUTH_DOMAIN=tu-proyecto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=tu-proyecto-id
VITE_FIREBASE_STORAGE_BUCKET=tu-proyecto.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123
```

### 4. Ejecutar la Aplicación

```bash
npm run dev
```

La aplicación se abrirá en `http://localhost:5173`

---

## 🎯 Navegación y Funcionalidades

### Página de Login/Registro

Al acceder a la aplicación, encontrarás dos opciones:

- **Iniciar Sesión**: Ingresa con email y contraseña
- **Crear Cuenta**: Registra un nuevo usuario con nombre, email y contraseña
- **Google Authentication**: Acceso rápido con tu cuenta de Google

### Panel Principal (Journal)

Una vez autenticado, accederás al panel principal con:

- **Barra de Navegación Superior**: Logo, título y botón de cerrar sesión
- **Barra Lateral Izquierda**: Lista de todas tus notas guardadas
- **Área de Edición Central**: Editor de la nota seleccionada o vista vacía
- **Botón Flotante (+)**: Crear una nueva nota

### Gestión de Notas

#### Crear una Nueva Nota

1. Haz clic en el botón flotante **+** en la esquina inferior derecha
2. Se creará automáticamente una nueva nota con la fecha actual
3. Agrega un título y contenido
4. Haz clic en **💾 Guardar** para almacenar los cambios

#### Editar una Nota Existente

1. Selecciona la nota desde la barra lateral
2. Edita el título y/o contenido
3. **Guardado automático**: Los cambios se guardan al hacer clic en guardar
4. **Validación**: No puedes guardar notas sin título o contenido

#### Subir Imágenes

1. Con una nota seleccionada, haz clic en **📷 Subir imagen**
2. Selecciona una o varias imágenes desde tu dispositivo
3. Las imágenes se subirán a Cloudinary automáticamente
4. Se mostrarán en una galería debajo del editor

#### Eliminar una Nota

1. Selecciona la nota que deseas eliminar
2. Haz clic en el botón **🗑️ Borrar**
3. Confirma la acción en el diálogo
4. La nota se eliminará permanentemente de Firebase

---

## 🎨 Características Principales

### Autenticación Segura

- ✅ Registro con email y contraseña
- ✅ Validación de formularios
- ✅ Login con Google (OAuth)
- ✅ Mensajes de error en español
- ✅ Protección de rutas
- ✅ Sesión persistente

### Editor de Notas

- ✅ Título y contenido personalizable
- ✅ Fecha automática formateada en español
- ✅ Validación de campos requeridos
- ✅ Mensajes de confirmación con SweetAlert2

### Gestión de Imágenes

- ✅ Subida de múltiples imágenes
- ✅ Almacenamiento en Cloudinary
- ✅ Galería responsive con ImageList de Material-UI
- ✅ Vista previa de imágenes

### Diseño Responsive

- ✅ Adaptable a móviles, tablets y desktop
- ✅ Drawer colapsable en dispositivos pequeños
- ✅ Tema morado personalizado
- ✅ Animaciones suaves

---

## 📚 Estructura de la Aplicación

### Rutas Principales

| Ruta             | Componente      | Descripción                    | Autenticación |
| ---------------- | --------------- | ------------------------------ | ------------- |
| `/auth/login`    | LoginPage       | Página de inicio de sesión     | No requerida  |
| `/auth/register` | RegisterPage    | Página de registro             | No requerida  |
| `/`              | JournalPage     | Panel principal de notas       | Requerida     |
| `*`              | CheckingAuth    | Verificación de autenticación  | -             |

### Componentes Principales

#### Auth

- **LoginPage**: Formulario de inicio de sesión con email/password y Google
- **RegisterPage**: Formulario de registro con validación
- **AuthLayout**: Layout compartido para páginas de autenticación

#### Journal

- **JournalPage**: Contenedor principal con drawer y área de edición
- **NoteView**: Editor de nota con título, fecha, contenido e imágenes
- **NothingSelectedView**: Vista cuando no hay nota seleccionada
- **NavBar**: Barra de navegación superior
- **SideBar**: Barra lateral con lista de notas
- **SideBarItem**: Item individual de nota en la lista
- **ImageGallery**: Galería de imágenes con Material-UI ImageList

---

## 🔧 Hooks Personalizados

### `useForm(initialForm)`

Hook para manejar formularios con validación.

**Uso:**
```javascript
const { formState, onInputChange, onResetForm } = useForm({
  email: '',
  password: ''
});
```

**Retorna:**
- `formState`: Objeto con los valores del formulario
- `onInputChange`: Función para actualizar campos
- `onResetForm`: Función para resetear el formulario

### `useCheckAuth()`

Hook para verificar el estado de autenticación al cargar la app.

**Uso:**
```javascript
const status = useCheckAuth();
```

**Retorna:**
- `'checking'`: Verificando autenticación
- `'authenticated'`: Usuario autenticado
- `'not-authenticated'`: Usuario no autenticado

---

## 🔐 Seguridad Implementada

### Variables de Entorno

- ✅ Credenciales de Firebase en archivo `.env`
- ✅ `.env` incluido en `.gitignore`
- ✅ `.env.example` como plantilla sin datos sensibles

### Protección de Rutas

- ✅ Verificación de autenticación en `AppRouter`
- ✅ Redirección automática según estado del usuario
- ✅ Comparación estricta (`===`) para estados

### Validación de Datos

- ✅ Validación en frontend (título y contenido requeridos)
- ✅ Validación en backend (thunks de Redux)
- ✅ Mensajes de error descriptivos
- ✅ Prevención de notas vacías duplicadas

---

## 💡 Tips de Uso

1. **Guarda Frecuentemente**: Aunque hay validación, guarda tus cambios regularmente
2. **Títulos Descriptivos**: Usa títulos claros para encontrar tus notas fácilmente
3. **Organización**: Las notas más recientes aparecen primero en la barra lateral
4. **Imágenes**: Puedes subir múltiples imágenes a la vez
5. **Sesión Persistente**: No necesitas iniciar sesión cada vez que vuelves
6. **Logout Seguro**: Siempre cierra sesión en dispositivos compartidos

---

## 🐛 Solución de Problemas

### No puedo iniciar sesión

- Verifica que tu email y contraseña sean correctos
- Asegúrate de haber registrado la cuenta previamente
- Revisa la consola del navegador para ver mensajes de error

### Error al subir imágenes

- Verifica tu conexión a internet
- Confirma que las credenciales de Cloudinary estén correctas
- Asegúrate de que el archivo sea una imagen válida

### Las notas no se guardan

- Verifica que hayas completado título y contenido
- Revisa que las credenciales de Firebase sean correctas
- Comprueba tu conexión a internet

### Error "Firebase: Error (auth/...)"

- Los errores de autenticación se traducen automáticamente al español
- Revisa el mensaje específico en el cuadro de diálogo
- Consulta la documentación de Firebase para errores específicos

---

## 📖 Recursos Adicionales

- [Documentación de React](https://react.dev)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [Firestore Database](https://firebase.google.com/docs/firestore)
- [Material-UI](https://mui.com)
- [React Router](https://reactrouter.com)

---

## 📧 Soporte

Si encuentras problemas o tienes preguntas:

- Revisa la [documentación principal](../README.md)
- Consulta el [código fuente](https://github.com/Jaguilars5/08-journal-app)
- Contacta al desarrollador: [@Jaguilars5](https://github.com/Jaguilars5)

---

**Última actualización**: Enero 2026

⭐ ¡Disfruta organizando tus pensamientos con Journal App!
