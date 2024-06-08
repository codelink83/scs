import React from 'react'
import { Link } from 'react-router-dom'


const MenuList = () => {
  
  return (
    <>
    <div className='menu_list d-flex justify-content-center gap-4  align-items-center overflow-x-scroll'>
     
      <ul className="navbar-nav container d-flex justify-content-center flex-row text-nowrap">
        <li className="nav-item">
          <Link className="nav-link" to="/skin-care">SKIN CARE</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/make-up">MAKE-UP</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/fragnance">FRAGRANCE</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/bath-body">BATH & BODY</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/hair">HAIR</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/accessories">ACCESSORIES</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/kids-baby">KIDS & BABY</Link>
        </li>
      </ul>
    </div>
    <div id='border'></div>
    </>
  )
}

export default MenuList;
