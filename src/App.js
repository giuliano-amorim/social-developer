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
import { Provider } from 'react-redux'
import store from './store'
import Auth from './components/Auth'

function App() {

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Auth>
          <Router>
            <Switch>
              <GuestRoute exact path='/sign-in' component={<SignIn />} />
              <Route exact path='//*' component={<Home />} />
            </Switch>
          </Router>
        </Auth>
      </ThemeProvider>
    </Provider>
  )
}


export default App;
