import React from 'react' 
import DonorSideBar from '../../views/DonorSideBar';
import { useNavigate } from 'react-router-dom';

const Donate2 = () => {
    const navigate = useNavigate();
    return (
        <div className='flex bg-purple-300 w-screen h-screen'>

            <DonorSideBar/>

            <div className="flex flex-col justify-between w-full">

                <div className='flex flex-row w-full justify-between'>
                    <div className='flex flex-col mt-6 mx-10'>
                        <div className='tracking-tighter text-black font-mono text-4xl font-semibold'>
                            <p>Donate For</p>
                            <p>Greater Good</p>
                        </div>
                        <div className='my-8'>
                            <button className='w-40 bg-purple-400 rounded-lg text-white border border-black '>
                                Cash
                            </button>
                            <button className='w-40 bg-white rounded-lg text-[#AA8CFF] border border-black ml-4 '>
                                Non-Cash
                            </button>
                        </div>
                    </div>

                    <div className='p-5 mr-20 flex items-start  '>
                        <p className='text-black font-semibold underline text-lg mt-6 '>Mohtashim</p>
                        <img src="../components/dp.png" alt= "profile" className='rounded-1/2 w-10 flex-shrink-0 ml-4 mt-4'></img>
                    </div>

                </div>

                <div className="bg-[#F2F2F2] my-6 mx-10 w-11/12 h-3/4 rounded justify-center">
                    <div className='flex flex-row justify-center'>
                        <button className='w-6 h-6 bg-white  rounded-full mt-2 border border-black '></button>
                        <a href='/' className='mt-2'>------------</a>
                        <button className='w-6 h-6 bg-purple-400 rounded-full mt-2 border border-black '></button>
                        <a href='/' className='mt-2'>------------</a>
                        <button className='w-6 h-6 bg-white rounded-full mt-2 border border-black'></button>
                        <a href='/' className='mt-2'>------------</a>
                        <button className='w-6 h-6 bg-white rounded-full mt-2 border border-black'></button>
                    </div>

                    <div className='flex flex-row w-full h-10 justify-center'>
                        <input className='p-3 rounded-2xl bg-white border border-black w-1/6 h-8 mt-4' type='text' placeholder='Search'></input>
                        <button className='absolute mt-5 ml-28 '><img src="../components/search.jpeg" alt= "search" className='w-6 h-6 rounded'></img></button>
                    </div>

                    <div>
                        <p className='text-black text-3xl font-semibold ml-6 mt-2'>Select a payment method:</p>
                    </div>

                    <div className='flex flex-row  w-full h-40 mt-4 justify-center'>
                        <div className='flex flex-col border border-black shadow-md w-40 bg-white rounded-2xl h-40 justify-center mr-20'>
                            <div className='flex flex-col  mx-4  mb-4 justify-center items-center'>
                                <img src="../components/jazz.jpeg" alt="jazz" className=' w-12 h-12 '></img>
                                <p className='font-bold text-lg mb-2'>JazzCash</p>
                                <button onClick={() => {navigate("/donate3")}} className='bg-[#26235C] text-white rounded-md  w-full h-8'>Select</button>
                            </div>
                        </div>
                        <div className='flex flex-col border border-black w-40 bg-white rounded-2xl h-40 justify-center mr-20'>
                            <div className='flex flex-col  mx-4  mb-4 justify-center items-center'>
                                <img src="../components/easypaisa.jpeg" alt="ep" className=' w-12 h-12 '></img>
                                <p className='font-bold text-lg mb-2'>Easypaisa</p>
                                <button onClick={() => {navigate("/donate3")}} className='bg-[#26235C] text-white rounded-md  w-full h-8'>Select</button>
                            </div>
                        </div>
                        <div className='flex flex-col border border-black w-40 bg-white rounded-2xl h-40 justify-center'>
                            <div className='flex flex-col  mx-4  mb-4 justify-center items-center'>
                                <img src="../components/bank.jpeg" alt="bank" className=' w-14 h-14 '></img>
                                <p className='font-bold text-lg mb-2'>Bank Transfer</p>
                                <button onClick={() => {navigate("/donate3")}} className='bg-[#26235C] text-white rounded-md  w-full h-8'>Select</button>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <div className="flex flex-row w-1/4 mt-4 py-2 bg-[#CCCCCC] hover:bg-gray-500 rounded-3xl justify-center items-center">
                            <img className="h-5" src="../components/back.png" alt="back" />
                            <button onClick={() => {navigate("/donate1")}} className="btn px-2">Go back</button>
                        </div>
                    </div>


                </div>

            </div>
        </div>

    );
}


export default Donate2;