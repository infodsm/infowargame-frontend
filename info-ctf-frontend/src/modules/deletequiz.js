import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../lib/createRequestSaga';
import * as adminAPI from '../lib/api/admin';

const DELETE_QUIZ = 'deletequiz/DELETE_QUIZ';
const DELETE_QUIZ_SUCCESS = 'deletequiz/DELETE_QUIZ_SUCCESS';
const DELETE_QUIZ_FAILURE = 'deletequiz/DELETE_QUIZ_FAILURE';

export const deletequizPost = createAction(DELETE_QUIZ, ({ quiz_num, token }) => ({ quiz_num, token }));

const deletequizsaga = createRequestSaga(DELETE_QUIZ, adminAPI.deletequiz);

// 사가 생성
export function* deletequizSaga() {
    yield takeLatest(DELETE_QUIZ, deletequizsaga);
}

const initialState = {
    deletequiz: null,
    error: null,
};

const deletequiz = handleActions(
    {
        [DELETE_QUIZ_SUCCESS]: (state, { payload: deletequiz }) => ({
            ...state,
            deletequiz,
        }),
        [DELETE_QUIZ_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
    },
    initialState,
);

export default deletequiz; 