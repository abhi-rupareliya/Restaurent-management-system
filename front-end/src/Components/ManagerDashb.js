import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./SidebarMGR";
import logo from '../images/logo.png';
// import SideBar from "./SideBar";
import jwt_decode from "jwt-decode"
import { useEffect } from "react";
import { St1, St2 } from "../Function/F_stats"
const ManagerDashb = () => {

   const navigate = useNavigate()
   useEffect(() => {
      if (localStorage.getItem('myToken')) {
         const decoded = jwt_decode(localStorage.getItem('myToken'))
         if (decoded.user.role === 'manager') { }
         else {
            navigate("/cashier/" + decoded.user.id)
         }
      } else {
         navigate('/login')
         console.warn('Login first')
      }
   },)

   const [st1, setSt1] = useState('');
   const [st2, setSt2] = useState('');

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

   const fetchData = async () => {
      const resp1 = await St1()
      const resp2 = await St2()
      setSt2(resp2[0].totalQuantity)
      setSt1(resp1.totalQuantity)
   }

   useEffect(() => {
      fetchData()
   },);
   return (
      <>
         <Navbar title="Manager's Dashboard" />
         <Sidebar />
         <div className="bg-[url('/public/images/dashbackground.jpg')]">
            <div className="bg-black/75 col-span-5 p-4 sm:ml-64 backdrop-blur-sm  min-h-screen">
               <div className="grid grid-cols-3">
                  <div className="flex mx-auto col-span-3">
                     <div className="mx-16 ml-12 max-w-xs rounded-2xl overflow-hidden bg-white">
                        <div className="bg-orange-400">
                           <img className="mx-auto " src={logo} alt="images" />
                        </div>
                        <div className="px-6 py-4">
                           <div className="font-bold text-xl mb-2">Today's selling</div>
                           <p className="text-gray-700 text-base">
                              {st2} items
                           </p>
                        </div>
                     </div>

                     <div className="mx-16 max-w-xs rounded-2xl overflow-hidden bg-white ">
                        <div className="bg-orange-400">
                           <img className="mx-auto " src={logo} alt="images" />
                        </div>
                        <div className="px-6 py-4">
                           <div className="font-bold text-xl mb-2">Total  Sellings..</div>
                           <p className="text-gray-700 text-base">
                              {st1} items
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default ManagerDashb;
