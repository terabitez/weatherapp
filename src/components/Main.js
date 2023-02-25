import { Outlet } from "react-router-dom";
import Header from "./Header";

function Main() {
  return (
    <>
      <div className="min-h-full">
        <Header />
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Main;
