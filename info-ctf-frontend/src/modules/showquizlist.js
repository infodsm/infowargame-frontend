import { createAction, handleActions } from 'redux-actions';
import createRequestSagatwo from '../lib/createRequestSagatwo';
import { takeLatest } from 'redux-saga/effects';
import * as quizAPI from '../lib/api/quiz';

const SHOW_QUIZLIST = 'showquizlist/SHOW_QUIZLIST';
const SHOW_QUIZLIST_SUCCESS = 'showquizlist/SHOW_QUIZLIST_SUCCESS';
const SHOW_QUIZLIST_FAILURE = 'showquizlist/SHOW_QUIZLIST_FAILURE';

export const showquizlistPost = createAction(SHOW_QUIZLIST);

// 사가 생성
const showquizlistPostSaga = createRequestSagatwo(SHOW_QUIZLIST, quizAPI.showquizlist);

export function* showquizlistpostSaga() {
    yield takeLatest(SHOW_QUIZLIST, showquizlistPostSaga);
}

const initialState = {
    showquizlist: [],
    error: null,
};

const showquizlist = handleActions(
    {
        [SHOW_QUIZLIST_SUCCESS]: (state, { payload: showquizlist }) => ({
            ...state,
            showquizlist,
        }),
        [SHOW_QUIZLIST_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
    },
    initialState,
);

export default showquizlist;