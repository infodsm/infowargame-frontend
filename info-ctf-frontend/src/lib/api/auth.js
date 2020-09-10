import qs from 'qs';
import client from './client';

// 아이디 중복 체크
export const idcheck = ({ userid }) => {
    const queryString = qs.stringify({
        userid,
    });
    return client.get(`/api/auth/idcheck?${queryString}`);
}

// 이메일 인증 보내기
export const sendemail = ({ email, id }) => {

    return client.post(`/api/auth/emailsend?email=${email}&id=${id}`, { email });
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
    return client.post(`api/auth/findpassword?id=${id}`, { email });
}

// 마이페이지
export const mypage = ({ token }) => {
    return client.get(`api/auth/mypage`, { headers: { 'token': token } });
}

// 마이페이지 수정
export const mypagemodified = ({ id, password, nickname, team, email, token }) => {
    return client.post(`api/auth/changemyinfo`, { id, password, nickname, team, email }, { headers: { 'token': token } });
}
