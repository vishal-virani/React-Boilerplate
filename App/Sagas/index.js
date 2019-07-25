import { takeLatest, all } from 'redux-saga/effects'
import { AuthAction } from '../Stores/Auth/Actions'

import { doAuthantication } from './AuthSaga'


export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(AuthAction.DO_AUTHANTICATION, doAuthantication),

  ])
}
