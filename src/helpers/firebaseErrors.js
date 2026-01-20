/**
 * Traduce los códigos de error de Firebase a mensajes amigables en español
 * @param {string} errorCode - Código de error de Firebase (ej: 'auth/email-already-in-use')
 * @returns {string} Mensaje de error en español
 */
export const getFirebaseErrorMessage = (errorCode) => {
  const errorMessages = {
    // Errores de autenticación
    "auth/email-already-in-use": "Este correo electrónico ya está registrado",
    "auth/invalid-email": "El correo electrónico no es válido",
    "auth/operation-not-allowed": "Operación no permitida",
    "auth/weak-password":
      "La contraseña es muy débil. Debe tener al menos 6 caracteres",
    "auth/user-disabled": "Esta cuenta ha sido deshabilitada",
    "auth/user-not-found": "No existe una cuenta con este correo electrónico",
    "auth/wrong-password": "Contraseña incorrecta",
    "auth/invalid-credential":
      "Las credenciales proporcionadas son incorrectas",
    "auth/too-many-requests": "Demasiados intentos fallidos. Intenta más tarde",
    "auth/network-request-failed":
      "Error de conexión. Verifica tu conexión a internet",
    "auth/popup-closed-by-user": "La ventana de inicio de sesión fue cerrada",
    "auth/cancelled-popup-request": "Solicitud cancelada",
    "auth/requires-recent-login":
      "Esta operación requiere que inicies sesión nuevamente",
    "auth/invalid-login-credentials": "Correo o contraseña incorrectos",
  };

  // Extraer el código de error del mensaje completo
  const match = errorCode?.match(/auth\/[\w-]+/);
  const code = match ? match[0] : errorCode;

  return (
    errorMessages[code] || "Ha ocurrido un error. Por favor, intenta de nuevo"
  );
};
