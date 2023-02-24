import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FSignup from '../Function/F_Signup'
import logo from '../images/logo.png'

const Signup = () => {
    const [userName, setUserName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Role, setRole] = useState("")
    const navigate = useNavigate()
    return (
            <section className="Signup bg-[url('/public/images/bglogin.jpg')] bg-cover">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <Link to='/home' className="flex items-center text-2xl font-semibold text-gray-900 justify-center ">
                        <img className="w-14 mr-5 " src={logo} alt="images" />
                        RestoBite
                    </Link>
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
                            Sign Up
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Username</label>
                                <input type="username" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" onChange={(e) => { setUserName(e.target.value) }} value={userName}  placeholder="First & Last name" required="" />
                            </div>
                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">What's your work ?</label>
                                <select onChange={(e) => { setRole(e.target.value) }} value={Role} name="Role" id="Role" className='inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100'>
                                    <option value="cashier">Cashier</option>
                                    <option value="manager">Manager</option>
                                </select>                                
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" onChange={(e) => { setEmail(e.target.value) }} value={Email} placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" onChange={(e) => { setPassword(e.target.value) }} value={Password} required="" />
                            </div>
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
                                }}} type="submit" className="w-full text-white bg-orange-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign up</button>
                            <p className="text-sm font-light text-gray-500">
                                You already have an account? <Link to='/login' className="font-medium text-primary-600 hover:underline">Login</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Signup