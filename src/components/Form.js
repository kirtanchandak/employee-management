import React from "react";

function Form() {
  return (
    <form action="" className="grid lg:grid-cols-2 w-4/6 gap-5">
      <div className="input-form">
        <input
          type="text"
          name="firstname"
          placeholder="firstname"
          className="border w-full px-5 py-1 rounded-md focus:outline-none"
        />
      </div>
      <div>
        <input
          type="text"
          name="lastname"
          placeholder="lastname"
          className="border w-full px-5 py-1 rounded-md focus:outline-none"
        />
      </div>
      <div>
        <input
          type="text"
          name="email"
          placeholder="email"
          className="border w-full px-5 py-1 rounded-md focus:outline-none"
        />
      </div>
      <div>
        <input
          type="text"
          name="salary"
          placeholder="salary"
          className="border w-full px-5 py-1 rounded-md focus:outline-none"
        />
      </div>
      <div>
        <input
          type="date"
          name="date"
          placeholder="salary"
          className="border w-full px-5 py-1 rounded-md focus:outline-none"
        />
      </div>

      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            type="radio"
            name="status"
            value="Active"
            id="radioDefault1"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="radioDefault1" className="inline-block text-gray-800">
            Active
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            name="status"
            value="inActive"
            id="radioDefault2"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="radioDefault2" className="inline-block text-gray-800">
            Inactive
          </label>
        </div>
        <button className="flex justify-center text-md bg-green-500 text-white px-4 py-1 rounded-3xl border">
          Add
        </button>
      </div>
    </form>
  );
}

export default Form;
