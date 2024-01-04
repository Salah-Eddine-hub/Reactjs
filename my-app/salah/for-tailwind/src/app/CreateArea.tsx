'use client'
import React from "react";

function CreateArea() {

  return (
      <div className="h-[100vh] w-full sm:w-12/12  flex flex-row justify-center items-center">

{/* here the log setup */}
            <div className=" bg-[#C94445] w-[35%] sm:h-[75vh] hidden md:block">
              <div>
                <img src="./images/ping_pong.png" alt="logo" />
              </div>
            </div>
{/* this is the right side where the form should be field */}

                  <form className="bg-[#6E7AAE] w-full md:w-[60%] h-[75vh] grid        grid-row-8 grid-cols-2 gap-5 pl-[40px] pr-[40px]" >
                            <div className="col-start-1 self-center col-span-2" >
                              <h2 className="text-[#C9C9C9] font-serif text-3xl">Create Account</h2>
                            </div>
                            <div className="self-center col-span-1 relative bg-inherit border-[1px] border-[#c9c9c9] rounded-[10px] w-[50%]">
                                <input type="text" id="default_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500        focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                <label htmlFor="default_outlined" className="absolute text-sm text-[#c9c9c9] dark:text-[#c9c9c9] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#6E7AAE] dark:bg-[#c9c9c9] px-2 peer-focus:px-2 peer-focus:text-        [#c9c9c9] peer-focus:dark:text-[#c9c9c9] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-[5px] peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">first name</label>
                            </div>
                            <div className="self-center col-span-1 relative bg-inherit border-[1px] border-[#c9c9c9] rounded-[10px] w-[50%]">
                                <input type="text" id="default_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500        focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                <label htmlFor="default_outlined" className="absolute text-sm text-[#c9c9c9] dark:text-[#c9c9c9] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#6E7AAE] dark:bg-[#c9c9c9] px-2 peer-focus:px-2 peer-focus:text-        [#c9c9c9] peer-focus:dark:text-[#c9c9c9] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-[5px] peer-focus:scale-75 peer-focus:-translate-y-4 start-1         rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">last name</label>
                            </div>
                            <div className="self-center col-span-2 relative bg-inherit border-[1px] border-[#c9c9c9] rounded-[10px] w-[80%]">
                                <input type="email" id="default_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500        focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                <label htmlFor="default_outlined" className="absolute text-sm text-[#c9c9c9] dark:text-[#c9c9c9] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#6E7AAE] dark:bg-[#c9c9c9] px-2 peer-focus:px-2 peer-focus:text-        [#c9c9c9] peer-focus:dark:text-[#c9c9c9] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-[5px] peer-focus:scale-75 peer-focus:-translate-y-4 start-1         rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">email</label>
                            </div>
                            <div className="self-center col-span-2 relative bg-inherit border-[1px] border-[#c9c9c9] rounded-[10px] w-[80%]">
                                <input type="password" id="default_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500        focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                <label htmlFor="default_outlined" className="absolute text-sm text-[#c9c9c9] dark:text-[#c9c9c9] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#6E7AAE] dark:bg-[#c9c9c9] px-2 peer-focus:px-2 peer-focus:text-        [#c9c9c9] peer-focus:dark:text-[#c9c9c9] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-[5px] peer-focus:scale-75 peer-focus:-translate-y-4 start-1         rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">password</label>
                            </div>
                            <div className="self-center col-span-2 relative bg-inherit border-[1px] border-[#c9c9c9] rounded-[10px] w-[80%]">
                                <input type="password" id="default_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500        focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                <label htmlFor="default_outlined" className="absolute text-sm text-[#c9c9c9] dark:text-[#c9c9c9] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#6E7AAE] dark:bg-[#c9c9c9] px-2 peer-focus:px-2 peer-focus:text-        [#c9c9c9] peer-focus:dark:text-[#c9c9c9] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-[5px] peer-focus:scale-75 peer-focus:-translate-y-4 start-1         rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">confirm password</label>
                            </div>
                            <div className="self-center col-span-2"> 
                            <h2 className="w-[100px] text-center border-b-[1px] leading-[0.1em] border-b-black">
                              <span className="bg-[#6E7AAE] pl-[20px] pr-[20px]">or</span> 
                              </h2> 
                            </div>

                            <div className="col-span-2 flex gap-40 items-center justify-center">
                              <button type="button" className="bg-[#6E7AAE]">Sign up with Google</button>
                              <button type="button" className="bg-[white]">Sign up with Intra</button>
                            </div>
                  </form>

            </div>
  );
}

export default CreateArea;
