import { put, call } from 'redux-saga/effects';
import AuthAction from 'App/Stores/Auth/Actions';
import { AuthService } from 'App/Services/AuthService';
import AsyncStorage from '@react-native-community/async-storage';

export function* doAuthantication(param) {

    let credential = param.credential
    const logindata = yield call(AuthService.doAuthantication, credential);
      if (logindata.credintial) {
        console.log('logindataSuccess', logindata);
        yield put(AuthAction.LoginSuccess(logindata))
      } else {
        console.log('logindataError', logindata);
        if (logindata.msg) {
          yield put(AuthAction.LoginFailure(logindata.msg))
        } else {
          yield put(AuthAction.LoginFailure('Somthing went Worng'))
        }
      } 
}
