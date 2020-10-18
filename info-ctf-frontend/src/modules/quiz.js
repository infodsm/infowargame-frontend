import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as quizAPI from '../lib/api/quiz';

const INITIALIZE = 'quiz/INITIALIZE';
const QUIZ = 'quiz/QUIZ';
const QUIZ_SUCCESS = 'quiz/QUIZ_SUCCESS';
const QUIZ_FAILURE = 'quiz/QUIZ_FAILURE';

export const initialize = createAction(INITIALIZE);
export const quizPost = createAction(QUIZ, token => token);

// 사가 생성
const quizPostSaga = createRequestSaga(QUIZ, quizAPI.checkquiz);

// 사가 통합
export function* quizpostSaga() {
    yield takeLatest(QUIZ, quizPostSaga);
}

const initialState = {
    quiz: null,
    error: null,
};

const quiz = handleActions(
    {
        [INITIALIZE]: state => initialState, // initialState를 넣으면 초기상태로 바뀜

        [QUIZ_SUCCESS]: (state, { payload: quiz }) => ({
            ...state,
            quiz,
        }),
        [QUIZ_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        })
    },
    initialState,
);

export default quiz;