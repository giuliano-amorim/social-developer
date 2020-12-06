// Não perder os dados do usuario logado

import React, { useEffect, useCallback } from 'react'
import authService from '../../services/authService'

function Auth({ children }) {

  const initAuth = useCallback(() => {
    if (authService.isAuthenticated()) {
      // recuperar os dados novamente do usuario logado
    }


  }, [])

  useEffect(() => {

  }, [])
  return children
}

export default Auth;