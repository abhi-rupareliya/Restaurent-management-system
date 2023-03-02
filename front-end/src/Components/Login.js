import React from 'react'
import { useState } from 'react'
import FLogin from '../Function/F_Login'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../images/logo.png'
// import bg from '../images/loginbg.jpg'

const Login = () => {

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})

    const Submitted = async (e) => {
        e.preventDefault()

        e.preventDefault()

        // Validate form fields
        const errors = {}
        if (!Email) {
            errors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(Email)) {
            errors.email = 'Email is invalid'
        }
        if (!Password) {
            errors.password = 'Password is required'
        } else if (Password.length < 8) {
            errors.password = 'Password must be at least 8 characters'
        }
        if (Object.keys(errors).length > 0) {
            setErrors(errors)
            return
        }

        const res = await FLogin(Email, Password)

        if (res.success) {
            localStorage.setItem('myToken', res.authtoken);
            navigate('/home');
        } else {
            alert(res.message)
        }
    }
    return (
        <section className="Login bg-[url('/public/images/bglogin.jpg')] bg-cover">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <Link to="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 justify-center ">
                        <img className="w-14 mr-5 " src={logo} alt="images" />
                        RestoBite
                    </Link>
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={Submitted}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                <input type="email" name="email" value={Email} onChange={(e) => setEmail(e.target.value)} className={`bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-300'} text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`} placeholder="name@company.com" required />
                                {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input type="password" name="password" value={Password} onChange={(e) => setPassword(e.target.value)} className={`bg-gray-50 border ${errors.password ? 'border-red-500' : 'border-gray-300'} text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`} placeholder="••••••••" required />
                                {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
                            </div>
                            <button type="submit" className="w-full text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                            <p className="text-sm font-light text-gray-500">
                                Don't have an account yet? <Link to='/signup' className="font-medium text-primary-600 hover:underline">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Login;