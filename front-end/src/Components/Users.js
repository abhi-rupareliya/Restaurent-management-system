import React from 'react'
import Navbar from "./Navbar";
import Sidebar from "./SidebarMGR";
import { useState, useRef, Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";

function Users() {
    const [openAskDelete, setOpenAskDelete] = React.useState(false)
    const cancelButtonRef = useRef(null)

  return (
    <>
        <Navbar title="Users" />
        <Sidebar />
        <div className="bg-[url('/public/images/dashbackground.jpg')]">
            <div className="bg-black/75 col-span-5 p-4 sm:ml-64 backdrop-blur-sm  min-h-screen">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-400" >
                        <thead className="text-xs text-[#f26926] uppercase bg-[#2d2d2d] l">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Sr.
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    User name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    User ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b l bg-[#10171e] l border-gray-700">
                                <td className="px-6 py-4">
                                    1.
                                </td>
                                <td className="px-6 py-4">
                                    Divy Sheta
                                </td>
                                <td className="px-6 py-4">
                                    Divy@123
                                </td>
                                <td className="px-6 py-4" onClick={() => {
                                    setOpenAskDelete(true)
                                }}>
                                    <button className="font-medium text-[#f26926] l hover:underline">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <Transition.Root show={openAskDelete} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpenAskDelete}
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
                          Remove user
                        </Dialog.Title>
                        <div className="md:gap-6  m-5">
                          <div className="relative z-0 w-auto mb-6 group">
                            Are you sure you want to remove this user ?
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row space-x-11 justify-center">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={async (e) => {


                        setOpenAskDelete(false)
                      }}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={async (e) => {
                        setOpenAskDelete(false)
                      }}
                    >
                      No
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default Users
