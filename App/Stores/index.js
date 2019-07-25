import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas'
import { reducer as AuthReducer } from './Auth/Reducers'




export default () => {
  const rootReducer = combineReducers({
    Auth: AuthReducer,
  })

  return configureStore(rootReducer, rootSaga)
}
