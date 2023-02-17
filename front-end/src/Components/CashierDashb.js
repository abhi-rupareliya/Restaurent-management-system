import React from 'react'
import { useNavigate } from 'react-router-dom'
const CashierDashb = () => {
    const navigate = useNavigate()
    return (
        <div>
            <p>Cashier</p>
            <div>
                <button onClick={(e) => {
                    localStorage.clear()
                    navigate('/login')
                }}>Log Out</button>
            </div>
        </div>
    );
}

export default CashierDashb;
