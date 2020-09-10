import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';

const MYPAGE = 'mypages/MYPAGE';
const MYPAGE_SUCCESS = 'mypages/MYPAGE_SUCCESS';
const MYPAGE_FAILURE = 'mypages/MYPAGE_FAILURE';

export const mypagees = createAction(MYPAGE, ({ token }) => ({ token }));

const myPageSaga = createRequestSaga(MYPAGE, authAPI.mypage);

export function* mypageSaga() {
    yield takeLatest(MYPAGE, myPageSaga);
}

const initialState = {
    myPage: null,
    error: null,
    logged: false,
};

const mypages = handleActions(
    {
        [MYPAGE_SUCCESS]: (state, { payload: myPage }) => ({
            ...state,
            myPage,
            logged: true,
        }),
        [MYPAGE_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
            logged: false,
        })
    },
    initialState,
);

export default mypages;