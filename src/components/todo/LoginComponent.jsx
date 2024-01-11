import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './security/AuthContext';


export default function LoginComponent(){

    const[username, setUsername] = useState('user');
    const[password, setPassword] = useState('password');
    const[isSuccess, setIsSuccess] = useState(false);

    const navigate = useNavigate();

    const authContext = useAuth();


    return (
        <div className="Login">
            {isSuccess && <div className='successMessage'>Login Successful</div>}
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div>
                    <button type="button" name="login"
                    onClick= {() => {if(username==='user' && password==='password')
                            {
                            authContext.setIsAuthenticated(true);
                            setIsSuccess(true);
                            navigate(`/welcome/${username}`); // Used Tick
                            }
                            else{
                                authContext.setIsAuthenticated(false);
                                setIsSuccess(false);
                                navigate('/');
                            }
                        }
                    }
                    >Login</button>
                </div>
            </div>
        </div>
    )
};
