import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as adminAPI from '../lib/api/admin';

const CHANGE_FIELD = 'makequiz/CHANGE_FIELD';
const INITIALIZE = 'makequiz/INITIALIZE';
const MAKE_QUIZ_POST = 'makequiz/MAKE_QUIZ_POST';
const MAKE_QUIZ_POST_SUCCESS = 'makequiz/MAKE_QUIZ_POST_SUCCESS';
const MAKE_QUIZ_POST_FAILURE = 'makequiz/MAKE_QUIZ_POST_FAILURE';

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({ key, value }));
export const makequizPost = createAction(MAKE_QUIZ_POST, ({ category, id, point, quizname, contents, token }) => ({ category, id, point, quizname, contents, token }));

// 사가 생성
const makequizPostSaga = createRequestSaga(MAKE_QUIZ_POST, adminAPI.makequiz);

// 사가 통합
export function* makequizpostSaga() {
    yield takeLatest(MAKE_QUIZ_POST, makequizPostSaga);
}

const initialState = {
    category: '',
    id: '',
    point: '',
    quizname: '',
    contents: '',
    filetoadd: null,
    makequiz: null,
    error: null,
};

const makequiz = handleActions(
    {
        [INITIALIZE]: state => initialState, // initialState를 넣으면 초기상태로 바뀜
        [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
            ...state,
            [key]: value, // 특정 key 값을 업데이트
        }),
        [MAKE_QUIZ_POST_SUCCESS]: (state, { payload: makequiz }) => ({
            ...state,
            makequiz,
        }),
        [MAKE_QUIZ_POST_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        })
    },
    initialState,
);

export default makequiz;