import client from './client';

// 문제 목록 불러오기
export const showquizlist = ({ token }) => {
    return client.get(`/api/challenge/page`, { headers: { "Authentication": token } });
}

// 문제 내용 불러오기
export const loadquiz = quiz_code => client.get(`/api/challenge/${quiz_code}`);

// 문제 파일 다운로드
export const downloadfile = quiz_code => client.get(`/api/challenge/download/${quiz_code}`, { headers: { responseType: 'blob' } });

// 문제 정답 체크
export const checkanswer = ({ quiz_code, flag, token }) => client.post(`/api/challenge/answer/${quiz_code}`, { flag }, { headers: { "Authentication": token } });

// 맞춘 문제 확인하기
export const checkquiz = ({ token }) => client.get(`/api/challenge`, { headers: { "Authentication": token } })