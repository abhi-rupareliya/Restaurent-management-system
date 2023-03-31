import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./SidebarMGR";

function OrderData() {
  return (
    <>
      <Navbar title="Orders" />
      <Sidebar />
      <div className="bg-[url('/public/images/dashbackground.jpg')]">
        <div className="bg-black/75 col-span-5 p-4 sm:ml-64 backdrop-blur-sm  min-h-screen">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-400">
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
                    Year
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b l bg-[#10171e] l border-gray-700">
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4">123</td>
                  <td className="px-6 py-4">123</td>
                  <td className="px-6 py-4">123</td>
                  {/* <td className="px-6 py-4">123</td> */}
                </tr>
                <tr className="border-b l bg-[#10171e] l border-gray-700">
                  <td className="px-6 py-4">2</td>
                  <td className="px-6 py-4">123</td>
                  <td className="px-6 py-4">123</td>
                  <td className="px-6 py-4">123</td>
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
