import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';

const CHANGE_FIELD = 'findpassword/CHANGE_FIELD';
const INITIALIZE = 'findpassword/INITIALIZE';
const FINDPASSWORD_POST = 'findpassword/FINDPASSWORD_POST';
const FINDPASSWORD_POST_SUCCESS = 'findpassword/FINDPASSWORD_POST_SUCCESS';
const FINDPASSWORD_POST_FAILURE = 'findpassword/FINDPASSWORD_POST_FAILURE';

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({ key, value }));
export const findpasswordPost = createAction(FINDPASSWORD_POST, ({ id, email }) => ({ id, email }));

// 사가 생성
const findpasswordPostSaga = createRequestSaga(FINDPASSWORD_POST, authAPI.findpassword);

export function* findpasswordpostSaga() {
    yield takeLatest(FINDPASSWORD_POST, findpasswordPostSaga);
}

const initialState = {
    id: '',
    email: '',
    findpassword: null,
    findpasswordError: null,
};

const findpassword = handleActions(
    {
        [INITIALIZE]: state => initialState, // initialState를 넣으면 초기상태로 바뀜
        [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
            ...state,
            [key]: value, // 특정 값을 업데이트
        }),
        // 비밀번호 찾기 성공
        [FINDPASSWORD_POST_SUCCESS]: (state, { payload: findpassword }) => ({
            ...state,
            findpassword,
            findpasswordError: null,
        }),
        // 비밀번호 찾기 실패
        [FINDPASSWORD_POST_FAILURE]: (state, { payload: error }) => ({
            ...state,
            findpasswordError: error,
        })
    },
    initialState,
);

export default findpassword;