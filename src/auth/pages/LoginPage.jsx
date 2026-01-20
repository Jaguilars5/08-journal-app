import { Google } from "@mui/icons-material";
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks";
import {
  starGoogleSingIn,
  startLoginWithEmailPassword,
} from "../../store/auth";
import { AuthLayout } from "../layout/AuthLayout";
const formData = {
  email: "",
  password: "",
};
export const LoginPage = () => {
  const { status, errorMessage } = useSelector((sate) => sate.auth);
  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm(formData);
  const isAuthenticating = useMemo(() => status === "checking", [status]);
  const onSubmit = (event) => {
    event.preventDefault();
    //Todo despachar la funcion correcta
    dispatch(startLoginWithEmailPassword({ email, password }));
  };
  const onGoogleSingIn = () => {
    dispatch(starGoogleSingIn());
  };
  return (
    <AuthLayout title="Login">
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo electrónico"
              type="email"
              placeholder="correo@ejemplo.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            ></TextField>
          </Grid>
          <Grid
            item
            xs={12}
            display={errorMessage ? "" : "none"}
            sx={{ mt: 2 }}
          >
            <Alert severity="error">{errorMessage}</Alert>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  py: 1.5,
                  fontWeight: 600,
                  boxShadow: 2,
                  "&:hover": { boxShadow: 4 },
                }}
              >
                Iniciar sesión
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                onClick={onGoogleSingIn}
                variant="outlined"
                fullWidth
                sx={{
                  py: 1.5,
                  fontWeight: 600,
                  borderWidth: 2,
                  "&:hover": { borderWidth: 2 },
                }}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end" sx={{ mt: 2 }}>
            <Typography sx={{ mr: 1 }}>¿No tienes cuenta?</Typography>
            <Link
              component={RouterLink}
              color="primary"
              to="/auth/register"
              sx={{ fontWeight: 600 }}
            >
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
