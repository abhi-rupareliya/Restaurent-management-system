import React from 'react';
import { useNavigate } from 'react-router-dom';

const ManagerDashb = () => {
    const navigate = useNavigate()
    return (
        <div>
            <p>Welcome bhai</p>
            <div>
                <button onClick={(e) => {
                    localStorage.clear()
                    navigate('/login')
                }}>Log Out</button>
            </div>
        </div>
    );
}

export default ManagerDashb;