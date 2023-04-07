// import './App.css';
import { Link } from 'react-router-dom';
import akh from './Akhuwat-program.png';
import edhi from './edhi.jpeg';
import chiipa from './chiipa.jpeg';
import jdc from './Jdc-Logo.png';
import logo from './Logo_Final.png';
import person from './img.jpeg';



const PartenerSideBar = () => {
  return (
    <div className="fixed h-full w-60 p-4 top-8 left-0">
      <h2 className="text-center text-2xl my-1 font-medium">Our Partners</h2>
      <div className="flex flex-col items-center">
        <div className='mt-5'>
        <img src={akh} alt="Partner 1" className="w-24 h-24" />
        </div>
        <div className='mt-5'>
        <img src={jdc} alt="Partner 2" className="w-24 h-24 mb-8" />
        </div>
        <img src={edhi} alt="Partner 3" className="w-24 h-24 mb-8" />
        <img src={chiipa} alt="Partner 4" className="w-24 h-24 mb-8" />
      </div>
    </div>
  );
};

function App () {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-purple-300">
    <PartenerSideBar/>
    <div className="fixed top-10 right-0 bottom-5 left-60 bg-gray-100 rounded-2xl flex">
      <div className="w-full flex flex-col justify-center items-center">
          <img src={logo} alt="Logo" className="w-40 h-40 mb-5" />
          {/* <form onSubmit={handleSubmit}> */}
            <div className='flex flex-col py-2'>
              <label htmlFor="email" className='py-2 font-small '>Email Address</label>
              {/* <input id="email" onChange={(e) => setEmail(e.target.value)} className='border-2 border-gray-800 rounded-md p-3' type='email' /> */}
              <input className='border-2 border-gray-300 rounded-md p-2 w-80 mb-1' type='email'></input>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="password" className='py-2 font-small'>Password</label>
              {/* <input id="password" onChange={(e) => setPassword(e.target.value)} className='border-2 border-gray-800 rounded-md p-3' type='password' /> */}
              <input className='border-2 border-gray-300 rounded-md p-2 w-80 mb-1 h-1/2 ' type='password'></input>
            </div>
            <button className='bg-green-500 hover:bg-green-500 text-white rounded-2xl py-2 px-8 my-4 w-80' >
                    {/* {loading ? 'Loading...' : 'Login'} */}
                    Log In
            </button>
          {/* </form> */}
          {/* {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
          )} */}

      </div>

      <div className="w-1/3 flex justify-center items-center">
        <img src={person} alt="Signin" className="w-full h-full" />
      </div>
    </div>
  </div>
    
  );
}

export default App;