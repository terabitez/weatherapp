import { SunIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

export default function SearchBox(props) {

    const [inputValue, setInputValue] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit(inputValue);
      }
    
      function handleInputChange(event) {
        setInputValue(event.target.value);
      }

    return (
        <form onSubmit={handleSubmit}  className="max-w-sm px-4">
            <div className="relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <input 
                    value={inputValue}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="City"
                    className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                />
            </div>

            <button
                  
                  type="submit"
                  className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 m-5  text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                 { <SunIcon
                    className=" -ml-1 mr-2 h-5 w-5 text-gray-500"
                    aria-hidden="true"
                  />}
                  Display Weather
                </button>
        </form>
    );
}