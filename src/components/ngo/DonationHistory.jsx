import React from "react";
import NGOSideBar from "../../views/NGOSideBar";

const DonationHistory = () => {
  return (
    <div className="flex bg-[#D5C6FF] justify-between">
      <NGOSideBar />
      <div className="right-box bg-[#D5C6FF] w-3/4 px-10 pt-10 flex flex-col">
        <div className="flex flex-row w-full justify-between h-20">
          <div className="flex flex-col mt-6 mx-14">
            <div className="tracking-tighter text-black font-mono text-4xl font-semibold">
              <p>Donation History</p>
            </div>
          </div>

          <div className="p-5 mr-20 flex items-start">
            <p className="text-black font-bold text-2xl mt-4 ">Edhi</p>
            <img
              className="px-1"
              src="../components/edhilogo.png"
              alt="HAHAH"
            />
            {/* <img src={edhi} className='rounded-1/2 w-12 h-12 flex-shrink-0 ml-4 mt-2'></img> */}
          </div>
        </div>

        <div className="flex flex-row w-full h-10 mt-2 justify-between">
          <div className="flex flex-col">
            <div className="w-full">
              <p className="mx-14 font-bold text-xl">Flood Relief in Sindh:</p>
            </div>
          </div>

          <div className="mr-24 items-start bg-white rounded-lg border border-black">
            <div className="flex flex-row items-center">
              <button className="w-36 text-nowrap font-semibold">
                Sort by Campaign:
              </button>
              <img src="../components/drop.jpeg" className="w-1/12 h-3" alt="#" />
              {/* <button ><img src={drop} className='w-3 h-2 mt-1 mr-3'></img></button> */}
            </div>
          </div>
        </div>

        <div className="flex flex-col mx-14 w-4/5 h-full rounded mt-4 ">
          <div className="flex flex-row bg-[#F2F2F2] w-full items-center rounded-md px-4 py-2 my-1">
            
              {/* <img src={dp} className='rounded-full w-8 h-8 mt-1 ml-6'></img> */}
              <img src="../components/mohtashim.png" className="w-10" alt="#" />
              <p className="font-sans text-lg font-semibold ml-2">
                Mohtashim Butt donated Rs.10000/-
              </p>
          </div>

          <div className="flex flex-row bg-[#F2F2F2] w-full items-center rounded-md px-4 py-2 my-1">
            
              {/* <img src={dp} className='rounded-full w-8 h-8 mt-1 ml-6'></img> */}
              <img src="../components/mohtashim.png" className="w-10" alt="#" />
              <p className="font-sans text-lg font-semibold ml-2">
                Mohtashim Butt donated Rs.10000/-
              </p>
          </div>

          <div className="flex flex-row bg-[#F2F2F2] w-full items-center rounded-md px-4 py-2 my-1">
            
              {/* <img src={dp} className='rounded-full w-8 h-8 mt-1 ml-6'></img> */}
              <img src="../components/mohtashim.png" className="w-10" alt="#" />
              <p className="font-sans text-lg font-semibold ml-2">
                Mohtashim Butt donated Rs.10000/-
              </p>
          </div>

          <div className="flex flex-row bg-[#F2F2F2] w-full items-center rounded-md px-4 py-2 my-1">
            
              {/* <img src={dp} className='rounded-full w-8 h-8 mt-1 ml-6'></img> */}
              <img src="../components/mohtashim.png" className="w-10" alt="#" />
              <p className="font-sans text-lg font-semibold ml-2">
                Mohtashim Butt donated Rs.10000/-
              </p>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default DonationHistory;
