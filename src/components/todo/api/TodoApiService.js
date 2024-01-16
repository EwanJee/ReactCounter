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

export const retrieveAllTodosForUser = 
    (username) => apliClient.get(`/users/${username}/todos`);

export const deleteTodoApi
    = (username, id) => apliClient.delete(`/users/${username}/todos/${id}`);

export const retrieveTodoApi
    = (username, id) => apliClient.get(`/users/${username}/todos/${id}`);

export const updateTodoApi
    = (username, id, todo) => apliClient.put(`/users/${username}/todos/${id}`, todo);

export const createTodoApi
    = (username, todo) => apliClient.post(`/users/${username}/todos`, todo); 
