import React from 'react'
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'

function WritePost() {
  const history = useHistory()
  const handleClick = () => {
    history.push('/post/new')
  }


  return (
    <Button color="primary" variant='contained' onClick={handleClick}>
      Novo Post
    </Button>
  )

}

export default WritePost