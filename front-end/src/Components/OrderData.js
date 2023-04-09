import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./SidebarMGR";
import { Link } from "react-router-dom";
import { FGetAllOrders } from "../Function/F_GetOrders";


function OrderData() {
  const [Data, setData] = useState([]);

  const fetchData = async () => {
    const resp = await FGetAllOrders()
    setData(resp)
  }
  useEffect(() => {
    fetchData()
  }, []);
  return (
    <>
      <Navbar title="Order Data" />
      <Sidebar />
      <div className="bg-[url('/public/images/dashbackground.jpg')]">
        <div className="bg-black/75 col-span-5 p-4 sm:ml-64 backdrop-blur-sm  min-h-screen">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-400">
              <thead className="text-xs text-[#f26926] uppercase bg-[#2d2d2d] l">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    SR.
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Order Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Net Quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    View Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  Data.map((order, key) => {
                    return (
                      <tr className="border-b l bg-[#10171e] l border-gray-700">
                        <td className="px-6 py-4">{key + 1}</td>
                        <td className="px-6 py-4">{order._id}</td>
                        <td className="px-6 py-4">{order.netQuantity}</td>
                        <td className="px-6 py-4">{order.date_time.substring(0, 10)}</td>
                        <td className="px-6 py-4" >
                          <Link to={`/manager/orderdata/${order._id}`}>
                            <button className="font-medium text-[#f26926] hover:underline">Details</button>
                          </Link>
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
    </>
  );
}

export default OrderData;
