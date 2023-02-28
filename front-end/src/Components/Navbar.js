import React from 'react'
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Nevbar() {
  const navigate = useNavigate()
  return (
    <nav className="sticky bg-white bg-gray-900 fixed w-full z-20 top-0 left-0 border-b-2 border-gray-200 border-gray-600 border-dashed">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/home" className="flex items-center">
          <img className="w-14 ml-5 mr-5 h-12 w-10" src={logo} alt="images" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap font-thin text-orange-400 ">RestoBite</span>
        </Link>
        <div className="flex md:order-2">
          <div className="w-full md:block md:w-auto" id="navbar-default">
            <ul className="  p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white bg-gray-800 md:bg-gray-900 border-gray-700">
              <li>
                <button onClick={(e) => {
                  localStorage.clear()
                  navigate('/login')
                }} className="w-full mr-5 text-white bg-orange-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 text-center">Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

  )
}
export default Nevbar
