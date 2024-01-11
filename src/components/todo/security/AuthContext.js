import {createContext, useState} from 'react';
import {useContext} from 'react';



//create a Context
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

//Put some state in the context
//Share the created context with other components

export default function AuthProvider({children}){

    const [number, setNumber] = useState(0);
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    // setInterval(
    //     () => setNumber(number + 1),10000
    // )

    return (
        <AuthContext.Provider value={{number, isAuthenticated, setIsAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}