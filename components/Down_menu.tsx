import React from "react";

export default function DownMenu({ pageName = "" }) {
  const Menu = () => {
    switch (pageName) {
      case "brand":
        return (
          <div className="down_menu">
            <a href="">
              <p>ABOUT US</p>
            </a>
            <a href="">
              <p>버터홀릭</p>
            </a>
          </div>
        );
      case "news":
        return (
          <div className="down_menu">
            <a href="">
              <p>공지사항</p>
            </a>
            <a href="">
              <p>NEWS</p>
            </a>
            <a href="">
              <p>EVENTS</p>
            </a>
          </div>
        );
      default:
        return (
          <div className="down_menu">
            <a href="">
              <p>BRAND</p>
            </a>
            <a href="">
              <p>FRANCHISE</p>
            </a>
            <a href="">
              <p>MENU</p>
            </a>
            <a href="">
              <p>STORE</p>
            </a>
            <a href="">
              <p>NEWS</p>
            </a>
          </div>
        );
    }
  };
  return <Menu />;
}
