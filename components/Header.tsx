import { library } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";


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
              {/* <FontAwesomeIcon icon={faInstagram} className="icon fa fa-brands"/>
              <FontAwesomeIcon icon={faApple} className="icon fa fa-brands" />
              <FontAwesomeIcon icon={faAndroid} className="icon fa fa-brands" /> */}
              <Link  href="/news" className="icon"><FontAwesomeIcon icon={faInstagram} className="icon fa fa-brands"/></Link>
              <Link  href="/news" className="icon"><FontAwesomeIcon icon={faApple} className="icon fa fa-brands" /></Link>
              <Link  href="/news" className="icon"><FontAwesomeIcon icon={faAndroid} className="icon fa fa-brands" /></Link>
            </div>
          </ul>
        </div>
        <div className="ham_menu">
          <a href="" className="icon">
            <FontAwesomeIcon icon="fa fa-thin fa-bars"  className="fa-bars" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
