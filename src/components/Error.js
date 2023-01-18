import React from "react";

function Error({ message }) {
  return (
    <div className="success container mx-auto">
      <div className="flex justify-center mx-auto border text-gray-900">
        {message}
      </div>
    </div>
  );
}

export default Error;
