import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../pages/Home'
import { useSelector } from 'react-redux'





function GuestRoute({ props: Component, ...rest }) {
  const account = useSelector(state => state.account)
  const isAuthenticated = Boolean(account.user)


  return <Route {...rest} props={isAuthenticated ? <Home /> : Component} />;
}



export default GuestRoute