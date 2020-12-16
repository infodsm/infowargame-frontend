import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as adminAPI from '../lib/api/admin';

const CHANGE_FIELD = 'adminlogin/CHANGE_FIELD';
const INITIALIZE = 'adminlogin/INITIALIZE';
const ADMIN_LOGIN_POST = 'adminlogin/ADMIN_LOGIN_POST';
const ADMIN_LOGIN_POST_SUCCESS = 'adminlogin/ADMIN_LOGIN_POST_SUCCESS';
const ADMIN_LOGIN_POST_FAILURE = 'adminlogin/ADMIN_LOGIN_POST_FAILURE';

export const admininitialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({ key, value }));
export const adminloginPost = createAction(ADMIN_LOGIN_POST, ({ id, password }) => ({ id, password }));

// 사가 생성
const adminloginPostSaga = createRequestSaga(ADMIN_LOGIN_POST, adminAPI.adminlogin);

export function* adminloginpostSaga() {
    yield takeLatest(ADMIN_LOGIN_POST, adminloginPostSaga);
}

const initialState = {
    id: '',
    password: '',
    adminlogin: null,
    error: null,
    admin: false,
};

const adminlogin = handleActions(
    {
        [INITIALIZE]: state => initialState, // initialState를 넣으면 초기상태로 바뀜
        [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
            ...state,
            [key]: value, // 특정 값을 업데이트
        }),
        [ADMIN_LOGIN_POST_SUCCESS]: (state, { payload: adminlogin }) => ({
            ...state,
            adminlogin,
            error: null,
            admin: true,
        }),
        [ADMIN_LOGIN_POST_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
            admin: false,
        }),
    },
    initialState,
);

export default adminlogin;