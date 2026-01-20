import { TurnedInNot } from "@mui/icons-material";
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";
export const SideBarItem = ({ title, body, id, date, imageUrls = [] }) => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.journal);
  const isActive = active?.id === id;

  const onCLickNote = () => {
    dispatch(setActiveNote({ title, body, id, date, imageUrls }));
  };

  const newTitle = useMemo(() => {
    return title.length > 17 ? title.substring(0, 17) + "..." : title;
  }, [title]);

  const newBody = useMemo(() => {
    return body.length > 30 ? body.substring(0, 30) + "..." : body;
  }, [body]);

  return (
    <ListItem disablePadding>
      <ListItemButton
        onClick={onCLickNote}
        sx={{
          backgroundColor: isActive ? "action.selected" : "transparent",
          "&:hover": {
            backgroundColor: isActive ? "action.selected" : "action.hover",
          },
          borderRadius: 1,
          mb: 0.5,
          mx: 1,
        }}
      >
        <ListItemIcon>
          <TurnedInNot color={isActive ? "primary" : "inherit"} />
        </ListItemIcon>
        <Grid container>
          <ListItemText
            primary={newTitle}
            secondary={newBody}
            primaryTypographyProps={{
              fontWeight: isActive ? 600 : 400,
              fontSize: "0.95rem",
            }}
            secondaryTypographyProps={{
              fontSize: "0.85rem",
              sx: { mt: 0.5 },
            }}
          />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
