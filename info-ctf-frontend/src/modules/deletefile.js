import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../lib/createRequestSaga';
import * as adminAPI from '../lib/api/admin';

const DELETE_FILE = 'deletefile/DELETE_FILE';
const DELETE_FILE_SUCCESS = 'deletefile/DELETE_FILE_SUCCESS';
const DELETE_FILE_FAILURE = 'deletefile/DELETE_FILE_FAILURE';

export const deletefilePost = createAction(DELETE_FILE, ({ quizname, token }) => ({ quizname, token }));

const deleteFileSaga = createRequestSaga(DELETE_FILE, adminAPI.deletefile);

// 사가 생성
export function* deletefileSaga() {
    yield takeLatest(DELETE_FILE, deleteFileSaga);
}

const initialState = {
    deletefile: null,
    error: null,
};

const deletefile = handleActions(
    {
        [DELETE_FILE_SUCCESS]: (state, { payload: deletefile }) => ({
            ...state,
            deletefile,
        }),
        [DELETE_FILE_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
            check: false,
        }),
    },
    initialState,
);

export default deletefile; 