import { AuthLayout } from "../layout/AuthLayout";
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { startCreatingUserWithEmailPassword } from "../../store/auth";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks";
import { useMemo, useState } from "react";
const formData = {
  email: "jegor.28.a@gmail.com",
  password: "Emelec_28",
  displayName: "Jefferson Aguilar ",
};
const formValidations = {
  email: [(value) => value.includes("@"), "El correo debe de tener una @"],
  password: [
    (value) => value.length >= 8,
    "La contrasena debe de tener mas de 6 letras",
  ],
  displayName: [(value) => value.length >= 1, "El nombre es obligatorio"],
};
export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [formSubmitted, setformSubmitted] = useState(false);
  const { status, errorMessage } = useSelector((state) => state.auth);
  const isCheckingAuthentication = useMemo(
    () => status === "checking",
    [status]
  );
  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    displayNameValid,
    emailValid,
    passwordValid,
    isFormValid,
  } = useForm(formData, formValidations);
  const onSubmit = (event) => {
    event.preventDefault();
    setformSubmitted(true);
    if (!isFormValid) return;
    dispatch(startCreatingUserWithEmailPassword(formState));
  };
  return (
    <AuthLayout title="Login">
      <h1>Formulario: {isFormValid ? "Valido" : "Invalido"}</h1>
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre Completo"
              type="text"
              placeholder="Nombre Completo"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="correo"
              type="email"
              placeholder="example@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contrasena"
              type="password"
              placeholder="contrasena"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            ></TextField>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid
              item
              xs={12}
              display={errorMessage ? "" : "none"}
              sx={{ mt: 1 }}
            >
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
            <Grid item xs={12}>
              <Button
                disabled={isCheckingAuthentication}
                type="submit"
                variant="contained"
                fullWidth
              >
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
