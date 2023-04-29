import Header from "@components/Header";
import Footer from "@components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";

function Menu() {
  return (
    <>
      <div className="wrap">
        <Header />
        <div className="main">
          <div className="sec1">
            <img src="../img/menu/banner.jpg" alt="" />
            <h1 className="sec1_title">MENU</h1>
            <div className="nav">
              <div className="home">
              <FontAwesomeIcon icon={faHouseChimney} className={"fa-solid fa-house-chimney "} />
              </div>
              <div className="nav_menu">
                <div className="top_menu">
                  <span>MENU</span>
                  <FontAwesomeIcon icon={faAngleDown} className={"fa-sharp fa-solid fa-angle-down"} />

                </div>
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
              </div>
            </div>
          </div>
          <div className="sec2">
            <div className="menu_nav">
              <ul>
                <li>전체</li>
                <li>커피</li>
                <li>더치커피</li>
                <li>논커피 라떼</li>
                <li>주스</li>
                <li>스무디</li>
                <li>티</li>
                <li>에이드</li>
                <li>프라페</li>
                <li>밀크쉐이크</li>
                <li>사이드메뉴</li>
              </ul>
            </div>
            <div className="menu_content">
              <div className="menu_box">
                <img id="menu_img" src="../img/menu/menu.jpg" alt="" />
                <div id="menu_info">
                  <h4>에스프레소</h4>
                  <div className="line"></div>
                  <ul>
                    <li>샷추가 : 1shot : 104mg/30ml</li>
                    <li>샷추가 : 1shot : 104mg/30ml</li>
                    <li>샷추가 : 1shot : 104mg/30ml</li>
                    <li>샷추가 : 1shot : 104mg/30ml</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Menu;
