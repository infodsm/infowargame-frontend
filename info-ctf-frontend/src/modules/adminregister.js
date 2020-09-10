import { createAction, handleActions } from 'redux-actions';

const ADMIN_REGISTER_CHANGE_FIELD = 'adminregister/ADMIN_REGISTER_CHANGE_FIELD';
const ADMIN_REGISTER_INITIALIZE = 'adminregister/ADMIN_REGISTER_INITIALIZE';


export const adminRegisterInitialize = createAction(ADMIN_REGISTER_INITIALIZE);
export const adminRegisterChangeField = createAction(ADMIN_REGISTER_CHANGE_FIELD, ({ key, value }) => ({ key, value, }));


const initialState = {
    id: '',
    password: '',
    nickname: '',
    email: '',
    team: '',
    code: '',
};

const register = handleActions(
    {
        [ADMIN_REGISTER_INITIALIZE]: state => initialState, // initialState를 넣으면 초기상태로 바뀜
        [ADMIN_REGISTER_CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
            ...state,
            [key]: value, // 특정 key 값을 업데이트
        }),
    },
    initialState,
);


export default register;