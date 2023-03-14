import React from 'react';
import Navbar from './Navbar';
import Sidebar from './SidebarMGR';
import { useEffect, useState } from 'react';
import FGetTables from '../Function/F_GetTables';
const Tables = () => {
    useEffect(() => {
        FGetTables().then((res) => setTables(res))
    }, []);

    //states
    const [Tables, setTables] = useState([])
    const [orders, setOrders] = useState()
    const [tid, setTid] = useState()

    return (
        <>
            <Navbar title="Waiter's Dashboard" />
            <Sidebar />
            <div>
                {
                    Tables.map((table, key) => {
                        return (
                            <div className="w-full text-white bg-[#f26926] hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 text-center"
                                onClick={() => {
                                    setTid(table.tab_id)
                                    setOrders(table.orders)
                                }}>{table.tab_id}</div>
                        )
                    })
                }
            </div>

        </>
    );
}

export default Tables;