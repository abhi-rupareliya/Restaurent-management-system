import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./SidebarMGR";
import { Link } from "react-router-dom";

function OrderData() {
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
                <tr className="border-b l bg-[#10171e] l border-gray-700">
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4">6427c9b63138348e1931e76d</td>
                  <td className="px-6 py-4">10</td>
                  <td className="px-6 py-4">01-04-2023</td>
                  <td className="px-6 py-4" >
                    <Link to="/manager/orderdata/data1">
                      <button className="font-medium text-[#f26926] hover:underline"> Detais </button>
                    </Link>
                  </td>
                  {/* <td className="px-6 py-4">123</td> */}
                </tr>
                <tr className="border-b l bg-[#10171e] l border-gray-700">
                  <td className="px-6 py-4">2</td>
                  <td className="px-6 py-4">6403120762dc8b69b826389b</td>
                  <td className="px-6 py-4">4</td>
                  <td className="px-6 py-4">01-04-2023</td>
                  <td className="px-6 py-4" >
                    <Link to="/manager/orderdata/data1">
                      <button className="font-medium text-[#f26926] hover:underline"> Detais </button>
                    </Link>
                  </td>
                  {/* <td className="px-6 py-4">123</td> */}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderData;
