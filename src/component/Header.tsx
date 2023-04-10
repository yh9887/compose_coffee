import React from 'react';
import FA from 'react-fontawesome';
import { Link } from 'react-router-dom';

function Header(){
  return(
    <div className="header">
      <div className="header_wrap">
      <Link to='/'><img src="./img/logo-light.svg" alt="" className="logo" /></Link>
        <div className="header_menu">
          <ul className="menu_ul">
            <Link to='/brand'><li className="menu_li">BRAND</li></Link>
            <Link to='/#'><li className="menu_li">FRANCHISE</li></Link>
            <Link to='/menu'><li className="menu_li">MENU</li></Link>
            <Link to='/#'><li className="menu_li">STORE</li></Link>
            <Link to='/news'><li className="menu_li">NEWS</li></Link>
            <div className="menu_icon">
              <FA name="instagram" />
              <FA name="apple" />
              <FA name="android" />
            </div>
          </ul>
        </div>
        <div className="ham_menu">
          <a href="" className="icon"><i className="fa fa-thin fa-bars"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Header;

