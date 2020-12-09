import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Feed from '../Feed'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Header'
import NewPost from '../Post/New'



const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',

  },
  main: {
    height: '100vh',
    padding: 80,

  },
  toobar: {
    minHeight: 64,

  }
})

function Home() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.toolbar} />
      <main className={classes.main}>
        <Router>
          <Switch>
            <Route exact path='/' component={Feed} />
            <Route exact path='/feed' component={Feed} />
            <Route exact path='/post/new' component={NewPost} />
            <Route exact path='*' component={() => <h1>Página não encontrada 404</h1>} />
          </Switch>
        </Router>
      </main>
    </div>
  )
}

export default Home