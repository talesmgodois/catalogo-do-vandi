import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Catalogo } from '../types'

export function CatalogoItem(props:{catalogo: Catalogo, key?: number}) {
  const {catalogo} = props;

  const handleClick = () => {
    window.open(catalogo.url)
  }

  return (
    <ListItem button onClick={handleClick} className="elem">
      <ListItemAvatar>
        <Avatar
          src={catalogo.img}
        />
      </ListItemAvatar>
      <ListItemText primary={catalogo.nome} />

    </ListItem>
  )
}