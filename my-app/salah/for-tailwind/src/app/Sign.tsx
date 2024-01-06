import React from "react";

function SignPage() {
  return (
    <div className="h-screen w-full flex flex-col sm:flex-row justify-center items-center bg-black">
  
    <div className="flex flex-col w-full sm:w-65 md:w-80 lg:w-90 bg-white rounded-lg p-8 shadow-md">
      <form className="flex flex-col space-y-6">
      
        <div>
          <img src="./images/ping_pong.png" alt="logo" className="w-full h-auto mb-4" />
          <h2 className="text-gray-600 font-serif text-3xl">Hello, Welcome back</h2>
        </div>
        <div className="relative">
          <input type="email" id="default_outlined" className="block w-full px-2.5 pb-2.5 pt-4 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
          <label htmlFor="default_outlined" className="absolute text-sm text-[#c9c9c9] dark:text-[#c9c9c9] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-[#c9c9c9] px-2 peer-focus:px-2 peer-focus:text-        [#c9c9c9] peer-focus:dark:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-[12px] peer-focus:scale-75peer-focus:-translate-y-4 start-1         rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Username or email</label>
        </div>
  
        <div className="relative">
          <input type="password" id="default_outlined" className="block w-full px-2.5 pb-2.5 pt-4 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
          <label htmlFor="default_outlined" className="absolute text-sm text-[#c9c9c9] dark:text-[#c9c9c9] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-[#c9c9c9] px-2 peer-focus:px-2 peer-focus:text-        [#c9c9c9] peer-focus:dark:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-[12px] peer-focus:scale-75 peer-focus:-translate-y-4 start-1         rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label>
        </div>
  
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input id="helper-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="helper-checkbox" className="pl-[3px] selection:text-sm font-medium text-gray-600">Remember me</label>
          </div>
          <p className="text-sm font-normal text-gray-500">Forgot password?</p>
        </div>
  
        <button type="submit" className="w-full justify-center rounded-md bg-[#6E7AAE] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus:outline-indigo-600">Login</button>
  
        <p className="text-gray-600 text-center">Don’t have an account? <span className="text-blue-600 cursor-pointer">Click here</span></p>
  
        <div className="flex items-center justify-center border-b-[1px] leading-[0.1em] border-[#c9c9c9]">
          <span className="text-gray-600 bg-white pl-[20px] pr-[20px]">or</span>
        </div>
  
        <button className="w-full justify-center rounded-md bg-white border border-gray-300 text-blue-600 hover:bg-indigo-500">Continue with Google</button>
        <button className="w-full justify-center rounded-md bg-white border border-gray-300 text-blue-600 hover:bg-indigo-500">Continue with Intra</button>
      </form>
      {/* here the second div */}
    </div>
    <div className="bg-[#C94445]">
        <p>other field</p>
    </div>
  </div>
  

);
}

export default SignPage;