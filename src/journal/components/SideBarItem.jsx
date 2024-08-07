import { TurnedInNot } from '@mui/icons-material';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../store/journal/journalSlice';

const SideBarItem = ({ title = '', body, id, date, imageUrls = [] }) => {


    const distpatch = useDispatch()

  const onClickNote = () => {
   distpatch(setActiveNote({ title, body, id, date, imageUrls }))
  };
  


    const newTitle = useMemo (() => {
        return title.length > 17
        ? title.substring(0,17) + '...'
        : title;
    }, [title])

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onClickNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle || 'Sin Título'} />
          <ListItemText secondary={body || 'Sin Contenido'} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
}

export default SideBarItem;
