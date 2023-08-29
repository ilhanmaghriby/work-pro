import React from "react";

const Input = ({ title, type, name, change, value }) => {
  return (
    <>
      <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {title}
      </label>
      <input
        onChange={change}
        value={value}
        type={type}
        name={name}
        className="block w-full p-2 text-gray-900 border border-black rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </>
  );
};

export default Input;
