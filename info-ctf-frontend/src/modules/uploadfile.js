import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as adminAPI from '../lib/api/admin';

const CHANGE_FIELD = 'uploadfile/CHANGE_FIELD';
const UPLOAD_FILE_POST = 'uploadfile/UPLOAD_FILE_POST';
const UPLOAD_FILE_POST_SUCCESS = 'uploadfile/UPLOAD_FILE_POST_SUCCESS';
const UPLOAD_FILE_POST_FAILURE = 'uploadfile/UPLOAD_FILE_POST_FAILURE';

export const changeInput = createAction(CHANGE_FIELD, ({ key, value }) => ({ key, value }));
export const uploadfilePost = createAction(UPLOAD_FILE_POST, ({ quizname, file, token }) => ({ quizname, file, token }));

// 사가 생성
const uploadfilePostSaga = createRequestSaga(UPLOAD_FILE_POST, adminAPI.uploadfile);

// 사가 통합
export function* uploadfilepostSaga() {
    yield takeLatest(UPLOAD_FILE_POST, uploadfilePostSaga);
}

const initialState = {
    quizname: '',
    file: '',
    uploadfile: null,
    error: null,
};

const uploadfile = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
            ...state,
            [key]: value, // 특정 key 값을 업데이트
        }),
        [UPLOAD_FILE_POST_SUCCESS]: (state, { payload: uploadfile }) => ({
            ...state,
            uploadfile,
        }),
        [UPLOAD_FILE_POST_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        })
    },
    initialState,
);

export default uploadfile;
