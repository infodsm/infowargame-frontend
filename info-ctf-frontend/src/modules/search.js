import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as userAPI from '../lib/api/user';


const CHANGE_FIELD = 'search/CHANGE_FIELD';
const CHANGE_INPUT = 'search/CHANGE_INPUT';
const INITIALIZE = 'search/INITIALIZE';
const USER_SEARCH = 'search/USER_SEARCH';
const USER_SEARCH_SUCCESS = 'search/USER_SEARCH_SUCCESS';
const USER_SEARCH_FAILURE = 'search/USER_SEARCH_FAILURE';

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({ key, value }));
export const changeInput = createAction(CHANGE_INPUT, ({ key, value }) => ({ key, value }));
export const initialize = createAction(INITIALIZE);
export const userSearchPost = createAction(USER_SEARCH, ({ column, srch, token }) => ({ column, srch, token }));

// 사가 생성
const searchsaga = createRequestSaga(USER_SEARCH, userAPI.usersearch);

export function* searchSaga() {
    yield takeLatest(USER_SEARCH, searchsaga);
}

const initialState = {
    column: 'id',
    srch: '',
    search: '',
};

const search = handleActions(
    {
        [INITIALIZE]: state => initialState, // initialState를 넣으면 초기상태로 바뀜
        [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
            ...state,
            [key]: value, // 특정 key 값을 업데이트
        }),
        // 유저검색 성공
        [USER_SEARCH_SUCCESS]: (state, { payload: search }) => ({
            ...state,
            search,
        }),
        // 유저검색 실패
        [USER_SEARCH_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        })
    },
    initialState,
);

export default search;