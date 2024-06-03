import React from 'react';
import { Outlet } from 'react-router-dom';
import SideMenu from './Components/SideMenu';
import './App.css';
import HeaderSection from './Components/HeaderSection';

function App() {
  return (
    <div className="flex w-full h-screen bg-gray-900 font-poppins">
      <HeaderSection/>
      <SideMenu/>
      <div className="ml-64 p-4 w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default App;