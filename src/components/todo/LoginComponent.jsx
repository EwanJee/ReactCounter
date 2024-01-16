import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './security/AuthContext';


export default function LoginComponent(){
    const[isSuccess, setIsSuccess] = useState(false);

    const navigate = useNavigate();

    const authContext = useAuth();

    const[username, setUsername] = useState('user');
    const[password, setPassword] = useState('password');

    async function handleSubmit(){
        if(await authContext.login(username, password)){
            setIsSuccess(true);
            navigate(`/welcome/${username}`);
        }
        else{
            setIsSuccess(false);
        }
    }


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
                    onClick= {() => {
                        handleSubmit();
                        }
                    }
                    >Login</button>
                </div>
            </div>
        </div>
    )
};
