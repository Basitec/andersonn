import React, { useRef } from 'react'
// import {Link} from 'react-router-dom'
import './App.css'
import logo from './logoo.png'
function Navbar() {
  let uu = useRef()
  let showSidebar =()=>{
    console.log(uu.current)
    uu.current.style.display="flex"
  }
  return (
    <div className='wrapper'>
        <div className="left">
            <a href='#'><img src={logo} alt="" /></a>
        </div>
        <div className='righttogether'>
        <div className="midddle">
        <nav>
            <a href='#'>Why McAderson?</a>
            <a href='#'>Learning paths</a>
            <a href='#'>Key features</a>
            <a href='#'>FAQ</a>
            {/* <a href=""></a> */}


        </nav>
        </div>
        <div className="right">
            <a href='#'>Coming Soon</a>
        </div>
    </div>
    <div className="icon">
      <li className='ico' onClick={showSidebar}>
    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></li>
    <ul className="sidebar" ref={uu}>
      <li><a href='#'>Why McAderson?</a></li>
      <li><a href='#'>Learning paths</a></li>
      <li><a href='https://www.google.com'>Key features</a></li>
      <li><a href='#'>FAQ</a></li>
      <li><a href='#'>Coming Soon</a></li>
    </ul>
    </div>
    </div>
  )
}

export default Navbar