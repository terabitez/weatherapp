

import {
 
  UserIcon,
} from "@heroicons/react/20/solid";
import Landing from "./components/Landing";


function App() {


  function handleButtonClick() {
 
  }

  return (
    <>
     
      <div className="min-h-full">
        <header className="bg-white shadow ">
          <div className="lg:flex lg:items-center lg:justify-between  p-5">
            <div className="min-w-0 flex-1">
              <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-8"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                  Weather Forcast
                </h2>
              </div>
            </div>
            <div className="mt-5 flex lg:mt-0 lg:ml-4">
              <span className="hidden sm:block">
                <button
                  onClick={handleButtonClick}
                  type="button"
                  className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <UserIcon
                    className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                    aria-hidden="true"
                  />
                  Logout
                </button>
              </span>
            </div>
          </div>
          
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      
            <div className="px-4 py-6 sm:px-0">
   

            <Landing />


            </div>
     
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
