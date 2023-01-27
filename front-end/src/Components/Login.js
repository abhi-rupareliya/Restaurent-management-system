import React from 'react'
import { useState } from 'react'
import FLogin from '../Function/F_Login'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const navigate = useNavigate()
    return  (
        <div>
            <label>Enter Email</label><br />
            <input name='email' type='email' onChange={(e) => { setEmail(e.target.value) }} value={Email} />
            <br />
            <br />
            <label>Enter Password</label><br />
            <input name='password' type='password' onChange={(e) => { setPassword(e.target.value) }} value={Password} />
            <br />
            <br />
            <button onClick={async(e) => {
                e.preventDefault()
                const res =await FLogin(Email, Password)
                
                if(res.success){
                    localStorage.setItem('myToken' , res.authtoken);
                    navigate('/home');
                }else{
                    alert(res.message)
                }

            }}> Login</button>
            <br/>
            <Link to='/signup'>Add new User</Link> 
        </div>
    );
}

export default Login;
