import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';

const SEND_EMAIL = 'sendemail/SEND_EMAIL';
const SEND_EMAIL_SUCCESS = 'sendemail/SEND_EMAIL_SUCCESS';
const SEND_EMAIL_FAILURE = 'sendemail/SEMD_EMAIL_FAILURE';
const SEND_EMAIL_UNLOAD = "sendemail/SEND_EMAIL_UNLOAD";

export const sendEmail = createAction(SEND_EMAIL, ({ id, email }) => ({
    id,
    email,
}));
export const sendEmailUnload = createAction(SEND_EMAIL_UNLOAD);

// 사가 생성
const sendEmailSaga = createRequestSaga(SEND_EMAIL, authAPI.sendemail);
export function* sendemailSaga() {
    yield takeLatest(SEND_EMAIL, sendEmailSaga);
}

const initialState = {
    sendemail: null,
    error: null,
    EmailCheck: null,
};

const sendemail = handleActions(
    {
        [SEND_EMAIL_SUCCESS]: (state, { payload: sendemail }) => ({
            ...state,
            sendemail,
            EmailCheck: true,
        }),
        [SEND_EMAIL_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
            EmailCheck: false,
        }),
        [SEND_EMAIL_UNLOAD]: () => initialState,
    },
    initialState,
);

export default sendemail;