import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { AuthAction } from './Actions'

export const doLogin = (state, {credential}) => ({
    ...state,
    LoginData:credential
})
export const LoginLoading = (state ) => ({
    ...state,
    LoginIsLoading: true,
    LoginErrorMessage: null,
  })
export const LoginSuccess = (state, { credential }) => ({
    ...state,
    LoginData: credential,
    LoginIsLoading: false,
    LoginErrorMessage: null,
  })
  export const LoginFailure = (state, { errorMessage }) => ({
    ...state,
    LoginData: [],
    LoginIsLoading: false,
    LoginErrorMessage: errorMessage,
  })
  

export const reducer = createReducer(INITIAL_STATE, {
    [AuthAction.DO_LOGIN]: doLogin,
    [AuthAction.LOGIN_LOADING]: LoginLoading,
    [AuthAction.LOGIN_SUCCESS]: LoginSuccess,
    [AuthAction.LOGIN_FAILURE]: LoginFailure,
  })