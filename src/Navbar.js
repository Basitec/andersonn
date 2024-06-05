import React, { useRef } from 'react'
// import {Link} from 'react-router-dom'
import './App.css'
import logo from './logoo.png'
function Navbar() {
  let uu = useRef()
  let hideSidebar= ()=>{
    console.log(uu.current)
    uu.current.style.display="none"
  }
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
      <li className='xx' onClick={hideSidebar}><a href='#'><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg></a></li>
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