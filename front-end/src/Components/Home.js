import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Home = () => {
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem('myToken')) {

        } else {
            navigate('/login')
            console.warn('Login first')
        }
    }, )

    return (
        <div>
            <h1>Logged in</h1>
            <button onClick={(e) => { 
                localStorage.clear()
                navigate('/login') }}>Log Out</button>
        </div>
    );
}

export default Home;
