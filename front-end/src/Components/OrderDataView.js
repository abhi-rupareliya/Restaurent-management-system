import Sidebar from "./SidebarMGR";
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useParams ,useNavigate} from "react-router-dom";
import jwt_decode from "jwt-decode"
function OrderDataView() {

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

    const { _id } = useParams();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await fetch(`http://localhost:4000/orders/${_id}`);
                const data = await response.json();
                if (response.ok) {
                    setOrder(data);
                } else {
                    throw new Error(data.message || 'Failed to fetch order');
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchOrder();
    }, [_id]);

    if (!order) {
        return <div>Loading...</div>;
    }

    let netQuantity = 0;
    let totalPrice = 0;

    order.orders.forEach(orderItem => {
        netQuantity += orderItem.quantity;
        totalPrice += orderItem.quantity * orderItem.item.item_price;
    });

    async function fetchInvoicePdf(orderId) {
        const response = await fetch(`http://localhost:4000/bill/${orderId}`);
        const pdfBlob = await response.blob();
        const pdfUrl = URL.createObjectURL(pdfBlob);
        window.open(pdfUrl, '_blank');
    }

    return (
        <>
            <Navbar title="Details" />
            <Sidebar />
            <div className="bg-[url('/public/images/dashbackground.jpg')]">
                <div className="bg-black/75 col-span-5 p-4 sm:ml-64 backdrop-blur-sm  min-h-screen">
                    <div className="border rounded-lg md:space-x-8 md:mt-0  md:font-medium md:border-0 text-[#f06826] text-2xl">
                        <div className=" flex justify-center px-4 sm:p-6  p-0">
                            <div className="sm:flex sm:items-start w-full">
                                <div className="mt-3 text-center sm:mt-0 sm:m-4 sm:text-left w-full">
                                    <div className="m-3 flex justify-between">

                                        <div className='flex border px-3 py-2 rounded-lg md:flex-row md:space-x-8 md:mt-0  md:font-medium md:border-0 text-[#f06826] text-2xl'>
                                            Date: {order.date_time.substring(0, 10)}
                                            <div className="flex-row mx-2"></div>
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
                                                        Quantity
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Price
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <>
                                                    {
                                                        order.orders.map((itm, key) => {
                                                            return (
                                                                <tr className="border-b l bg-[#10171e] l border-gray-700">
                                                                    <td className="px-6 py-4">
                                                                        {key + 1}
                                                                    </td>
                                                                    <td className="px-6 py-4">
                                                                        {itm.item.item_name}
                                                                    </td>
                                                                    <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap l text-white">
                                                                        {itm.quantity}
                                                                    </td>
                                                                    <td className="px-6 py-4">
                                                                        {itm.item.item_price}
                                                                    </td>

                                                                </tr>
                                                            )
                                                        })
                                                    }

                                                </>

                                            </tbody>
                                        </table>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="flex justify-evenly">
                            <div className=" flex-row ">

                                <div className='flex border px-3 py-2 rounded-lg md:flex-row md:space-x-8 md:mt-0  md:font-normal md:border-0 text-[#f06826] text-2xl'>
                                    Net Quantity:
                                    <div className="flex-row mx-2">{netQuantity}</div>
                                </div>

                            </div>
                            <div className=" flex-row justify-between">

                                <div className='flex border px-3 py-2 rounded-lg md:flex-row md:space-x-8 md:mt-0  md:font-normal md:border-0 text-[#f06826] text-2xl'>
                                    Total Price:
                                    <div className="flex-row mx-2"> {totalPrice} </div>
                                </div>

                            </div>
                            <div className="md:w-auto flex-row" >
                                <div className='flex border px-3 py-2 rounded-lg md:flex-row md:space-x-8 md:mt-0  md:font-normal md:border-0 mr-8'>
                                    <button className="text-white bg-[#f26926] hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 text-center"
                                        onClick={(e) => {
                                            e.preventDefault()
                                            fetchInvoicePdf(order._id)
                                        }}>
                                        Generate Bill</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default OrderDataView;
