import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
    doAuthantication: ['credential'],
    doLogin: ['credential'],
    LoginLoading: null,
    LoginSuccess: ['credential'],
    LoginFailure: ['errorMessage'],
})

export const AuthAction = Types
export default Creators
