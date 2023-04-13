import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Header() {
  return (
    <div className="header">
      <div className="header_wrap">
        <Link href="/">
          <img src="./img/logo-light.svg" alt="" className="logo" />
        </Link>
        <div className="header_menu">
          <ul className="menu_ul">
            <Link href="/brand">
              <li className="menu_li">BRAND</li>
            </Link>
            <Link href="/#">
              <li className="menu_li">FRANCHISE</li>
            </Link>
            <Link href="/menu">
              <li className="menu_li">MENU</li>
            </Link>
            <Link href="/#">
              <li className="menu_li">STORE</li>
            </Link>
            <Link href="/news">
              <li className="menu_li">NEWS</li>
            </Link>
            <div className="menu_icon">
              <FontAwesomeIcon icon="instagram" />
              <FontAwesomeIcon icon="apple" />
              <FontAwesomeIcon icon="android" />
            </div>
          </ul>
        </div>
        <div className="ham_menu">
          <a href="" className="icon">
            <FontAwesomeIcon icon="fa fa-thin fa-bars" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
