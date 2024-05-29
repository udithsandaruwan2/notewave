import React from 'react'
import { ArrowClockwise, ArrowRight,GridFill,Search } from 'react-bootstrap-icons';

function SideMenu() {
  return (
    <div>
        <div className=' mt-14 left-0 w-14 h-screen pt-4
                    fixed bg-gray-600 text-white'>
        <SideMenuIcon icon={< ArrowRight/>}/>
        <SideMenuIcon icon={< Search/>}/>
        <SideMenuIcon icon={< ArrowClockwise/>}/>
        <SideMenuIcon icon={< GridFill/>}/>
      </div>
    </div>  )
}

const SideMenuIcon =({icon}) =>(
    <div className='sidebar-icon'>
      {icon}
    </div>
  )

export default SideMenu