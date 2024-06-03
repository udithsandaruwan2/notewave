import React from 'react'
import { ArrowClockwise, ArrowRight,GridFill,Search, Soundwave } from 'react-bootstrap-icons';
import image from '../assets/profilepic.jpg'

const HeaderSection = () => {
  return (
    <div className='fixed top-0 left-0 h-14 w-screen flex flex-row bg-gray-900 text-white'>
      <div className='mt-3 flex ml-4'><Soundwave className='text-3xl'/><span className='text-2xl ml-1'>NoteWave</span></div>
      <div className='flex flex-auto justify-center w-2/5'>
        <input type="text" className='pl-4 mt-2 ml-10 h-10 w-2/5 bg-gray-800 rounded-xl text-white border-none focus:outline-none focus:border-transparent'/>
        <HeaderIcon icon={< Search/>}/>
        <HeaderIcon icon={< ArrowClockwise/>}/>
        <HeaderIcon icon={< GridFill/>}/>
      </div>
      <img src={image} alt="" className='h-10 w-10 mt-2 mr-2 flex-end rounded-xl'/>
      <div className='mr-4 text-sm mt-2'>
        <span>Username</span>
        <br />
        <span>email</span>
      </div>



    </div>
  )
}

const HeaderIcon =({icon}) =>(
  <div className='header-icon'>
    {icon}
  </div>
)

export default HeaderSection


