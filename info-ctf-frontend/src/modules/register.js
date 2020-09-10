import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';

const CHANGE_FIELD = 'register/CHANGE_FIELD';
const INITIALIZE = 'register/INITIALIZE';
const REGISTER_POST = 'register/REGISTER_POST';
const REGISTER_POST_SUCCESS = 'register/REGISTER_POST_SUCCESS';
const REGISTER_POST_FAILURE = 'register/REGISTER_POST_FAILURE';


export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({ key, value, }));
export const registerPost = createAction(REGISTER_POST, ({ id, password, nickname, email, team }) => ({ id, password, nickname, email, team }));

// 사가 생성
const registerPostSaga = createRequestSaga(REGISTER_POST, authAPI.register);

export function* registerpostSaga() {
    yield takeLatest(REGISTER_POST, registerPostSaga);
}

const initialState = {
    userid: '',
    password: '',
    nickname: '',
    email: '',
    team: '',
    code: '',
    register: null,
    registerError: null,
};

const register = handleActions(
    {
        [INITIALIZE]: state => initialState, // initialState를 넣으면 초기상태로 바뀜
        [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
            ...state,
            [key]: value, // 특정 key 값을 업데이트
        }),
        // 회원가입 성공
        [REGISTER_POST_SUCCESS]: (state, { payload: register }) => ({
            ...state,
            registerError: null,
            register,
        }),
        // 회원가입 실패
        [REGISTER_POST_FAILURE]: (state, { payload: error }) => ({
            ...state,
            registerError: error,
        }),
    },
    initialState,
);


export default register;