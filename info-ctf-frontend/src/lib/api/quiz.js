import client from './client';

// 문제 목록 불러오기
export const showquizlist = () => {
    return client.get(`api/quiz/loadpage`);
}