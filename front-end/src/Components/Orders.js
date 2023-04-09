import React from "react";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Navbar from "./Navbar";
import { useEffect } from "react";
import SideBar from "./SidebarCSR";
import { useNavigate } from "react-router-dom";
import {FGetTables} from "../Function/F_GetTables";
// import SideBar from "./SideBar";
const Orders = () => {
  const [open, setOpen] = useState(false);
  const [addEdit, setAddEdit] = useState("");
  const cancelButtonRef = useRef(null);
  const [Tables, setTables] = useState([]);

  useEffect(() => {
    FGetTables().then((res) => setTables(res));
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <Navbar title="Manage Orders" />
      <SideBar />
      <div className="bg-[url('/public/images/dashbackground.jpg')]">
        <div className="bg-black/75 col-span-5 p-4 sm:ml-64 backdrop-blur-sm  min-h-screen">
          <div className="p-4 border rounded-lg md:space-x-8 md:mt-0  md:font-medium md:border-0 text-[#f06826] text-2xl">
            Take order from the tables
          </div>
          <div className="grid grid-cols-3 gap-8 justify-items-center gap-y-20">
            {Tables.map((table, key) => {
              return (
                <>
                  <div
                    className="mx-auto max-w-7xl"
                    onClick={() => {
                      navigate("/editorders/" + table.tab_id);
                    }}
                  >
                    <div className="group relative">
                      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-600 to-pink-600 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                      <div className="flex  rounded-xl w-80 h-48 items-top relative justify-center items-center space-x-6 bg-[rgb(255,233,201)] px-7 py-6 leading-none ring-1 ring-gray-900/5">
                        <h1 className="text-4xl font-bold text-[#393b3a] z-10 space-y-2">
                          {table.tab_id}
                        </h1>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
