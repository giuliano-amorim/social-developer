import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Avatar, Button } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import { useHistory } from 'react-router-dom';
import axios from 'axios'


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    background: 'wheat',
  },

  image: {
    backgroundImage: 'url(/images/bg_2.png)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'none',
    padding: theme.spacing(2),
    textAlign: 'center',
  },

  avatar: {
    background: theme.palette.primary.main,
    marginBottom: theme.spacing(1)
  },

  button: {
    marginTop: theme.spacing(1),
  },

  form: {
    margin: theme.spacing(2, 4)
  }

}))

function CopyRight() {
  return (
    <Typography variant="body2" align='center'>
      <a
        color="inherit"
        href="https://https://gitlab.com/giuliano.amorim/social-developer"
      >
        Giuliano Amorim <br />
      </a>{' '}
      {'Copyright © '}<br />
      {new Date().getFullYear()}
    </Typography>
  );
}


// 1) Chama a API; 2) Se retorno OK!, direciona para Home
// 3) Se não - exibe mensagem
//obj promise/promessa - finalidades assincronas(then ou catch)
function handleSignIN() {
  axios.get('https://api.github.com/users/giuliano-amorim')
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log('Algo está errado.')
    })
}




function SignIn() {
  const classes = useStyles();

  const history = useHistory();

  const handleClick = (handleSignIN) => {
    history.push("/");
  }

  return (
    <Grid container className={classes.root}>
      <Grid
        item
        container
        direction='column'
        justify='center'
        alignItems='center'
        md={7}
        className={classes.image}>
        <Typography style={{ color: '#008080', fontSize: 24, lineHeight: '10px' }}>
          <strong>A melhor maneira de fazer networking entre desenvolvedores.</strong>
        </Typography>
        <Typography variant='body2' style={{ color: 'black', marginTop: 30, fontSize: 15, lineHeight: '15px' }}>
          <strong>Aprimore o seu conhecimento na programação.</strong>
        </Typography>
      </Grid>
      <Grid md={5}>
        <Box display='flex'
          flexDirection='column'
          alignItems='center'
          mt={8}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant='h5'>
            Login
          </Typography>
          <form className={classes.form}>
            <TextField
              variant='outlined'
              margin='normal'
              fullWidth
              required
              id='email'
              label='E-mail'
              name='email'
              autoComplete='email'
              autoFocus />
            <TextField
              variant='outlined'
              margin='normal'
              fullWidth
              required
              id='password'
              label='Senha'
              name='password'
              type='password'
              autoComplete='current-password'
            />
            <Button
              onClick={handleClick}
              className={classes.button}
              fullWidth
              variant='contained'
              color='primary'>
              Entrar
              </Button>
            <Grid container>
              <Grid item>
                <Link>Esqueceu sua senha?</Link>
              </Grid>
              <Grid item>
                <Link>Novo usuário</Link>
              </Grid>
            </Grid>
          </form>
          <CopyRight />
        </Box>
      </Grid>
    </Grid>
  )
}

export default SignIn;