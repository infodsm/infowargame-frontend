import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';

const INITIALIZE = 'idcheck/INITIALIZE';
const ID_CHECK = 'idcheck/ID_CHECK';
const ID_CHECK_SUCCESS = 'idcheck/ID_CHECK_SUCCESS';
const ID_CHECK_FAILURE = 'idcheck/ID_CHECK_FAILURE';
const ID_UNLOAD = 'idcheck/ID_UNLOAD';


export const idinitialize = createAction(INITIALIZE);
export const idCheck = createAction(ID_CHECK, ({ id }) => ({ id }));
export const idUnload = createAction(ID_UNLOAD);

const idCheckSaga = createRequestSaga(ID_CHECK, authAPI.idcheck);
export function* idcheckSaga() {
    yield takeLatest(ID_CHECK, idCheckSaga);
}

const initialState = {
    idcheck: null,
    error: null,
};

const idcheck = handleActions(
    {
        [INITIALIZE]: state => initialState, // initialState를 넣으면 초기상태로 바뀜
        [ID_CHECK_SUCCESS]: (state, { payload: idcheck }) => ({
            ...state,
            idcheck,
        }),
        [ID_CHECK_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
            check: false,
        }),
        [ID_UNLOAD]: () => initialState,
    },
    initialState,
);


export default idcheck; 