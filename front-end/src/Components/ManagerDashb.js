import React from "react";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./SidebarMGR"; 
import Menu from "./Menu";
// import SideBar from "./SideBar";

const ManagerDashb = () => {


   return (
      <>
         <Navbar title="Manager's Dashboard" />
         <Sidebar />
         <div className="bg-[url('/public/images/dashbackground.jpg')]">
            <div className="bg-black/75 col-span-5 p-4 sm:ml-64 backdrop-blur-sm  min-h-screen">
            </div>
         </div>
      </>
   );
};

export default ManagerDashb;
