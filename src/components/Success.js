import React from "react";
import { BiCheck } from "react-icons/bi";

function Success({ message }) {
  return (
    <div className="success container mx-auto">
      <div className="flex justify-center mx-auto border text-gray-900">
        {message} <BiCheck size={24} />
      </div>
    </div>
  );
}

export default Success;
