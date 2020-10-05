import client from './client';

// user 검색
export const searchuser = ({ search, property, token }) => {
    return client.post(`/api/account/searchuser`, { search, property }, { headers: { "Authentication": token } });
}

// api/user/search?${column}?${srch}