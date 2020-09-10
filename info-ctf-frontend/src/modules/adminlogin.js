import { createAction, handleActions } from 'redux-actions';

const ADMIN_LOGIN_CHANGE_FIELD = 'login/ADMIN_LOGIN_CHANGE_FIELD';
const ADMIN_LOGIN_INITIALIZE = 'login/ADMIN_LOGIN_INITIALIZE';

export const adminInitialize = createAction(ADMIN_LOGIN_INITIALIZE);
export const adminChangeField = createAction(ADMIN_LOGIN_CHANGE_FIELD, ({ key, value }) => ({ key, value }));

const initialState = {
    id: '',
    password: '',
};

const adminlogin = handleActions(
    {
        [ADMIN_LOGIN_INITIALIZE]: state => initialState, // initialState를 넣으면 초기상태로 바뀜
        [ADMIN_LOGIN_CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
            ...state,
            [key]: value, // 특정 값을 업데이트
        }),
    },
    initialState,
);

export default adminlogin;