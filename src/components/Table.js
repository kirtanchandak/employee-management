import React from "react";
import { BiEdit, BiTrash } from "react-icons/bi";

function Table() {
  return (
    <div>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-800">
            <th className="px-16 py-2">
              <span className="text-gray-200">Name</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-200">Email</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-200">Salary</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-200">Birthday</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-200">Status</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-200">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-200">
          <tr className="bg-gray-50 text-center">
            <td className="px-16 py-1 flex flex-row items-center">
              <img src="#" alt="" />
              <span className="text-center ml-2 font-semibold">Kirtan</span>
            </td>
            <td className="px-16 py-2">
              <span>kirtanmchandak5@gmail.com</span>
            </td>
            <td className="px-16 py-2">
              <span>$95,000</span>
            </td>
            <td className="px-16 py-2">
              <span>20 Sep 2003</span>
            </td>
            <td className="px-16 py-2">
              <button className="cursor bg-green-500 px-5 rounded-full">
                <span>active</span>
              </button>
            </td>
            <td className="px-16 py-2 flex justify-around gap-2">
              <button className="cursor bg-blue-500 rounded-full py-1 px-1">
                <BiEdit size={25} />
              </button>
              <button className="cursor bg-red-400 rounded-full py-1 px-1">
                <BiTrash size={25} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
