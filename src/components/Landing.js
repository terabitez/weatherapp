import { UserIcon } from "@heroicons/react/24/outline"
import { useNavigate } from "react-router-dom"



function Landing() {

    const navigate = useNavigate();
    
    const LoginClick =()=>{
        console.log("onligin")
        navigate('/home')
    }   

   return (
     <>
       <main className="grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8">
        <div className="text-center">
   
          <h4 className="mt-4 font-bold tracking-tight text-gray-900 sm:text-xl">
            Welcome to the weather forcast web application. Please login with your Github user to use the application and view the wearther in your city.
        </h4>
 
          <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
                  onClick={LoginClick}
                  type="button"
                  className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <UserIcon
                    className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                    aria-hidden="true"
                  />
                  Login
                </button>
           
          </div>
        </div>
      </main>
     </>
   )
}

export default Landing

