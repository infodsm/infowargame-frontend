import client from './client';

// user 검색
export const usersearch = ({ search, property, token }) => {
    return client.post(`/api/account/search`, { search, property }, { headers: { 'Authentication': token } });
}

// api/user/search?${column}?${srch}