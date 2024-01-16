import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
//import axios from 'axios';
import { retrieveHelloWorldBean } from './api/HelloWorldApiService';
import { Link } from 'react-router-dom';

export default function WelcomeComponent(){

    const {username} = useParams();

    const[message, setMessage] = useState('loading...');

    function callAPI(){
        //axios
        // axios.get('http://localhost:8080/hello-world')
        // .then(response => setMessage(response.data))
        // .then(response => console.log(response))
        // .catch(error => console.log(error)) 
        // .finally(() => console.log('Finally called'));

        // retrieveHelloWorldBean()
        // .then(response => setMessage(response.data))
        // .then(response => console.log(response))
        // .catch(error => console.log(error))
        // .finally(() => console.log('Finally called'));

        retrieveHelloWorldBean()
        .then(response => setMessage(response.data))
        .catch(error => console.log(error))
        .finally(() => console.log('Finally called'));
    }

    return (
        <div className="WelcomeComponent">
            Welcome {username}
            <div>
                Manage Your todos - <Link to="/todos">here</Link>
            </div>
            <div>
                <button className='btn btn-success' onClick={callAPI}>Call Hello World Rest API</button>
            </div>
            <div className='text-info'>
                {message}
            </div>
        </div>
    )
};