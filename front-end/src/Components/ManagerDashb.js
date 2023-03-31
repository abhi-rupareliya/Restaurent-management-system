import React from "react";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./SidebarMGR";
import Menu from "./Menu";
import logo from '../images/logo.png';
// import SideBar from "./SideBar";
import jwt_decode from "jwt-decode"
import { useEffect } from "react";
const ManagerDashb = () => {

   const navigate = useNavigate()

   useEffect(() => {
      if (localStorage.getItem('myToken')) {
         const decoded = jwt_decode(localStorage.getItem('myToken'))
         if (decoded.user.role === 'manager') {
         }
         else {
            navigate("/cashier/" + decoded.user.id)
         }
      } else {
         navigate('/login')
         console.warn('Login first')
      }
   },)
   return (
      <>
         <Navbar title="Manager's Dashboard" />
         <Sidebar />
         <div className="bg-[url('/public/images/dashbackground.jpg')]">
            <div className="bg-black/75 col-span-5 p-4 sm:ml-64 backdrop-blur-sm  min-h-screen">

               <div className="flex mx-auto">

                  <div className="mx-10 ml-12 max-w-xs rounded overflow-hidden bg-white">
                     <div className="bg-orange-400">
                        <img className="mx-auto " src={logo} alt="images" />
                     </div>
                     <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p className="text-gray-700 text-base">
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                     </div>
                  </div>

                  <div className="mx-10 max-w-xs rounded overflow-hidden bg-white ">
                     <div className="bg-orange-400">
                        <img className="mx-auto " src={logo} alt="images" />
                     </div>
                     <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p className="text-gray-700 text-base">
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                     </div>
                  </div>

                  <div className="mx-10 max-w-xs rounded overflow-hidden bg-white ">
                     <div className="bg-orange-400">
                        <img className="mx-auto " src={logo} alt="images" />
                     </div>
                     <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p className="text-gray-700 text-base">
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </>
   );
};

export default ManagerDashb;
