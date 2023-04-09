import Sidebar from "./SidebarMGR";
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';


function OrderDataView() {
    const [items, setItems] = useState([]);

    return (
        <>
            <Navbar title="Details" />
            <Sidebar />
            <div className="bg-[url('/public/images/dashbackground.jpg')]">
                <div className="bg-black/75 col-span-5 p-4 sm:ml-64 backdrop-blur-sm  min-h-screen">
                    <div className="border rounded-lg md:space-x-8 md:mt-0  md:font-medium md:border-0 text-[#f06826] text-2xl">
                        <div className=" flex justify-center px-4 sm:p-6  p-0">
                            <div className="sm:flex sm:items-start w-full">
                                <div className="mt-3 text-center sm:mt-0 sm:m-4 sm:text-left w-full">
                                    <div className="m-3 flex justify-between">

                                        <div className='flex border px-3 py-2 rounded-lg md:flex-row md:space-x-8 md:mt-0  md:font-medium md:border-0 text-[#f06826] text-2xl'>
                                            Date:
                                            <div className="flex-row mx-2"> Date here </div>
                                        </div>

                                    </div>

                                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-0">
                                        <table className="w-full text-sm text-left text-gray-400" >
                                            <thead className="text-xs text-[#f26926] uppercase bg-[#2d2d2d] l">
                                                <tr>
                                                    <th scope="col" className="px-6 py-3">
                                                        Sr.
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Item name
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Category
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Quantity
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <>
                                                    <tr className="border-b l bg-[#10171e] l border-gray-700">
                                                        <td className="px-6 py-4">
                                                            {/* {key + 1} */}cfgfg
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {/* {itm.item.item_name} */}cfgncgfn
                                                        </td>
                                                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap l text-white">
                                                            {/* {itm.item.item_price} */}xfhgfjnx
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            <div className="flex flex-row h-10 rounded-lg relative bg-transparent mt-1">
                                                                <button
                                                                    data-action="decrement"
                                                                    className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-l cursor-pointer outline-none"
                                                                    onClick={async () => {
                                                                        
                                                                    }}
                                                                >
                                                                    <span className="m-auto text-2xl font-thin">-</span>
                                                                </button>
                                                                
                                                                <button
                                                                    data-action="increment"
                                                                    className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer"
                                                                    onClick={async (e) => {
                                                                    }}
                                                                >

                                                                    <span className="m-auto text-2xl font-thin">+</span>
                                                                </button>

                                                            </div>
                                                        </td>
                                                        <td className='px-6 py-6'>
                                                            <button className="font-medium text-[#f26926] hover:underline" onClick={async (e) => {
                                                                
                                                            }} >Remove</button>
                                                        </td>
                                                    </tr>
                                                </>
                                                
                                            </tbody>
                                        </table>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="flex justify-evenly">
                            <div className=" flex-row ">

                                <div className='flex border px-3 py-2 rounded-lg md:flex-row md:space-x-8 md:mt-0  md:font-normal md:border-0 text-[#f06826] text-2xl'>
                                    Net Quantity:
                                    <div className="flex-row mx-2"> 15 </div>
                                </div>

                            </div>
                            <div className=" flex-row justify-between">

                                <div className='flex border px-3 py-2 rounded-lg md:flex-row md:space-x-8 md:mt-0  md:font-normal md:border-0 text-[#f06826] text-2xl'>
                                    Total Price:
                                    <div className="flex-row mx-2"> 500 </div>
                                </div>

                            </div>
                            <div className="md:w-auto flex-row" >
                                <div className='flex border px-3 py-2 rounded-lg md:flex-row md:space-x-8 md:mt-0  md:font-normal md:border-0 mr-8'>
                                    <button className="text-white bg-[#f26926] hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 text-center">
                                        Generate Bill</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default OrderDataView;
