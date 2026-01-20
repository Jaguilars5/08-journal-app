import { StarOutline } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "calc(100vh - 110px)",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        borderRadius: 3,
        padding: 4,
      }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <StarOutline sx={{ fontSize: 120, color: "white", mb: 2 }} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" color="white" fontWeight={300}>
          Selecciona o crea una entrada
        </Typography>
      </Grid>
    </Grid>
  );
};
