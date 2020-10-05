import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as quizAPI from '../lib/api/quiz';

const INITIALIZE = 'loadquiz/INITIALIZE';
const LOAD_QUIZ = 'loadquiz/LOAD_QUIZ';
const LOAD_QUIZ_SUCCESS = 'loadquiz/LOAD_QUIZ_SUCCESS';
const LOAD_QUIZ_FAILURE = 'loadquiz/LOAD_QUIZ_FAILURE';

export const initialize = createAction(INITIALIZE);
export const loadquizPost = createAction(LOAD_QUIZ, quiz_code => quiz_code);

// 사가 생성
const loadquizPostSaga = createRequestSaga(LOAD_QUIZ, quizAPI.loadquiz);

// 사가 통합
export function* loadquizpostSaga() {
    yield takeLatest(LOAD_QUIZ, loadquizPostSaga);
}

const initialState = {
    loadquiz: null,
    error: null,
};

const loadquiz = handleActions(
    {
        [INITIALIZE]: state => initialState, // initialState를 넣으면 초기상태로 바뀜

        [LOAD_QUIZ_SUCCESS]: (state, { payload: loadquiz }) => ({
            ...state,
            loadquiz,
        }),
        [LOAD_QUIZ_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        })
    },
    initialState,
);

export default loadquiz;