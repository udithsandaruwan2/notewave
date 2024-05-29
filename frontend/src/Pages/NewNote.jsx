import React from 'react'
import Header from "../Components/HeaderSection"
import SideMenu from '../Components/SideMenu'
import WriteNote from '../Components/WriteNote'

const NewNote = () => {
  return (
    <div>
        <Header/>
        <SideMenu/>
        <WriteNote/>
    </div>
  )
}

export default NewNote