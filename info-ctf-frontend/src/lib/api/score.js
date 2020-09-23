import client from './client';

// TOP 50 유저 불러오기
export const showrank = ({ token }) => {
    return client.get(`/api/account/rank`, { headers: { 'Authentication': token } });
}