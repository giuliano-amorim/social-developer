// Não perder os dados do usuario logado

import { useEffect, useCallback } from 'react'
import authService from '../../services/authService'
import { setUserData } from '../../actions/accountActions'
import { useDispatch } from 'react-redux'



function Auth({ children }) {
  const dispatch = useDispatch()
  const initAuth = useCallback(async () => {
    if (authService.isAuthenticated()) {
      // recuperar os dados novamente do usuario logado
      await dispatch(setUserData())
    }


  }, [dispatch])

  useEffect(() => {
    initAuth()
  }, [initAuth])
  return children
}

export default Auth;