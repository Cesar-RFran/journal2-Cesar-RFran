import { TurnedInNot } from '@mui/icons-material';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useMemo } from 'react';

const SideBarItem = ({ title, body, id }) => {


    const newTitle = useMemo (() => {
        return title.length > 17
        ? title.substring(0,17) + '...'
        : title;
    }, [title])

  return (
    <ListItem disablePadding>
      <ListItemButton>
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
