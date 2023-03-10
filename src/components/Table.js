import React from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { getUsers } from "@/lib/helper";
import { useQuery } from "react-query";
import { useSelector, useDispatch } from "react-redux";
import { toggleChangeAction } from "@/redux/reducer";

function Table() {
  const { isLoading, isError, data, error } = useQuery("users", getUsers);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error}</div>;

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
          {data.map((obj, i) => (
            <Tr {...obj} key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Tr({ id, name, avatar, email, salary, date, status }) {
  const dispatch = useDispatch();
  const visible = useSelector((state) => state.app.client.toggleForm);
  const onUpdate = () => {
    dispatch(toggleChangeAction());
    console.log(visible);
  };
  return (
    <tr className="bg-gray-50 text-center">
      <td className="px-16 py-1 flex flex-row items-center">
        <img
          src={avatar || "#"}
          alt=""
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="text-center ml-2 font-semibold">
          {name || "unknown"}
        </span>
      </td>
      <td className="px-16 py-2">
        <span>{email || "unknown"}</span>
      </td>
      <td className="px-16 py-2">
        <span>{salary || "unknown"}</span>
      </td>
      <td className="px-16 py-2">
        <span>{date || "unknown"}</span>
      </td>
      <td className="px-16 py-2">
        <button
          className={`cursor ${
            status == "active" ? "bg-green-500" : "bg-red-500"
          }  px-5 rounded-full`}
        >
          <span>{status || "unknown"}</span>
        </button>
      </td>
      <td className="px-16 py-2 flex justify-around gap-2">
        <button
          className="cursor bg-blue-500 rounded-full py-1 px-1"
          onClick={onUpdate}
        >
          <BiEdit size={25} />
        </button>
        <button className="cursor bg-red-400 rounded-full py-1 px-1">
          <BiTrash size={25} />
        </button>
      </td>
    </tr>
  );
}

export default Table;
