import { apiClient } from './ApiClient';

// export function retrieveHelloWorldBean(){
//     return axios.get('http://localhost:8080/hello-world-bean');
// }


export const retrieveHelloWorldBean = (token) => apiClient.get(`/say-hello`,
{
    headers: {
        Authorization: token
    }
});

export const retrieveHelloName = (username) => apiClient.get(`/hello/${username}`);