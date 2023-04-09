import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./SidebarMGR";

function AddTable() {
  return (
    <>
      <Navbar title="Add Table" />
      <Sidebar />
      <div className="bg-[url('/public/images/dashbackground.jpg')]">
        <div className="bg-black/75 col-span-5 p-4 sm:ml-64 backdrop-blur-sm  min-h-screen">
          <div className="grid grid-cols-3 gap-8 justify-items-center gap-y-20">
            <div className="mx-auto max-w-7xl">
              <div className="group relative">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-600 to-pink-600 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                <div className="flex  rounded-xl w-80 h-48 items-top relative justify-center items-center space-x-6 bg-[rgb(255,233,201)] px-7 py-6 leading-none ring-1 ring-gray-900/5">
                  <h1 className="text-4xl font-bold text-[#393b3a] z-10 space-y-2">
                    F1T1
                  </h1>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-7xl">
              <div className="group relative">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-600 to-pink-600 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                <div className="flex  rounded-xl w-80 h-48 items-top relative justify-center items-center space-x-6 bg-[rgb(255,233,201)] px-7 py-6 leading-none ring-1 ring-gray-900/5">
                  <div className="px-10 py-3 flex justify-content-center items-center text-4xl font-bold text-[#393b3a] z-10 space-y-2 border-4 border-dashed border-orange-500 rounded-lg">
                    +
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTable;
