import React from 'react'
import Navbar from './Navbar'
import Sidebar from './SidebarCSR'
const CashierDashb = () => {
    return (
        <>
            <Navbar title="Cashier's Dashboard" />
            <Sidebar />
            <div className="bg-[url('/public/images/dashbackground.jpg')]">
                <div className="bg-black/75 col-span-5 p-4 sm:ml-64 backdrop-blur-sm  min-h-screen">
                </div>
            </div>
        </>
    );
}

export default CashierDashb;
