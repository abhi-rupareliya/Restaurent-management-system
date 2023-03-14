import React from 'react';
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Navbar from "./Navbar";
import FGetMenu from '../Function/F_GetMenu'
import FAddMenu from '../Function/F_AddMenu';
import { FDeleteMenu, FEditMenu } from '../Function/F_EditMenu'
import { useEffect } from 'react';
import SideBar from './SidebarMGR';
// import SideBar from "./SideBar";
const Menu = () => {
    const [open, setOpen] = useState(false);
    const [openDelete, setOpenDelete] = useState(false)
    const [addEdit, setAddEdit] = useState('')
    const cancelButtonRef = useRef(null)
    const [Menu, setMenu] = useState([])
    const [iname, setIname] = useState('')
    const [icat, setICat] = useState('')
    const [iprice, setPrice] = useState('')
    const [iid, setIid] = useState('')
    // const FetchData = ()=>{}
    useEffect(() => {
        FGetMenu().then((res) => setMenu(res))
    }, []);

    const change = async () => {
        if (addEdit === "Add Item") {
            const resp = await FAddMenu({
                item_name: iname,
                item_category: icat,
                item_price: iprice
            })
            FGetMenu().then((res) => setMenu(res))
        } else if (addEdit === "Edit Item") {
            const resp = await FEditMenu({
                _id: iid,
                item_name: iname,
                item_category: icat,
                item_price: iprice
            })
            FGetMenu().then((res) => setMenu(res))
        }
    }
    return (
        <>
            <Navbar title="Menu" />
            <SideBar />
            <div className="grid-cols-6 w-full">
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
                                            setOpen(true)
                                            setIname('')
                                            setICat('')
                                            setPrice('')
                                        }}>Add item</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                                            Price
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        Menu.map((item, key) => {
                                            return (
                                                <tr className="border-b l bg-[#10171e] l border-gray-700">
                                                    <td className="px-6 py-4">
                                                        {key + 1}
                                                    </td>
                                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap l text-white">
                                                        {item.item_name}
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        {item.item_category}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {item.item_price}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <button className="font-medium text-[#f26926] hover:underline" onClick={() => {
                                                            setIname(item.item_name)
                                                            setICat(item.item_category)
                                                            setPrice(item.item_price)
                                                            setIid(item._id)
                                                            setOpen(true)
                                                            setAddEdit("Edit Item")
                                                        }}>Edit</button>
                                                        <button className="font-medium mx-4 text-[#f26926] l hover:underline" onClick={async (e) => {
                                                            e.preventDefault()
                                                            setOpenDelete(true)
                                                            setIid(item._id)
                                                        }} >Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
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
                                                        Delete an Item
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
                                                    e.preventDefault()
                                                    // User confirmation
                                                    const res = await FDeleteMenu(iid) // from iid state.
                                                    FGetMenu().then((res) => setMenu(res))
                                                    setIid('')
                                                    setOpenDelete(false)
                                                }}
                                            >
                                                Yes
                                            </button>
                                            <button
                                                type="button"
                                                className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                                onClick={async (e) => {
                                                    e.preventDefault()
                                                    setOpenDelete(false)
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
                                                        <div className="grid md:grid-cols-2 md:gap-6">
                                                            <div className="relative z-0 w-full mb-6 group">
                                                                <input type="text" name="floating_first_name" value={iname} onChange={(e) => {
                                                                    e.preventDefault()
                                                                    setIname(e.target.value)
                                                                }} id="floating_first_name" onChan className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-non focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                                <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:l  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Item Name</label>
                                                            </div>
                                                            <div className="relative z-0 w-full mb-6 group">
                                                                <input type="text" name="floating_first_name" value={icat} onChange={(e) => {
                                                                    e.preventDefault()
                                                                    setICat(e.target.value)
                                                                }} id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-non focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                                <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:l  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Category</label>
                                                            </div>
                                                            <div className="relative z-0 w-full mb-6 group">
                                                                <input type="Number" name="floating_first_name" value={iprice} onChange={(e) => {
                                                                    e.preventDefault()
                                                                    setPrice(e.target.value)
                                                                }} id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-non focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                                <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:l  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
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
                                                onClick={() => {
                                                    setOpen(false)
                                                    change()
                                                }}
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
}

export default Menu;
