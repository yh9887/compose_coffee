import Header from "@components/Header";
import Footer from "@components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <div className="main">
        <div className="setion1" id="mainBanner">
          <div className="video_wrap">
            <video width="750" height="500" controls autoPlay muted loop>
              <source src="img/main.mp4" />
            </video>
          </div>
          <div className="main_title">
            <p className="m_title1">대한민국 국민 카페</p>
            <p className="m_title2">스페셜티 블렌딩, 컴포즈커피</p>
          </div>
          <div className="main_nav">
            <div className="m_nav">
              <div className="m_nav_title">
                <span className="nav_title1">9</span>
                <span className="nav_title2">년</span>
              </div>
              <div className="m_nav_box">함께한 시간</div>
            </div>
            <div className="m_nav">
              <div className="m_nav_title">
                <span className="nav_title1">2061</span>
                <span className="nav_title2">개</span>
              </div>
              <div className="m_nav_box">가맹점 수</div>
            </div>
            <div className="m_nav">
              <div className="m_nav_title">
                <span className="nav_title1">6,549.853</span>
                <span className="nav_title2">명</span>
              </div>
              <div className="m_nav_box">컴포즈 공식 App 회원</div>
            </div>

          </div>
          <div className="main_short">
            <Link href={"https://www.instagram.com/compose_coffee/"} >
              <div className="short_link m_short_box b_r">
                <p className="short_title">SOCIAL NETWORK</p>
                <p className="short_name">SNS</p>
              </div>
            </Link>
            <Link href={"https://composecoffee.com/"} >
              <div className="short_link m_short_box b_r">
                <p className="short_title">COMPOSE MALL</p>
                <p className="short_name">e-Shop</p>
              </div>
            </Link>
            <Link href={"mailto:compose@composecoffee.com <compose@composecoffee.com>;"} >
              <div className="short_link m_short_box">
                <p className="short_title">CONTACT</p>
                <p className="short_name">CONTACT</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="section2" id="imgSlide">
          <div className="img_slide">
            <div className="slide_btn prevBtn"><FontAwesomeIcon icon={faChevronLeft} /></div>
            <img src="../img/home/main_swiper1.jpg" alt="" className="slide_banner" />
            <img src="../img/home/main_swiper2.jpg" alt="" className="slide_banner" />
            <img src="../img/home/main_swiper3.jpg" alt="" className="slide_banner" />
            <img src="../img/home/main_swiper4.jpg" alt="" className="slide_banner" />
            <div className="slide_btn nextBtn"><FontAwesomeIcon icon={faChevronRight} /></div>
          </div>
        </div>
        <div className="section3" id="store">
          <div className="store_title_box">
            <h1 className="store_main_title">컴포즈커피 가맹점</h1>
            <div className="store_br"></div>
            <p className="store_sub_title">늘 가까이 함께하겠습니다.</p>
            <button className="store_search_btn">가까운 매장 찾기</button>
          </div>
          <div className="store_place_wrap">
            <div className="place_box">
              <img src="../img/home/store_banner1.jpg"className="place_img"></img>
              <div className="place_txt">서귀포신시가지점</div>
            </div>
            <div className="place_box">
              <img src="../img/home/store_banner2.jpg"className="place_img"></img>
              <div className="place_txt">하남감일지구점</div>
            </div>
            <div className="place_box">
              <img src="../img/home/store_banner3.jpg"className="place_img"></img>
              <div className="place_txt">원주중앙점</div>
            </div>
            <div className="place_box">
              <img src="../img/home/store_banner4.jpg"className="place_img"></img>
              <div className="place_txt">안산일동점</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
