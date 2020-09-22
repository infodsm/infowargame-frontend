import client from './client';

// TOP 50 유저 불러오기
export const showrank = ({ token }) => {
    return client.get(`api/score/load`, { headers: { 'token': token } });
}