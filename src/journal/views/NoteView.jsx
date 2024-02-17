import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, Typography, TextField } from "@mui/material";
import { ImageGallery } from "../components";

export const NoteView = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      sx={{ mb: 1 }}
      alignItems="center"
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Grid item>
        <Typography fontWeight="light" fontSize={39}>
          28,octubre,2004
        </Typography>
      </Grid>
      <Grid item>
        <Button color="primary" sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un titulo"
          label="Titulo"
          sx={{ border: "none", mb: 1 }}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="Que sucedio en el dia hoy?"
          minRows={5}
        />
      </Grid>
      <ImageGallery />
    </Grid>
  );
};
