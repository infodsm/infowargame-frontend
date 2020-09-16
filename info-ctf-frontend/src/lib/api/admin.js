import { Form } from '../../../node_modules/antd/lib/index';
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
export const makequiz = ({ category, id, point, quizname, contents, token }) => {
    return client.post(`api/admin/quizmake`, { category, contents, point, quizname, id }, { headers: { 'token': token } });
}

// 파일 업로드
export const uploadfile = ({ quizname, file, token }) => {
    console.log(file)
    return client.post(`api/admin/fileadd`, { quizname, filetoadd: file }, { headers: { 'token': token } });
} 