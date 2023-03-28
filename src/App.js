import React from 'react';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Account from './components/Account';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div>
      <h1 className='text-center text-3xl font-bold'>
        Taawun Login and Signup
      </h1>
      <AuthContextProvider>
        <Routes>
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;