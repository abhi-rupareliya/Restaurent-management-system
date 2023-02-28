import React from 'react'
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Nevbar() {
    const navigate = useNavigate()
  return (
<nav className="bg-white border-gray-200 px-2 sm:px-4  dark:bg-gray-900">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
    <Link to="/home" className="flex items-center">
      <img className="w-14 mr-5 h-12 w-10" src={logo} alt="images" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap font-thin dark:text-orange-400 ">RestoBite</span>
    </Link>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <button  onClick={(e) => {
                    localStorage.clear()
                    navigate('/login')
                }} className="w-full text-white bg-orange-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 text-center">Logout</button>        
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}
export default Nevbar
