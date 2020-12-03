import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme'
import SignIn from './pages/SignIn'
import './mock'



function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/sign-in'>
            <SignIn />
          </Route>
          <Route exact path='*'>
            <h1>Página não encontrada 404</h1>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>

  )
}


export default App;
