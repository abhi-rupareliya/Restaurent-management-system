import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FGetMenu from '../Function/F_GetMenu';
import FGetOrders from '../Function/F_GetOrders';
import FUpdateOrders, { FAddOrder } from '../Function/F_UpdateOrders';
const EditOrder = () => {
    const id = useParams().tab_id;
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState('');
    const [options, setOptions] = useState([]);
    const [qty, setQty] = useState(1)

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
        console.warn(options);
        fetchData();
    }, []);

    const handleSelect = (event) => {
        setSelectedItem(event.target.value);
    };



    const handleAddItem = async () => {
        try {
            const itemExists = items.some((item) => item.item._id === selectedItem);

            if (itemExists) {
                const updatedItems = items.map((item) => {
                    if (item.item._id === selectedItem) {
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
                await FAddOrder(id, selectedItem, qty)
                fetchData();
            }
        } catch (error) {
            console.warn(error);
        }
    };

    return (
        <>
            <select value={selectedItem} onChange={handleSelect}>
                <option value="">Select an item</option>
                {options.map((option) => (
                    <option key={option._id} value={option._id}>
                        {option.item_name}
                    </option>
                ))}
            </select>
            <input value={qty} onChange={(e) => {
                setQty(e.target.value);
            }} />
            <button onClick={handleAddItem}>Add</button>
            <div className="bg-white flex justify-center px-4 pt-5 pb-4 sm:p-6 sm:pb-4 p-0">
                <div className="sm:flex sm:items-start w-full">
                    <div className="mt-3 text-center sm:mt-0 sm:m-4 sm:text-left w-full">
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
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default EditOrder;
