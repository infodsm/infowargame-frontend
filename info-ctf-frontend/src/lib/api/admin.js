import client from './client';

// admin 회원가입
export const adminregister = ({ id, password, nickname, code }) => {
    return client.post(`api/admin/signup`, { id, password, nickname, code });
}

// admin 로그인
export const adminlogin = ({ id, password }) => {
    return client.post(`api/admin/login`, { id, password });
}