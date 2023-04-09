import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./SidebarMGR";
import { useState, useRef ,Fragment } from "react";
import { Transition ,Dialog} from "@headlessui/react";
function AddTable() {
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false)
  const [addEdit, setAddEdit] = useState('')
  const cancelButtonRef = useRef(null)
  const [Menu, setMenu] = useState([])
  const [iname, setIname] = useState('')
  const [icat, setICat] = useState('')
  const [iprice, setPrice] = useState('')
  const [iid, setIid] = useState('')
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
      <Transition.Root show={openDelete} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpenDelete}
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
                        <div className="mt-2">
                          <div className="grid justify-center p-3 md:gap-5">
                            <div className="relative z-0 w-full mb-6 group">
                              Are you sure, you want to delete this item?
                            </div>
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
                      }}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={async (e) => {
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
