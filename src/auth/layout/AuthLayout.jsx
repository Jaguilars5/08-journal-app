import { Grid, Typography } from "@mui/material";

export const AuthLayout = ({ children, title = "" }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: 4,
      }}
    >
      <Grid
        item
        xs={3}
        sx={{
          width: { sm: 450 },
          backgroundColor: "white",
          padding: 4,
          borderRadius: 3,
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 3,
            fontWeight: 600,
            textAlign: "center",
            color: "primary.main",
          }}
        >
          {title}
        </Typography>
        {children}
      </Grid>
    </Grid>
  );
};
