import { ImageList, ImageListItem } from "@mui/material";

export const ImageGallery = ({ images }) => {
  return (
    <ImageList
      sx={{
        width: "100%",
        height: 500,
        mt: 3,
        borderRadius: 2,
        overflow: "hidden",
      }}
      cols={4}
      rowHeight={200}
    >
      {images.map((image) => (
        <ImageListItem
          key={image}
          sx={{
            "&:hover": {
              transform: "scale(1.02)",
              transition: "transform 0.2s",
              cursor: "pointer",
            },
          }}
        >
          <img
            srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${image}?w=164&h=164&fit=crop&auto=format`}
            alt={"Imagen de la nota"}
            loading="lazy"
            style={{ borderRadius: 4 }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
