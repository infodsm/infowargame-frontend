import client from './client';

// 아이디 중복 체크
export const idcheck = ({ id }) => {
    return client.get(`/api/auth/idcheck/${id}`);
}

// 이메일 인증 보내기
export const sendemail = ({ id, email }) => {
    return client.post(`/api/auth/emailsend`, { id, email });
}

// 이메일 인증 받기
export const getemail = ({ id, code }) => {
    return client.get(`/api/auth/emailcheck?id=${id}&code=${code}`);
}

// 회원가입
export const register = ({ id, password, nickname, email, team }) => {
    return client.post(`/api/auth/signup`, { id, password, nickname, email, team });
}

// 로그인
export const login = ({ id, password }) => {
    return client.post(`/api/auth/login`, { id, password });
}

// 비밀번호 찾기
export const findpassword = ({ id, email }) => {
    return client.post(`/api/auth/findpassword`, { id, email });
}

// 마이페이지
export const mypage = ({ token }) => {
    return client.get(`/api/account/`, { headers: { 'Authentication': token } });
}

// 마이페이지 수정
export const mypagemodified = ({ id, password, nickname, team, email, token }) => {
    return client.post(`/api/account/change`, { id, password, nickname, email, team }, { headers: { 'Authentication': token } });
}
