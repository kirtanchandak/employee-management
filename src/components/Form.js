import React from "react";
import { useReducer } from "react";
import { BiPlus } from "react-icons/bi";
import Success from "./Success";
import Error from "./Error";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

function Form() {
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    if (Object.keys(formData).length == 0)
      return console.log("Please fill the form");
  };

  if (Object.keys(formData).length > 0)
    return <Success message="Form Data is Added!" />;
  return (
    <form
      action=""
      className="grid lg:grid-cols-2 w-4/6 gap-5"
      onSubmit={handleSubmit}
    >
      <div className="input-form">
        <input
          type="text"
          name="firstname"
          placeholder="firstname"
          className="border w-full px-5 py-1 rounded-md focus:outline-none"
          onChange={setFormData}
        />
      </div>
      <div>
        <input
          type="text"
          name="lastname"
          placeholder="lastname"
          className="border w-full px-5 py-1 rounded-md focus:outline-none"
          onChange={setFormData}
        />
      </div>
      <div>
        <input
          type="text"
          name="email"
          placeholder="email"
          className="border w-full px-5 py-1 rounded-md focus:outline-none"
          onChange={setFormData}
        />
      </div>
      <div>
        <input
          type="text"
          name="salary"
          placeholder="salary"
          className="border w-full px-5 py-1 rounded-md focus:outline-none"
          onChange={setFormData}
        />
      </div>
      <div>
        <input
          type="date"
          name="date"
          placeholder="salary"
          className="border w-full px-5 py-1 rounded-md focus:outline-none"
          onChange={setFormData}
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
            onChange={setFormData}
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
            onChange={setFormData}
          />
          <label htmlFor="radioDefault2" className="inline-block text-gray-800">
            Inactive
          </label>
        </div>
        <button className="flex justify-center text-md bg-green-500 text-white px-4 py-1 rounded-3xl border">
          Add
          <BiPlus size={24} className="ml-1" />
        </button>
      </div>
    </form>
  );
}

export default Form;
