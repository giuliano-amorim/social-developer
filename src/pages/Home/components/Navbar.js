import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';
import { ListItem } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    width: 275,
    marginRight: theme.spacing(2),
    
  },
  button: {
    width: '100%',
  }
}))

const tags = [
  { id: 1, name: 'mongoDb'},
  { id: 2, name: 'react'},
  { id: 3, name: 'javaScript'},
  { id: 4, name: 'express'},
  { id: 5, name: 'nodeJs'},
]


function NavBar() {
  const classes = useStyles();
  return (
<Paper className={classes.root}>
  <Button variant='outlined' color='secondary' className={classes.button}>Registrar grátis</Button>
  <ListSubheader>{'tags'}</ListSubheader>
  {
    tags.map((item)=> (
      <ListItem dense button key={`item-${item.id}-${item.name}`}>
        <ListItemText primary={`#${item.name}`} />
      </ListItem>
    ))
  }
  <ListItem button>
    Outras tags
  </ListItem>
</Paper>

  )
}

export default NavBar