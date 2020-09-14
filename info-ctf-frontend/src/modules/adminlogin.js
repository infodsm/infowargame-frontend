import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as adminAPI from '../lib/api/admin';

const ADMIN_LOGIN_CHANGE_FIELD = 'adminlogin/ADMIN_LOGIN_CHANGE_FIELD';
const ADMIN_LOGIN_INITIALIZE = 'adminlogin/ADMIN_LOGIN_INITIALIZE';
const ADMIN_LOGIN_POST = 'adminlogin/ADMIN_LOGIN_POST';
const ADMIN_LOGIN_SUCCESS = 'adminlogin/ADMIN_LOGIN_SUCCESS';
const ADMIN_LOGIN_FAILURE = 'adminlogin/ADMIN_LOGIN_FAILURE';

export const adminInitialize = createAction(ADMIN_LOGIN_INITIALIZE);
export const adminChangeField = createAction(ADMIN_LOGIN_CHANGE_FIELD, ({ key, value }) => ({ key, value }));
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
};

const adminlogin = handleActions(
    {
        [ADMIN_LOGIN_INITIALIZE]: state => initialState, // initialState를 넣으면 초기상태로 바뀜
        [ADMIN_LOGIN_CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
            ...state,
            [key]: value, // 특정 값을 업데이트
        }),
        [ADMIN_LOGIN_SUCCESS]: (state, { payload: adminlogin }) => ({
            ...state,
            adminlogin,
        }),
        [ADMIN_LOGIN_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        })
    },
    initialState,
);

export default adminlogin;