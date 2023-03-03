import React from 'react'
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Navbar(props) {
  const navigate = useNavigate()
  return (
    <nav className="sticky w-full z-20 top-0 left-0 m-0 bg-gradient-to-r from-black via-[hsl(33,56%,17%)] to-black shadow-lg">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/home" className="flex items-center">
          <img className="ml-5 mr-5 h-12 w-10" src={logo} alt="images" />
          <span className="self-center text-2xl whitespace-nowrap font-thin text-[#f26926] ">RestoBite</span>
        </Link>
        <div className="flex md:order-2 text-white underline decoration-[#f26926] text-3xl">
          {props.title}
        </div>
        <div className="flex md:order-2">
          <div className="w-full md:block md:w-auto" id="navbar-default">
            <ul className="p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              <li>
                <button onClick={(e) => {
                  localStorage.clear()
                  navigate('/login')
                }} className="w-full text-white bg-[#f26926] hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 text-center">Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

  )
}
export default Navbar
