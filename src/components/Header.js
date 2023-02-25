import { useAuth0 } from "@auth0/auth0-react";
import { UserIcon } from "@heroicons/react/24/outline";
import React from "react";

function Header() {
  const { isAuthenticated, logout } = useAuth0();

  const onLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  return (
    <header className="bg-white shadow ">
      <div className="flex lg:items-center justify-between  p-5">
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
        {!isAuthenticated ? (
          <></>
        ) : (
          <div className=" flex lg:mt-0 lg:ml-4">
            <span className=" sm:block">
              <button
                onClick={onLogout}
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
        )}
      </div>
    </header>
  );
}

export default Header;
