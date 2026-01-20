import {
  DeleteOutline,
  SaveOutlined,
  UploadOutlined,
} from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { useForm } from "../../hooks/useForm";
import {
  setActiveNote,
  startDeletingNote,
  startSavedNote,
  startUploadingFiles,
} from "../../store/journal";
import { ImageGallery } from "../components";

export const NoteView = () => {
  const dispatch = useDispatch();
  const {
    active: note,
    messageSaved,
    isSaving,
  } = useSelector((state) => state.journal);
  const { body, title, date, onInputChange, formState } = useForm(note);
  const dateString = useMemo(() => {
    const newDate = new Date(date);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return newDate.toLocaleDateString("es-ES", options);
  }, [date]);
  const fileInputRef = useRef();
  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);
  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire("Nota actualizada", messageSaved, "success");
    }
  }, [messageSaved]);

  const onSaveNote = () => {
    // Validar que la nota tenga título y contenido
    if (!title.trim() || title.trim().length === 0) {
      Swal.fire({
        title: "Error",
        text: "El título es obligatorio",
        icon: "error",
      });
      return;
    }

    if (!body.trim() || body.trim().length === 0) {
      Swal.fire({
        title: "Error",
        text: "El contenido es obligatorio",
        icon: "error",
      });
      return;
    }

    dispatch(startSavedNote());
  };
  const onFileInputChange = ({ target }) => {
    if (target.files === 0) return;
    dispatch(startUploadingFiles(target.files));
  };
  const onDelete = () => {
    dispatch(startDeletingNote());
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      sx={{ mb: 2, ml: 3, mr: 3 }}
      alignItems="center"
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Grid item>
        <Typography fontWeight="light" fontSize={32} color="text.secondary">
          {dateString}
        </Typography>
      </Grid>
      <Grid item>
        <input
          type="file"
          multiple
          onChange={onFileInputChange}
          ref={fileInputRef}
          style={{ display: "none" }}
        />
        <IconButton
          color="primary"
          disabled={isSaving}
          onClick={() => {
            fileInputRef.current.click();
          }}
          sx={{
            mr: 1,
            "&:hover": { backgroundColor: "primary.light", color: "white" },
          }}
        >
          <UploadOutlined />
        </IconButton>
        <Button
          color="primary"
          sx={{
            padding: 2,
            fontWeight: 600,
            boxShadow: 2,
            "&:hover": { boxShadow: 4 },
          }}
          onClick={onSaveNote}
          disabled={isSaving}
          variant="contained"
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingresa un título"
          label="Título"
          sx={{
            border: "none",
            mb: 2,
            "& .MuiFilledInput-root": {
              fontSize: "1.5rem",
              fontWeight: 500,
            },
          }}
          name="title"
          value={title}
          onChange={onInputChange}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Qué sucedió hoy?"
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
          sx={{
            "& .MuiFilledInput-root": {
              fontSize: "1.1rem",
            },
          }}
        />
      </Grid>
      <Grid container justifyContent="space-between" alignItems="center">
        <Button
          onClick={onDelete}
          sx={{
            mt: 3,
            fontWeight: 600,
            "&:hover": { backgroundColor: "error.light", color: "white" },
          }}
          color="error"
          variant="outlined"
        >
          <DeleteOutline sx={{ mr: 1 }} />
          Eliminar nota
        </Button>
      </Grid>
      <ImageGallery images={note.imageUrls} />
    </Grid>
  );
};
