import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';

const CHANGE_FIELD = 'mypagemodified/CHANGE_FIELD';
const INITIALIZE = 'mypagemodified/INITIALIZE';
const MODIFIED_POST = 'mypagemodified/MODIFIED_POST';
const MODIFIED_SUCCESS = 'mypagemodified/MODIFIED_SUCEESS';
const MODOFIED_FAILURE = 'mypagemodified/MODIFIED_FAILURE';

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({ key, value, }));
export const initialize = createAction(INITIALIZE);
export const modifiedPost = createAction(MODIFIED_POST, ({ token, id, password, nickname, team, email }) => ({ token, id, password, nickname, team, email, }));


// 사가 생성
const mypageModifiedSaga = createRequestSaga(MODIFIED_POST, authAPI.mypagemodified);

export function* mypagemodifiedSaga() {
    yield takeLatest(MODIFIED_POST, mypageModifiedSaga);
}

const initialState = {
    mypagemodified: null,
    id: '',
    password: '',
    nickname: '',
    team: '',
    email: '',
    error: null,
};

const mypagemodified = handleActions(
    {
        [INITIALIZE]: state => initialState, // initialState를 넣으면 초기상태로 바뀜
        [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
            ...state,
            [key]: value, // 특정 key 값을 업데이트
        }),
        [MODIFIED_SUCCESS]: (state, { payload: mypagemodified }) => ({
            ...state,
            mypagemodified,
        }),
        [MODOFIED_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
    },
    initialState,
);


export default mypagemodified;