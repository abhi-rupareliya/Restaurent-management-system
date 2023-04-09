import React from "react"
import Navbar from "./Navbar"
import Sidebar from "./SidebarMGR"
import { useState, useRef, Fragment, useEffect } from "react"
import { Transition, Dialog } from "@headlessui/react"
import { FAddTable, FGetTables } from "../Function/F_GetTables"
import jwt_decode from "jwt-decode"
import { useNavigate } from "react-router-dom"
function AddTable() {

  const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.getItem('myToken')) {
      const decoded = jwt_decode(localStorage.getItem('myToken'))
      if (decoded.user.role === 'manager') { }
      else {
        navigate("/cashier/" + decoded.user.id)
      }
    } else {
      navigate('/login')
      console.warn('Login first')
    }
  },)

  const [openAdd, setOpenAdd] = useState(false)
  const cancelButtonRef = useRef(null)
  const [table, setTable] = useState('')
  const [AllTables, setAll] = useState([])

  useEffect(() => {
    FGetTables().then((res) => setAll(res));
  }, []);

  return (
    <>
      <Navbar title="Add Table" />
      <Sidebar />

      <div className="bg-[url('/public/images/dashbackground.jpg')]">
        <div className="bg-black/75 col-span-5 p-4 sm:ml-64 backdrop-blur-sm  min-h-screen">
          <div className="grid grid-cols-3 gap-8 justify-items-center gap-y-20">
            {
              AllTables.map((tab) => {
                return (
                  <div className="mx-auto max-w-7xl">
                    <div className="group relative">
                      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-600 to-pink-600 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                      <div className="flex  rounded-xl w-80 h-48 items-top relative justify-center items-center space-x-6 bg-[rgb(255,233,201)] px-7 py-6 leading-none ring-1 ring-gray-900/5">
                        <h1 className="text-4xl font-bold text-[#393b3a] z-10 space-y-2">
                          {tab.tab_id}
                        </h1>
                      </div>
                    </div>
                  </div>
                )
              })
            }
            <div className="mx-auto max-w-7xl" onClick={() => {
              setOpenAdd(true)
            }}>
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
      <Transition.Root show={openAdd} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpenAdd}
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
                          Add Table
                        </Dialog.Title>
                        <div className="md:gap-6  m-5">
                          <div className="relative z-0 w-64 mb-6 group">
                            <input type="text" name="floating_first_name" value={table} onChange={(e) => {
                              e.preventDefault()
                              setTable(e.target.value)
                            }} id="floating_first_name" onChan className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-non focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:l  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Table Name</label>
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
                        if (!table) {
                          alert("Please enter table name")
                          return
                        }
                        await FAddTable(table)
                        setTable("")
                        FGetTables().then((res) => setAll(res))
                        setOpenAdd(false)
                      }}
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={async (e) => {
                        setOpenAdd(false)
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

export default AddTable;