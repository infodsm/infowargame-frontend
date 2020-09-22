import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../lib/createRequestSaga';
import * as scoreAPI from '../lib/api/score';

const RANK = 'rank/RANK';
const RANK_SUCCESS = 'rank/RANK_SUCCESS';
const RANK_FAILURE = 'rank/RANK_FAILURE';

export const rankGet = createAction(RANK, ({ token }) => ({ token }));

const rankSaga = createRequestSaga(RANK, scoreAPI.showrank);

export function* ranksaga() {
    yield takeLatest(RANK, rankSaga);
}

const initialState = {
    ranks: null,
    error: null,
};

const rank = handleActions(
    {
        [RANK_SUCCESS]: (state, { payload: ranks }) => ({
            ...state,
            ranks,
        }),
        [RANK_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        })
    },
    initialState,
);

export default rank;