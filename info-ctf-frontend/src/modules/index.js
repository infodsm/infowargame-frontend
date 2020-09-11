import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import register, { registerpostSaga } from './register';
import login, { loginpostSaga } from './login';
import adminlogin from './adminlogin';
import adminregister, { adminregistersaga } from './adminregister';
import loading from './loading';
import idcheck, { idcheckSaga } from './idcheck';
import sendemail, { sendemailSaga } from './sendemail';
import getemail, { getemailSaga } from './getemail';
import findpassword, { findpasswordpostSaga } from './findpassword';
import mypages, { mypageSaga } from './mypages';
import mypagemodified, { mypagemodifiedSaga } from './mypagemodified';
import search, { searchSaga } from './search';




const rootReducer = combineReducers({ register, login, loading, idcheck, sendemail, getemail, adminlogin, adminregister, findpassword, mypages, mypagemodified, search, });

export function* rootSaga() {
    yield all([idcheckSaga(), sendemailSaga(), getemailSaga(), registerpostSaga(), loginpostSaga(), findpasswordpostSaga(), mypageSaga(), mypagemodifiedSaga(), searchSaga(), adminregistersaga(),]);
}

export default rootReducer;