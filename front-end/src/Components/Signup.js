import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FSignup from '../Function/F_Signup';
const Signup = () => {
    const [userName, setUserName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Role, setRole] = useState("")
    const navigate = useNavigate()
    return (
        <div>
            <label>Enter userName</label><br />
            <input name='userName' onChange={(e) => { setUserName(e.target.value) }} value={userName} />
            <br /><br />
            <label>Enter Email</label><br />
            <input name='email' type='email' onChange={(e) => { setEmail(e.target.value) }} value={Email} />
            <br /><br />
            <label>Enter Password</label><br />
            <input name='password' type='password' onChange={(e) => { setPassword(e.target.value) }} value={Password} />
            <br /><br />
            <label>Enter Role</label><br />
            <input name='role' onChange={(e) => { setRole(e.target.value) }} value={Role} />
            <br /><br />

            <button onClick={async (e) => {
                e.preventDefault()
                if (userName === "" || Email === "" || Password === "" || Role === "") {
                    alert("Enter All Field")
                }
                else {
                    const res = await FSignup(Email, Password, userName, Role)
                    localStorage.setItem("myToken", res.authtoken)
                    navigate('/home')
                    console.warn(res)
                }
            }}>Signup</button><br />
            <Link to='/login'>Already user? Log in</Link>
        </div>
    );
}

export default Signup;