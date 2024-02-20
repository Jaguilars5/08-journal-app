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
  const onCLickNote = () => {
    dispatch(setActiveNote({ title, body, id, date, imageUrls }));
  };
  const newTitle = useMemo(() => {
    return title.length > 10
      ? title.substring(0, 10) + "..."
      : title
  }, [title]);
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onCLickNote}>
        <ListItemIcon>
          <TurnedInNot />
          <Grid container>
            <ListItemText primary={newTitle} />
            <ListItemText secondary={body} />
          </Grid>
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
  );
};
