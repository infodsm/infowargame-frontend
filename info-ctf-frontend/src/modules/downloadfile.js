// 리덕스코드로 파일다운로드 처리가 잘 되지 않아 fetch로 수정, 다운로드가 되므로 리덕스 코드 미사용 결정

import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import { saveAs } from 'file-saver';
import * as quizAPI from '../lib/api/quiz';

const INITIALIZE = 'downloadfile/INITIALIZE';
const DOWNLOAD_FILE = 'downloadfile/DOWNLOAD_FILE';
const DOWNLOAD_FILE_SUCCESS = 'downloadfile/DOWNLOAD_FILE_SUCCESS';
const DOWNLOAD_FILE_FAILURE = 'downloadfile/DOWNLOAD_FILE_FAILURE';

export const downloadinitialize = createAction(INITIALIZE);
export const downloadfilePost = createAction(DOWNLOAD_FILE, quiz_code => quiz_code);

// 사가 생성
const downloadfilePostsaga = createRequestSaga(DOWNLOAD_FILE, quizAPI.downloadfile);

// 사가 통합
export function* downloadfilepostSaga() {
    yield takeLatest(DOWNLOAD_FILE, downloadfilePostsaga);
}

const initialState = {
    downloadfile: null,
    error: null,
};


const downloadfile = handleActions(
    {

        [INITIALIZE]: state => initialState, // initialState를 넣으면 초기상태로 바뀜

        [DOWNLOAD_FILE_SUCCESS]: (state, { payload: downloadfile }) => ({
            ...state,
            downloadfile,
        }),
        [DOWNLOAD_FILE_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        })
    },
    initialState,
);

export default downloadfile;