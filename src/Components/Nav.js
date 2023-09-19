import React from 'react';
import { NavLink } from 'react-router-dom';
import TopLogo from '../Images/TopLogo.png'


const Nav = () => {
  return (
    <div class="header">
        <div>
            <img src={TopLogo} className="TopLogo" alt="logo" />
        </div>
        <div className='nav'>
            <NavLink to ="#"><i className="fa fa-search" id="search"></i>SEARCH</NavLink>
            <div className='MainNavigation'>
                <NavLink to ="#">since 1973<i className='fa fa-angle-down'></i></NavLink>
                <NavLink to ="#">services<i className='fa fa-angle-down'></i></NavLink>
                <NavLink to ="#">experience kiza<i className='fa fa-angle-down'></i></NavLink>
                <NavLink to ="#">shop<i className='fa fa-angle-down'></i></NavLink>
                <NavLink to ="#">project x<i className='fa fa-angle-down'></i></NavLink>
            </div>
            <div className='MyKb'>
                <NavLink to ="#"><i className="fa fa-heart"></i></NavLink>
                <NavLink to ="#"><i className='fa fa-shopping-bag'></i></NavLink>
                <button><NavLink to = "#"><i className='fa fa-user-circle' style={{marginRight:"5px",}}></i> My KB</NavLink></button>
            </div>
        </div>
            {/* <div class="headerLogo"><img src="images/TopLogo.png" alt="Logo"></div>
            <div class="nav">
                <a href="#"><img src="images/SearchIcon.png" id="search" alt="search">SEARCH</a>
                <div class="MainNavigation">
                    <a href="#">SINCE 1973<img src="images/DropdownIcon.png" alt="DropdownIcon"></a>
                    <a href="#">SERVICES<img src="images/DropdownIcon.png" alt="DropdownIcon"></a>
                    <a href="#">EXPERIENCE KIZA <img src="images/DropdownIcon.png" alt="DropdownIcon"></a>
                    <a href="#">SHOP<img src="images/DropdownIcon.png" alt="DropdownIcon"></a>
                    <a href="#">PROJECT X<img src="images/DropdownIcon.png" alt="DropdownIcon"></a>
                </div>
                <div class="MyKb">
                    <a href="#"><img src="images/heart.png" alt="heart"></a>
                    <a href="#"><img src="images/BagIcon.png" alt="BagIcon"></a>
                    <button><a href="#"><img src="images/ProfileCircle.png" alt="images">My KB</a></button>
                </div>
            </div> */}
        </div>
  )
}

export default Nav