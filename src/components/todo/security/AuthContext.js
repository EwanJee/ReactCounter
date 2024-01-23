import {createContext, useState} from 'react';
import {useContext} from 'react';
import {retrieveHelloWorldBean} from '../api/HelloWorldApiService';
import { apiClient } from '../api/ApiClient';




//create a Context
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

//Put some state in the context
//Share the created context with other components

export default function AuthProvider({children}){

    //const [number, setNumber] = useState(0);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [username, setUsername] = useState('');

    const [token, setToken] = useState('');


    // setInterval(
    //     () => setNumber(number + 1),10000
    // )

    async function login(username, password){

        const basicToken = 'Basic ' + window.btoa(username + ':' + password);

        try {

        const response = await retrieveHelloWorldBean(basicToken)

        if(response.status === 200){
            setIsAuthenticated(true);
            setUsername(username);
            setToken(basicToken);
            
            apiClient.interceptors.request.use(
                (config) => {
                    console.log('interceptor request');
                    config.headers.Authorization = basicToken;
                    return config;
                }
            )

            return true;
        }
        else{
            setIsAuthenticated(false);
            setUsername('');
            setToken('');
            return false;
        }
        }
        catch(error){
            logout();
            return false;
        }
    }

    function logout(){
        setUsername('');
        setIsAuthenticated(false);
        setToken('');
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout, username, token}}>
            {children}
        </AuthContext.Provider>
    )
}