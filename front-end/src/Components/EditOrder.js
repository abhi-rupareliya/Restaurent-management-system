import React, { useEffect, useState } from 'react';
import { Fragment, useRef } from "react";
import { Dialog, Transition, Menu } from "@headlessui/react";
import Navbar from './Navbar';
import SideBar from './SidebarCSR';
import { useParams, useNavigate } from 'react-router-dom';
import FGetMenu from '../Function/F_GetMenu';
import {FGetOrders} from '../Function/F_GetOrders';
import FUpdateOrders, { FAddOrder, FDeleteOrder } from '../Function/F_UpdateOrders';
import { ChevronDownIcon } from '@heroicons/react/20/solid'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const EditOrder = () => {
    const id = useParams().tab_id;
    const [openDelete, setOpenDelete] = useState(false)
    const cancelButtonRef = useRef(null)
    const [items, setItems] = useState([]);
    const [deleteId, setDelId] = useState('')
    const [selectedItem, setSelectedItem] = useState('Select an Item');
    const [options, setOptions] = useState([]);
    const [qty, setQty] = useState(1)
    const navigate = useNavigate()

    const fetchData = async () => {
        try {
            const res = await FGetOrders(id)
            setItems(res.orders)
            const data2 = await FGetMenu();
            setOptions(data2);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    const handleSelect = (event) => {
        setSelectedItem(event.target.value);
    };

    const handleAddItem = async () => {
        if (selectedItem === "Select an Item") {
            alert("Please select an item.")
            return;
        }
        try {
            const itemExists = items.some((item) => item.item._id === selectedItem._id);

            if (itemExists) {
                const updatedItems = items.map((item) => {
                    if (item.item._id === selectedItem._id) {
                        return {
                            ...item,
                            quantity: parseInt(item.quantity) + parseInt(qty),
                        };
                    }
                    return item;
                });
                await FUpdateOrders(id, updatedItems);
                fetchData();
            } else {
                await FAddOrder(id, selectedItem._id, qty)
                fetchData();
            }
        } catch (error) {
            console.warn(error);
        }
    };

    const handleDeleteItem = async (oid) => {
        try {
            const res = await FDeleteOrder(id, oid)
            fetchData()
        } catch (error) {
            console.warn(error);
        }
    };

    return (
        <>
            <Navbar title="Take Orders" />
            <SideBar />
            <div className="bg-[url('/public/images/dashbackground.jpg')]">
                <div className="bg-black/75 col-span-5 p-4 sm:ml-64 backdrop-blur-sm  min-h-screen">
                    <div className="border rounded-lg md:space-x-8 md:mt-0  md:font-medium md:border-0 text-[#f06826] text-2xl">
                        <div className=" flex justify-center px-4 pb-4 sm:p-6 sm:pb-4 p-0">
                            <div className="sm:flex sm:items-start w-full">
                                <div className="mt-3 text-center sm:mt-0 sm:m-4 sm:text-left w-full">
                                    <div className="m-3 flex justify-between">
                                        <div className=" border rounded-lg md:flex-row md:space-x-8 md:mt-0  md:font-medium md:border-0 text-[#f06826] text-2xl">
                                            {/* <select className='bg-transparent' value={selectedItem} onChange={handleSelect}> */}
                                            <Menu as="div" className="relative inline-block text-left">
                                                <div>
                                                    <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 md:font-medium  rounded-md text-[#f06826] bg-transparent px-3 py-2 font-semiboldshadow-sm">
                                                        {!selectedItem.item_name ? "Select an Item" : selectedItem.item_name}
                                                        <ChevronDownIcon className="-mr-1 h-5 w-5 mt-2 text-[#f06826]" aria-hidden="true" />
                                                    </Menu.Button>
                                                </div>

                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items className="absolute z-10 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        <div className="py-1" >
                                                            {options.map((option) => (
                                                                <Menu.Item>
                                                                    {({ active }) => (
                                                                        <a
                                                                            href="#"
                                                                            onClick={() => {
                                                                                setSelectedItem(option);
                                                                            }}
                                                                            className={classNames(
                                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                                'block px-4 py-2 text-sm'
                                                                            )}
                                                                        >
                                                                            {option.item_name}
                                                                        </a>
                                                                    )}
                                                                </Menu.Item>
                                                            ))}
                                                        </div>
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </div>
                                        <div className='border px-3 py-2 rounded-lg md:flex-row md:space-x-8 md:mt-0  md:font-medium md:border-0 text-[#f06826] text-2xl'>
                                            Quantity:
                                            <input className='bg-transparent mx-3' value={qty} onChange={(e) => {
                                                setQty(e.target.value);
                                            }} />
                                        </div>
                                        <div className="md:w-auto place-self-center" >
                                            <ul className=" border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                                                <li>
                                                    <button className="text-white bg-[#f26926] hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 text-center" onClick={handleAddItem}>
                                                        Add</button>
                                                </li>
                                            </ul>
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
                                                {
                                                    items.map((itm, key) => {
                                                        return (
                                                            <>
                                                                <tr className="border-b l bg-[#10171e] l border-gray-700">
                                                                    <td className="px-6 py-4">
                                                                        {key + 1}
                                                                    </td>
                                                                    <td className="px-6 py-4">
                                                                        {itm.item.item_name}
                                                                    </td>
                                                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap l text-white">
                                                                        {itm.item.item_price}
                                                                    </th>
                                                                    <td className="px-6 py-4">
                                                                        <div className="flex flex-row h-10 rounded-lg relative bg-transparent mt-1">
                                                                            <button
                                                                                data-action="decrement"
                                                                                className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-l cursor-pointer outline-none"
                                                                                onClick={async () => {
                                                                                    const updatedItems = items.map((item) => {
                                                                                        if (item.item._id === itm.item._id) {
                                                                                            return {
                                                                                                ...item,
                                                                                                quantity: parseInt(item.quantity) - parseInt(1),
                                                                                            };
                                                                                        }
                                                                                        return item;
                                                                                    });
                                                                                    await FUpdateOrders(id, updatedItems)
                                                                                    fetchData()
                                                                                }}
                                                                            >
                                                                                <span className="m-auto text-2xl font-thin">-</span>
                                                                            </button>
                                                                            <input
                                                                                type="number"
                                                                                className="w-10 pl-[0.4rem] outline-none focus:outline-none text-center bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-base cursor-default text-gray-700"
                                                                                name="custom-input-number"
                                                                                value={itm.quantity}
                                                                                readOnly
                                                                            />
                                                                            <button
                                                                                data-action="increment"
                                                                                className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer"
                                                                                onClick={async (e) => {
                                                                                    const updatedItems = items.map((item) => {
                                                                                        if (item.item._id === itm.item._id) {
                                                                                            return {
                                                                                                ...item,
                                                                                                quantity: parseInt(item.quantity) + parseInt(1),
                                                                                            };
                                                                                        }
                                                                                        return item;
                                                                                    });
                                                                                    await FUpdateOrders(id, updatedItems)
                                                                                    fetchData()
                                                                                }}
                                                                            >

                                                                                <span className="m-auto text-2xl font-thin">+</span>
                                                                            </button>

                                                                        </div>
                                                                    </td>
                                                                    <td className='px-6 py-6'>
                                                                        <button className="font-medium text-[#f26926] hover:underline" onClick={async (e) => {
                                                                            setOpenDelete(true)
                                                                            setDelId(itm._id)
                                                                            // console.warn(itm._id)
                                                                        }} >Remove</button>
                                                                    </td>
                                                                </tr>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>

                                    </div>
                                    <button className="text-white bg-[#f26926] hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 text-center" onClick={async (e) => {
                                        e.preventDefault()
                                        const res = await fetch("http://localhost:4000/SaveOrder/" + id, {
                                            method: "POST",
                                            headers: {
                                                "Content-Type": "application/json",
                                                "myToken": localStorage.getItem("myToken")
                                            },
                                            body: JSON.stringify(Menu)
                                        });
                                        const json = await res.json()
                                        navigate('/cashier/takeorders')

                                    }}>Save</button>
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
                                        <div className="bg-white px-4 pb-4 sm:p-6 sm:pb-4 content-center " >
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
                                                    handleDeleteItem(deleteId)
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
            </div >

        </>
    );
}

export default EditOrder;