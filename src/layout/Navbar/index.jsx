import React from 'react'
import "./index.scss"
import { NavLink } from 'react-router-dom'
import { CiUser,CiSearch,CiShoppingCart } from "react-icons/ci";
import { RiMenu3Fill } from "react-icons/ri";
const Navbar = () => {
  return (
    <header>
 <div className="container">


      <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png" alt="icon" className="icon" />
        <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/wishlist">Wishlist</NavLink>
          </li>
          <li>
            <NavLink to="/basket">Basket</NavLink>
          </li>
          <li>
            <NavLink to="/">Latest</NavLink>
          </li>
          <li>
            <NavLink to="/">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/">Pages</NavLink>
          </li>
          <li>
            <NavLink to="/">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <div className="buttons">
        <button><CiSearch /></button>
        <button><CiUser /></button>
        <button><CiShoppingCart /></button>

        
      </div>
      <div className="mobile_nav">
      <RiMenu3Fill />
      </div>
      </div>


    </header>
  )
}

export default Navbar
