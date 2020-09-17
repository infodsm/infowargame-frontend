import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';

const CHANGE_FIELD = 'login/CHANGE_FIELD';
const INITIALIZE = 'login/INITIALIZE';
const LOGIN_POST = 'login/LOGIN_POST';
const LOGIN_POST_SUCCESS = 'login/LOGIN_POST_SUCCESS';
const LOGIN_POST_FAILURE = 'login/LOGIN_POST_FAILURE';
const LOGOUT = 'login/LOGOUT';

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({ key, value }));
export const loginPost = createAction(LOGIN_POST, ({ id, password }) => ({ id, password }));
export const logout = createAction(LOGOUT);

// 사가 생성
const loginPostSaga = createRequestSaga(LOGIN_POST, authAPI.login);

function logoutSaga() {
    try {
        localStorage.removeItem('user'); // localStorage에서 user(token 값)를 제거
        localStorage.removeItem('admin'); // localStroage에서 admin을 제거
        localStorage.removeItem('users'); // localStorage에서 users를 제거
    } catch (e) {
        console.log(e);
    }
}



export function* loginpostSaga() {
    yield takeLatest(LOGIN_POST, loginPostSaga);
    yield takeLatest(LOGOUT, logoutSaga);

}



const initialState = {
    id: '',
    password: '',
    login: null,
    loginError: null,
    logged: false,
};

const login = handleActions(
    {
        [INITIALIZE]: state => initialState, // initialState를 넣으면 초기상태로 바뀜
        [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
            ...state,
            [key]: value, // 특정 값을 업데이트
        }),
        // 로그인 성공
        [LOGIN_POST_SUCCESS]: (state, { payload: login }) => ({
            ...state,
            login,
            loginError: null,
            logged: true,
        }),
        [LOGIN_POST_FAILURE]: (state, { payload: error }) => ({
            ...state,
            loginError: error,
            logged: false,
        }),
        [LOGOUT]: state => ({
            ...state,
            login: null,
            logged: false,
        }),
    },
    initialState,
);

export default login;