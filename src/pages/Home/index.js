import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import history from '../../config/history'
import Header from './Header'
import NewPost from '../Post/New'
import Feed from '../Feed'



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.dark,
  },
  main: {
    padding: 24,
  },
  toolbar: {
    minHeight: 64,
  },
}));

function Home() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.toolbar} />
      <main className={classes.main}>
        <Router history={history}>
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