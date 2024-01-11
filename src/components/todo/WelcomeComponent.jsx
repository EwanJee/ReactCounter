import React from 'react';
import { useParams } from 'react-router-dom';

export default function WelcomeComponent(){

    const {username} = useParams();

    console.log(username);
    return (
        <div className="WelcomeComponent">
            Welcome {username}
            <div>
                Manage Your todos - <a href="/todos">here</a>
            </div>
        </div>
    )
};