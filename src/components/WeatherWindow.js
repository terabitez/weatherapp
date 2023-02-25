import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import moment from "moment/moment";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function WeatherWindow() {
  const location = useLocation();

  const navigate = useNavigate();
  const onBack = () => {
    console.log(location.state);
    navigate("/home");
  };

  return (
    <div>
      
      <main className=" min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-20">
        <div className="relative rounded-xl overflow-auto bg-slate-400">
          <div className="shadow-sm overflow-hidden my-8">
            <table className="border-collapse table-auto w-full text-sm">
              <thead>
                <tr>
                  <th className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-700 dark:text-slate-200 text-left">
                    Date (mm/dd/yyyy)
                  </th>
                  <th className="border-b font-medium p-4 pt-0 pb-3 text-slate-700 dark:text-slate-200 text-left">
                    Temp(F)
                  </th>
                  <th className="border-b font-medium p-4 pr-8 pt-0 pb-3 text-slate-700 dark:text-slate-200 text-left">
                    Description
                  </th>
                  <th className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-700 dark:text-slate-200 text-left">
                    Main
                  </th>
                  <th className="border-b font-medium p-4 pt-0 pb-3 text-slate-700 dark:text-slate-200 text-left">
                    Pressure
                  </th>
                  <th className="border-b font-medium p-4 pr-8 pt-0 pb-3 text-slate-700 dark:text-slate-200 text-left">
                    Humidty
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="border-b border-slate-100  p-4 pl-8 text-slate-600">
                 {moment(location.state.coord.dt).format("MM/DD/YYYY")}
                  </td>
                  <td className="border-b border-slate-100  p-4 text-slate-600 ">
                  {location.state.main.temp}
                  </td>
                  <td className="border-b border-slate-100  p-4 pr-8 text-slate-600">
                  {location.state.weather[0].description}
                  </td>
                  <td className="border-b border-slate-100  p-4 pl-8 text-slate-600">
                  {location.state.weather[0].main}
                  </td>
                  <td className="border-b border-slate-100  p-4 text-slate-600">
                  {location.state.main.pressure}
                  </td>
                  <td className="border-b border-slate-100  p-4 pr-8 text-slate-600 ">
                  {location.state.main.humidity}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 mr-0 justify-end gap-x-6 w-full  ">
          <button
            onClick={onBack}
            type="button"
            className=" float-right inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <ChevronLeftIcon
              className="-ml-1 mr-2 h-5 w-5 text-gray-500"
              aria-hidden="true"
            />
            Back
          </button>
        </div>
      </main>
    </div>
  );
}

export default WeatherWindow;
