import SearchBox from "./SearchBox"



function Home() {


    const onSubmit =(data)=>{
        console.log("onsbumithoem")
        console.log(data)
  

    }

   return (
    <>
       <main className="grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8">
        <div className="text-center">
   
          <h4 className="mt-4 font-bold tracking-tight text-gray-900 sm:text-xl">
            Stephen Rojales
        </h4>
          <h4 className="mt-4 font-bold tracking-tight text-gray-900 sm:text-lg">
            githhub.com/terabitez
        </h4>
 
          <div className="mt-10 items-center justify-center gap-x-6 block">
        
                <SearchBox className="p-5" onSubmit={(data)=>onSubmit(data)}/>
               
           
          </div>
        </div>
      </main>
     </>
   )
}

export default Home

