import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../lib/createRequestSaga';
import * as quizAPI from '../lib/api/quiz';

const INITIALIZE = 'checkanswer/INITIALIZE';
const CHANGE_FIELD = 'checkanswer/CHANGE_FIELD';
const CHECK_ANSWER = 'checkanswer/CHECK_ANSWER';
const CHECK_ANSWER_SUCCESS = 'checkanswer/CHECK_ANSWER_SUCCESS';
const CHECK_ANSWER_FAILURE = 'checkanswer/CHECK_ANSWER_FAILURE';

export const checkanswerinitialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({ key, value }));
export const checkanswerPost = createAction(CHECK_ANSWER, ({ quiz_code, flag, token }) => ({ quiz_code, flag, token }));

const checkanswersaga = createRequestSaga(CHECK_ANSWER, quizAPI.checkanswer);

// 사가 생성
export function* checkanswerSaga() {
    yield takeLatest(CHECK_ANSWER, checkanswersaga);
}

const initialState = {
    checkanswer: null,
    flag: null,
    error: null,
};

const checkanswer = handleActions(
    {
        [INITIALIZE]: state => initialState, // initialState를 넣으면 초기상태로 바뀜
        [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
            ...state,
            [key]: value, // 특정 값을 업데이트
        }),
        [CHECK_ANSWER_SUCCESS]: (state, { payload: checkanswer }) => ({
            ...state,
            checkanswer,
        }),
        [CHECK_ANSWER_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
    },
    initialState,
);

export default checkanswer; 