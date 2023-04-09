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
                            <span className="font-bold">Description: </span>
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
                        <hr className="mt-5 border-amber-500" />
                        <p className="pt-5 text-justify">
                            <span className="font-bold">Return Details: </span>
                        </p>
                        <hr className="mt-5 border-amber-500" />
                        <p className="pt-5 text-justify">
                            <span className="font-bold">Return Details: </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderDataView;
