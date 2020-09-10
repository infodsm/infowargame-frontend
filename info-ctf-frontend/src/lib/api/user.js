import client from './client';

// user 검색
export const usersearch = ({ column, srch, token }) => {
    return client.get(`/api/user/search?column=${column}&srch=${srch}`, { headers: { 'token': token } });
}

// api/user/search?${column}?${srch}