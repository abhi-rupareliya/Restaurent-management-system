import React from "react";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
// import SideBar from "./SideBar";

const ManagerDashb = () => {
   const [open, setOpen] = useState(false);
   const [addEdit, setAddEdit] = useState('');
   const cancelButtonRef = useRef(null);

   return (
      <>
         <Navbar />

         <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
         </button>
         <div className="grid-cols-6 w-full">
            <aside id="default-sidebar" className="fixed  z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-black/90 backdrop-blur-sm " aria-label="Sidebar">
               <div className="col-span-1 h-full px-3 py-4 overflow-y-auto l">
                  <ul className="space-y-2">
                     <li>
                        <a href="#" className="flex items-center p-2 text-base font-normal rounded-lg l text-white l hover:text-white hover:bg-gradient-to-r from-[#f26926] to-orange-400">
                           <svg aria-hidden="true" className="w-6 h-6 transition duration-75 l text-gray-400 l group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                           <span className="ml-3">Dashboard</span>
                        </a>
                     </li>
                     <li>
                        <a href="#" className="flex items-center p-2 text-base font-normal rounded-lg l text-white l hover:text-white hover:bg-gradient-to-r from-[#f26926] to-orange-400">
                           <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 transition duration-75 l text-gray-400 l group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                           <span className="flex-1 ml-3 whitespace-nowrap">Modify Menu</span>
                        </a>
                     </li>
                     <li>
                        <a href="#" className="flex items-center p-2 text-base font-normal rounded-lg l text-white l hover:text-white hover:bg-gradient-to-r from-[#f26926] to-orange-400">
                           <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 transition duration-75 l text-gray-400 l group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                           <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                        </a>
                     </li>
                     <li>
                        <a href="#" className="flex items-center p-2 text-base font-normal rounded-lg l text-white l hover:text-white hover:bg-gradient-to-r from-[#f26926] to-orange-400">
                           <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 transition duration-75 l text-gray-400 l group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                           <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
                        </a>
                     </li>
                     <li>
                        <a href="#" className="flex items-center p-2 text-base font-normal rounded-lg l text-white l hover:text-white hover:bg-gradient-to-r from-[#f26926] to-orange-400">
                           <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 transition duration-75 l text-gray-400 l group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                           <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
                        </a>
                     </li>
                     <li>
                        <a href="#" className="flex items-center p-2 text-base font-normal rounded-lg l text-white l hover:text-white hover:bg-gradient-to-r from-[#f26926] to-orange-400">
                           <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 transition duration-75 l text-gray-400 l group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                           <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
                        </a>
                     </li>
                     <li>
                        <a href="#" className="flex items-center p-2 text-base font-normal rounded-lg l text-white l hover:text-white hover:bg-gradient-to-r from-[#f26926] to-orange-400">
                           <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 transition duration-75 l text-gray-400 l group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
                           <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
                        </a>
                     </li>
                  </ul>
               </div>
            </aside>

            <div className="bg-[url('/public/images/dashbackground.jpg')] ">
               <div className="bg-black/75 col-span-5 p-4 sm:ml-64 backdrop-blur-sm  min-h-screen">
                  <div className="flex justify-between">
                     <div className="p-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0  md:font-medium md:border-0 text-[#f06826] text-2xl">
                        Menu
                     </div>
                     <div className="md:block md:w-auto" >
                        <ul className="p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                           <li>
                              <button className="text-white bg-[#f26926] hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 text-center" onClick={() => {
                              setAddEdit("Add Item") 
                              setOpen(true)}}>Add item</button>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                     <table className="w-full text-sm text-left text-gray-400" >
                        <thead className="text-xs text-[#f26926] uppercase bg-[#2d2d2d] l">
                           <tr>
                              <th scope="col" className="px-6 py-3">
                                 #
                              </th>
                              <th scope="col" className="px-6 py-3">
                                 Item name
                              </th>
                              <th scope="col" className="px-6 py-3">
                                 Category
                              </th>
                              <th scope="col" className="px-6 py-3">
                                 Price
                              </th>
                              <th scope="col" className="px-6 py-3">
                                 Action
                              </th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr className=" border-b l bg-[#10171e] l border-gray-700">
                              <td className="px-6 py-4">
                                 1
                              </td>
                              <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap l text-white">
                                 Aloo Subzi
                              </th>
                              <td className="px-6 py-4">
                                 vegetables
                              </td>
                              <td className="px-6 py-4">
                                 120
                              </td>
                              <td className="px-6 py-4">
                                 <button className="font-medium text-[#f26926] hover:underline" onClick={() => {
                                    setOpen(true)
                                    setAddEdit("Edit Item")
                                 }}>Edit</button>
                                 <button href="#" className="font-medium mx-4 text-[#f26926] l hover:underline" >Delete</button>
                              </td>
                           </tr>
                           <tr className="border-b l bg-[#10171e] l border-gray-700">
                              <td className="px-6 py-4">
                                 2
                              </td>
                              <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap l text-white">
                                 Masala Dosa
                              </th>
                              <td className="px-6 py-4">
                                 South Indian
                              </td>
                              <td className="px-6 py-4">
                                 70
                              </td>
                              <td className="px-6 py-4" >
                                 <button href="#" className="font-medium text-[#f26926] l hover:underline" onClick={() => {
                                    setOpen(true)
                                    setAddEdit("Edit Item")
                                 }}>Edit</button>
                                 <button href="#" className="font-medium mx-4 text-[#f26926] l hover:underline" >Delete</button>
                              </td>
                              
                           </tr>
                           <tr className="bg-[#10171e]">
                              <td className="px-6 py-4">
                                 3
                              </td>
                              <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap l text-white">
                                 Paneer Bhurji
                              </th>
                              <td className="px-6 py-4">
                                 Punjabi
                              </td>
                              <td className="px-6 py-4">
                                 $99
                              </td>
                              <td className="px-6 py-4" >
                                 <button href="#" className="font-medium text-[#f26926] l hover:underline" onClick={() => {
                                    setAddEdit("Edit Item")
                                    setOpen(true)
                                 }}>Edit</button>
                                 <button href="#" className="font-medium mx-4 text-[#f26926] l hover:underline" >Delete</button>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
            <Transition.Root show={open} as={Fragment}>
               <Dialog
                  as="div"
                  className="relative z-10"
                  initialFocus={cancelButtonRef}
                  onClose={setOpen}
               >
                  <Transition.Child
                     as={Fragment}
                     enter="ease-out duration-300"
                     enterFrom="opacity-0"
                     enterTo="opacity-100"
                     leave="ease-in duration-200"
                     leaveFrom="opacity-100"
                     leaveTo="opacity-0"
                  >
                     <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm transition-opacity" />
                  </Transition.Child>
                  <div className="fixed inset-0 z-10 overflow-y-auto">
                     <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                           as={Fragment}
                           enter="ease-out duration-300"
                           enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                           enterTo="opacity-100 translate-y-0 sm:scale-100"
                           leave="ease-in duration-200"
                           leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                           leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                           <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 content-center " >
                                 <div className="flex justify-center">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                       <Dialog.Title
                                          as="h3"
                                          className="text-lg font-bold text-center leading-6 text-gray-900"
                                       >
                                          {addEdit}
                                       </Dialog.Title>
                                       <div className="mt-2">
                                          <div class="grid md:grid-cols-2 md:gap-6">
                                             <div class="relative z-0 w-full mb-6 group">
                                                <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-non focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:l  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Item Name</label>
                                             </div>
                                             <div class="relative z-0 w-full mb-6 group">
                                                <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-non focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:l  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Category</label>
                                             </div>
                                             <div class="relative z-0 w-full mb-6 group">
                                                <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-non focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:l  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                                             </div>

                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row justify-center">
                                 <button
                                    type="button"
                                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => setOpen(false)}
                                 >
                                    Save
                                 </button>
                              </div>
                           </Dialog.Panel>
                        </Transition.Child>
                     </div>
                  </div>
               </Dialog>
            </Transition.Root>
         </div>
      </>
   );
};

export default ManagerDashb;
