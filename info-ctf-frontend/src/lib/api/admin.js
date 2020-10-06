import client from './client';

// admin 회원가입
export const adminregister = ({ id, password, nickname, code }) => {
    return client.post(`api/admin/signup`, { id, password, nickname, code });
}

// admin 로그인
export const adminlogin = ({ id, password }) => {
    return client.post(`api/admin/login`, { id, password });
}

// 문제 만들기 
export const makequiz = ({ category, contents, point, quizname, flag, token }) => {
    return client.post(`/api/admin/challenge/make`, { category, contents, point, quizname, flag }, { headers: { "Authentication": token } });
}

// 파일 업로드 (사용 x container 컴포넌트에서 요청함)
export const uploadfile = ({ quizname, file, token }) => {
    return client.post(`api/admin/fileadd/${quizname}`, { filetoadd: file }, { headers: { "Authentication": token } });
}

// 파일 삭제
export const deletefile = ({ quizname, token }) => {
    return client.post(`api/admin/filedelete`, { quizname }, { headers: { 'token': token } });
}