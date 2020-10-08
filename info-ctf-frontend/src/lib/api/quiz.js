import client from './client';

// 문제 목록 불러오기
export const showquizlist = () => {
    return client.get(`/api/challenge/page`);
}

// 문제 내용 불러오기
export const loadquiz = quiz_code => client.get(`/api/challenge/${quiz_code}`);
