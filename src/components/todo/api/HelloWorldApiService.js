import axios from 'axios'

// export function retrieveHelloWorldBean(){
//     return axios.get('http://localhost:8080/hello-world-bean');
// }


const apliClient = axios.create({
    baseURL: 'http://localhost:8081',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const retrieveHelloWorldBean = (token) => apliClient.get(`/say-hello`,
{
    headers: {
        Authorization: token
    }
});

export const retrieveHelloName = (username) => apliClient.get(`/hello/${username}`);