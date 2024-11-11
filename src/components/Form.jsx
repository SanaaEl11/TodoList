import { useState } from "react";
import React from "react";


const Form = ({createTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(value);
    setValue("");
  };

  return (
    <form className="mb-4 font-primary w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        className="outline-none bg-transparent border border-gray-200 p-4 w-[300px] text-gray-500  mb-8 rounded
         placeholder:text-gray-500 text-white"
        placeholder="What task do you have today?"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="bg-violet-900 border-none p-3 text-white cursor-pointer rounded ml-2">
        Add Task
      </button>
    </form>
  );
};


export default Form;

