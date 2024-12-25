import { useState } from 'react'

import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'

function App() {
   const [openSideBarToggle,setOpenSideBarTogggle]=useState(false);

   function OpenSideBar(){
    setOpenSideBarTogggle(!openSideBarToggle)
   }
  return (
    <div className='grid-container'>
      <Header OpenSideBar={OpenSideBar}></Header>
      <Sidebar openSideBarToggle={openSideBarToggle} OpenSideBar={OpenSideBar}></Sidebar>
      <Home></Home>
    </div>
  )
}

export default App
