import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./SidebarMGR";
import { Link } from "react-router-dom";


function OrderDataView() {
    return (
        <>
            <Navbar title="Details" />
            <Sidebar />
            <div className="bg-[url('/public/images/dashbackground.jpg')]">
                <div className="bg-black/75 col-span-5 p-4 sm:ml-64 backdrop-blur-sm  min-h-screen">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white p-5">

                        <p className="pt-5 text-justify">
                            <span className="font-bold">Table Number: </span>
                            Table Number here
                        </p>
                        <hr className="mt-5 border-amber-500" />
                        <p className="pt-5 text-justify">
                            <span className="font-bold">Ordered Items: </span>
                        </p>
                        <hr className="mt-5 border-amber-500" />
                        <p className="pt-5 text-justify">
                            <span className="font-bold">Other Details: </span>
                        </p>
                        <hr className="mt-5 border-amber-500" />
                        <p className="pt-5 text-justify">
                            <span className="font-bold">Return Details: </span>
                        </p>
                        <hr className="mt-5 border-amber-500" />
                        <p className="pt-5 text-justify">
                            <span className="font-bold">Return Details: </span>
                        </p>
                        <hr className="mt-5 border-amber-500" />
                        <p className="pt-5 text-justify">
                            <span className="font-bold">Return Details: </span>
                        </p>
                    </div>
                    <div className="md:w-auto" >
                        <div className="border  rounded-lg md:flex-row md:space-x-8 md:mt-5 md:text-sm md:font-medium md:border-0 mt-5 justify-end">
                            <div className="">
                                <button className="text-white bg-[#f26926] hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 text-center">
                                    Generate Bill</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default OrderDataView;
