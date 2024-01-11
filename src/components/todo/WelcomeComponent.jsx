import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
//import axios from 'axios';
import { retrieveHelloWorldBean, retrieveHelloName } from './api/HelloWorldApiService';

export default function WelcomeComponent(){

    const {username} = useParams();

    const[message, setMessage] = useState('loading...');

    console.log(username);

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

        retrieveHelloName('whatever')
        .then(response => setMessage(response.data.name))
        .catch(error => console.log(error))
        .finally(() => console.log('Finally called'));
    }

    return (
        <div className="WelcomeComponent">
            Welcome {username}
            <div>
                Manage Your todos - <a href="/todos">here</a>
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