import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as adminAPI from '../lib/api/admin';

const ADMIN_REGISTER_CHANGE_FIELD = 'adminregister/ADMIN_REGISTER_CHANGE_FIELD';
const ADMIN_REGISTER_INITIALIZE = 'adminregister/ADMIN_REGISTER_INITIALIZE';
const ADMIN_REGISTER_POST = 'adminregister/ADMIN_REGISTER_POST';
const ADMIN_REGISTER_POST_SUCCESS = 'adminregister/ADMIN_REGISTER_POST_SUCCESS';
const ADMIN_REGISTER_POST_FAILURE = 'adminregister/ADMIN_REGISTER_POST_FAILURE';

export const adminRegisterInitialize = createAction(ADMIN_REGISTER_INITIALIZE);
export const adminRegisterChangeField = createAction(ADMIN_REGISTER_CHANGE_FIELD, ({ key, value }) => ({ key, value, }));
export const adminRegisterPost = createAction(ADMIN_REGISTER_POST, ({ id, password, nickname, code }) => ({ id, password, nickname, code }));

// 사가 생성
const adminRegisterPostSaga = createRequestSaga(ADMIN_REGISTER_POST, adminAPI.adminregister);

export function* adminregistersaga() {
    yield takeLatest(ADMIN_REGISTER_POST, adminRegisterPostSaga);
}

const initialState = {
    id: '',
    password: '',
    nickname: '',
    code: '',
    adminregister: '',
    admin: false,
};

const adminregister = handleActions(
    {
        [ADMIN_REGISTER_INITIALIZE]: state => initialState, // initialState를 넣으면 초기상태로 바뀜
        [ADMIN_REGISTER_CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
            ...state,
            [key]: value, // 특정 key 값을 업데이트
        }),
        // 어드민 회원가입 성공
        [ADMIN_REGISTER_POST_SUCCESS]: (state, { payload: adminregister }) => ({
            ...state,
            adminregister,
        }),
        [ADMIN_REGISTER_POST_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        })
    },
    initialState,
);


export default adminregister;