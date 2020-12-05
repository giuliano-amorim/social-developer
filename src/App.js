import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme'
import SignIn from './pages/SignIn'
import './mock'
import GuestRoute from './routes/GuestRoute'


function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path='/' component={() => <Home />} />
          <GuestRoute exact path='/sign-in' component={() => <SignIn />} />
          <Route exact path='*' component={() => <h1>Página não encontrada 404</h1>} />
        </Switch>
      </Router>
    </ThemeProvider>

  )
}


export default App;
