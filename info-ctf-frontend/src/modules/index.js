import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import register, { registerpostSaga } from './register';
import login, { loginpostSaga } from './login';
import adminlogin, { adminloginpostSaga } from './adminlogin';
import adminregister, { adminregistersaga } from './adminregister';
import loading from './loading';
import idcheck, { idcheckSaga } from './idcheck';
import sendemail, { sendemailSaga } from './sendemail';
import getemail, { getemailSaga } from './getemail';
import findpassword, { findpasswordpostSaga } from './findpassword';
import mypages, { mypageSaga } from './mypages';
import mypagemodified, { mypagemodifiedSaga } from './mypagemodified';
import searchuser, { searchSaga } from './searchuser';
import makequiz, { makequizpostSaga } from './makequiz';
import uploadfile, { uploadfilepostSaga } from './uploadfile';
import showquizlist, { showquizlistpostSaga } from './showquizlist';
import deletefile, { deletefileSaga } from './deletefile';
import rank, { ranksaga } from './rank';
import loadquiz, { loadquizpostSaga } from './loadquiz';
import deletequiz, { deletequizSaga } from './deletequiz';
import downloadfile, { downloadfilepostSaga } from './downloadfile';
import checkanswer, { checkanswerSaga } from './checkanswer';
import quiz, { quizpostSaga } from './quiz';




const rootReducer = combineReducers({ register, login, loading, idcheck, sendemail, getemail, adminlogin, adminregister, findpassword, mypages, mypagemodified, searchuser, makequiz, uploadfile, showquizlist, deletefile, rank, loadquiz, deletequiz, downloadfile, checkanswer, quiz });

export function* rootSaga() {
    yield all([idcheckSaga(), sendemailSaga(), getemailSaga(), registerpostSaga(), loginpostSaga(), findpasswordpostSaga(), mypageSaga(), mypagemodifiedSaga(), searchSaga(), adminregistersaga(), adminloginpostSaga(), makequizpostSaga(), uploadfilepostSaga(), showquizlistpostSaga(), deletefileSaga(), ranksaga(), loadquizpostSaga(), deletequizSaga(), downloadfilepostSaga(), checkanswerSaga(), quizpostSaga()]);
}

export default rootReducer;