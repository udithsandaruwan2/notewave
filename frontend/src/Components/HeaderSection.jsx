import React from 'react'
import { ArrowClockwise, ArrowRight,GridFill,Search } from 'react-bootstrap-icons';
import image from '../assets/react.svg'

const HeaderSection = () => {
  return (
    <div className='fixed top-0 left-0 h-14 w-screen m- 
                    flex flex-row bg-gray-600 text-white'>
      <HeaderIcon icon={< ArrowRight/>}/>
      <div className='flex flex-auto justify-center w-2/5'>
        <input type="text" className='mt-2 ml-10 h-10 w-2/5 bg-gray-400 text-white border-none '/>
        <HeaderIcon icon={< Search/>}/>
        <HeaderIcon icon={< ArrowClockwise/>}/>
        <HeaderIcon icon={< GridFill/>}/>
      </div>
      <img src={image} alt="" className='h-10 w-10 mt-2 mr-2 flex-end'/>


    </div>
  )
}

const HeaderIcon =({icon}) =>(
  <div className='header-icon'>
    {icon}
  </div>
)

export default HeaderSection


