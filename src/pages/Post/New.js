import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'



const useStyles = makeStyles((theme) => ({
  root: {
    background: 'red',
    height: '100%',
  }
}))

function NewPost() {
  const classes = useStyles()

  return (
    <Box display='flex' className={classes.root}>
      <Box>Editor</Box>
      <Box>Resultado</Box>
    </Box>
  )
}

export default NewPost