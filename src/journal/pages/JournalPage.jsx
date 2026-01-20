import { AddOutlined } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { startNewNote } from "../../store/journal/thunks";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView } from "../views";
import { NothingSelectedView } from "../views/NothingSelectedView";

export const JournalPage = () => {
  const dispatch = useDispatch();
  const { isSaving, active } = useSelector((state) => state.journal);
  const onCLickNewNote = () => {
    // Validar que no haya una nota activa vacía
    if (active && (!active.title.trim() || !active.body.trim())) {
      Swal.fire({
        title: "Atención",
        text: "Completa la nota actual antes de crear una nueva",
        icon: "warning",
      });
      return;
    }
    dispatch(startNewNote());
  };
  return (
    <>
      <JournalLayout>
        {active ? <NoteView /> : <NothingSelectedView />}

        <IconButton
          onClick={onCLickNewNote}
          disabled={isSaving}
          size="large"
          sx={{
            color: "white",
            backgroundColor: "error.main",
            ":hover": {
              backgroundColor: "error.dark",
              transform: "scale(1.1)",
              transition: "all 0.2s",
            },
            position: "fixed",
            right: 50,
            bottom: 50,
            boxShadow: 4,
            width: 65,
            height: 65,
          }}
        >
          <AddOutlined sx={{ fontSize: 35 }} />
        </IconButton>
      </JournalLayout>
    </>
  );
};
