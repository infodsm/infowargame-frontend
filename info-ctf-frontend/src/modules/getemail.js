import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';

const GET_EMAIL = 'getemail/GET_EMAIL';
const GET_EMAIL_SUCCESS = 'getemail/GET_EMAIL_SUCCESS';
const GET_EMAIL_FAILURE = 'getemail/GET_EMAIL_FAILURE';

export const getEmail = createAction(GET_EMAIL, ({ id, code }) => ({
    id,
    code,
}));

const getEmailSaga = createRequestSaga(GET_EMAIL, authAPI.getemail);

export function* getemailSaga() {
    yield takeLatest(GET_EMAIL, getEmailSaga);
}

const initialState = {
    getemail: null,
    error: null,
    GetEmailCheck: null,
};

const getemail = handleActions(
    {
        [GET_EMAIL_SUCCESS]: (state, { payload: getemail }) => ({
            ...state,
            getemail,
            GetEmailCheck: true,
        }),
        [GET_EMAIL_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
            GetEmailCheck: false,
        }),
    },
    initialState,
);

export default getemail;