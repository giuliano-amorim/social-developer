import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Home from '../pages/Home'
import { useSelector } from 'react-redux'


function GuestRoute({ props, ...rest }) {
  const account = useSelector(state => state.account)
  const isAuthenticated = Boolean(account.user)


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