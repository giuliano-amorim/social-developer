import React, { useState, useRef } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { signOut } from '../../../actions/accountActions'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

function Account() {
  const account = useSelector((state) => state.account)
  const [isOpen, setOpen] = useState(false)
  const ref = useRef()
  const dispatch = useDispatch()
  const history = useHistory()

  const isAuthenticated = !!account.user

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSignOut = () => {
    handleClose()

    // logoff no app atraves de uma action (redux)
    dispatch(signOut())
    history.push('/')
  }

  return (
    <>
      <Avatar
        ref={ref}
        onClick={handleOpen}
        alt="imagemAvatar"
        src={account.user && account.user.avatar} />

      {isAuthenticated
        ? (
          <Menu
            anchorEl={ref.current}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            open={isOpen}
            onClose={handleClose}
            getContentAnchorEl={null}
          >
            <MenuItem>Pefil</MenuItem>
            <MenuItem>Favoritos</MenuItem>
            <MenuItem>Postagens</MenuItem>
            <MenuItem>Conexões</MenuItem>
            <MenuItem onClick={handleSignOut}>Sair</MenuItem>
          </Menu>
        ) : (
          <Menu
            anchorEl={ref.current}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            open={isOpen}
            onClose={handleClose}
            getContentAnchorEl={null}
          >
            <MenuItem>Registro Gratuito</MenuItem>
            <MenuItem>Entrar</MenuItem>
          </Menu>
        )}
    </>

  )
}

export default Account