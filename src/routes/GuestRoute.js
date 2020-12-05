import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Home from '../pages/Home'
import authService from '../services/authService'


function GuestRoute({ props, ...rest }) {
  const isAuthenticated = authService.isAuthenticated()

  console.log(isAuthenticated)
  return (
    < Route {...rest} props={(
      isAuthenticated
        ? <Home {...rest} />
        : <Redirect to='/sign-in' />
    )} />


  )
}

export default GuestRoute