import { library } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";


function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }
  useEffect(()=>{
      window.addEventListener('scroll', updateScroll);
  });
  return (
    <div className={scrollPosition < 100 ? "original_header  header" : "change_header header drop"}>
      <div className="header_wrap">
        <Link href="/">
          <img src="/img/logo-light.svg" alt="" className="logo" />
        </Link>
        <div className="header_menu">
          <ul className="menu_ul">
            <Link href="/brand">
              <li className={scrollPosition < 100 ? "menu_li" :"menu_li change_menu_li"}>BRAND</li>
            </Link>
            <Link href="/franchise">
              <li className={scrollPosition < 100 ? "menu_li" :"menu_li change_menu_li"}>FRANCHISE</li>
            </Link>
            <Link href="/menu">
              <li className={scrollPosition < 100 ? "menu_li" :"menu_li change_menu_li"}>MENU</li>
            </Link>
            <Link href="/store">
              <li className={scrollPosition < 100 ? "menu_li" :"menu_li change_menu_li"}>STORE</li>
            </Link>
            <Link href="/news">
              <li className={scrollPosition < 100 ? "menu_li" :"menu_li change_menu_li"}>NEWS</li>
            </Link>
            <div className="menu_icon">
                <Link  href="/news" className="icon"><FontAwesomeIcon icon={faInstagram} className={scrollPosition < 100 ? "icon fa fa-brands" :"fa-brands change_menu_li"}/></Link>
                <Link  href="/news" className="icon"><FontAwesomeIcon icon={faApple}  className={scrollPosition < 100 ? "icon fa fa-brands" :"fa-brands change_menu_li"} /></Link>
                <Link  href="/news" className="icon"><FontAwesomeIcon icon={faAndroid}  className={scrollPosition < 100 ? "icon fa fa-brands" :"fa-brands change_menu_li"} /></Link>
            </div>
          </ul>
        </div>
        <div className="ham_menu">
          <a href="" className="icon">
            <FontAwesomeIcon icon={faBarsStaggered} className={scrollPosition < 100 ? "icon fa fa-bars" :"fa-bars change_menu_li"} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
