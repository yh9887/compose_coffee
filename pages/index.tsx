import Header from "@components/Header";
import Footer from "@components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Home() {
  const items = [
    { src: "../img/home/main_swiper1.jpg" },
    { src: "../img/home/main_swiper2.jpg" },
    { src: "../img/home/main_swiper3.jpg" },
    { src: "../img/home/main_swiper4.jpg" },
  ];

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
          <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              // autoplay={true}
              rewind={true}
              loop={true}
              slidesPerView={1}
              navigation={true}
              // navigation={{
              //   prevEl: ".prevNav",
              //   nextEl: ".nextNav",
              // }}
          >

                  {items.map((item, idx) => {
                      return (
                        <SwiperSlide key={idx} className="slide_banner" >
                            <button className="prevNav"></button>
                          <img src={item.src} />
                            <button className="nextNav"></button>
                        </SwiperSlide> 
                      );
                  })}
          </Swiper>
          </div>
        <div className="section3" id="store">
          <div className="store_title_box">
            <h1 className="store_main_title">컴포즈커피 가맹점</h1>
            <div className="store_br"></div>
            <p className="store_sub_title">늘 가까이 함께하겠습니다.</p>
            <button className="store_search_btn">가까운 매장 찾기</button>
          </div>
          <div className="store_place_box">
            <div className="place_box_wrap">
              <img src="../img/home/store_place_banner1.jpg"></img>
              <div className="place_txt">서귀포신시가지점</div>
            </div>
            <div className="place_box_wrap">
              <img src="../img/home/store_place_banner2.jpg"></img>
              <div className="place_txt">하남감일지구점</div>
            </div>
            <div className="place_box_wrap">
              <img src="../img/home/store_place_banner3.jpg"></img>
              <div className="place_txt">원주중앙점</div>
            </div>
            <div className="place_box_wrap">
              <img src="../img/home/store_place_banner4.jpg"></img>
              <div className="place_txt">안산일동점</div>
            </div>
          </div>
          <div className="store_place_img">
            <div className="place_img_wrap1">
                <div className="place_img1">
                  <div className="img1_title_box">
                    <p className="img_main_title">고품질 커피브랜드, 컴포즈</p>
                    <div className="img_main_border"></div>
                    <div className="img_sub_title">성공창업, 컴포즈커피가 함께합니다.</div>
                    <button className="img_about_btn">+ 더보기</button>
                  </div>
                </div>
            </div>
            <div className="place_img_wrap2">
              <div className="img_wrap_box_L">
                <div className="place_img2_1">
                  <div className="img2_title_box_L">
                    <p className="img_sub_title_t">1999년부터 시작된 전문성</p>
                    <p className="img_sub_title_b">20년 이상의 노하우와 첨단 기술력!</p>
                  </div>
                </div>
              </div>
              <div className="img_wrap_box_R">
                <div className="place_img2_2">
                  <div className="img2_title_box_R">
                    <p className="img_sub_title_t">생두 수입부터 로스팅까지</p>
                    <p className="img_sub_title_b">국내 최대 규모 자체 로스팅 공장 및 설비 보유!</p>
                  </div>
                </div>
                <div className="place_img2_3">
                  <div className="img2_title_box_R">
                    <p className="img_sub_title_t">이탈리아 100년 전통의 명맥</p>
                    <p className="img_sub_title_b">브루그네띠 공식 수입 AGENCY</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="place_img_wrap3">
                <div className="place_img3">
                <div className="img3_title_box">
                    <p className="img_main_title">공지사항</p>
                    <div className="img_main_border"></div>
                    <div className="img_sub_title">컴포즈 소식을 전해드립니다.</div>
                    <div className="img_sub_box">
                      <div className="sub_box">
                        <p className="sub_box_title">2023 신메뉴 개편 </p>
                        <p className="sub_box_content">컴포즈커피를 사랑해주시는 고객님들께 감사드립니다.</p>
                        <p className="sub_box_date">2023.03.27</p>
                      </div>
                      <div className="sub_box">
                        <p className="sub_box_title">2023 신메뉴 개편 </p>
                        <p className="sub_box_content">컴포즈커피를 사랑해주시는 고객님들께 감사드립니다.</p>
                        <p className="sub_box_date">2023.03.27</p>
                      </div>
                      <div className="sub_box">
                        <p className="sub_box_title">2023 신메뉴 개편 </p>
                        <p className="sub_box_content">컴포즈커피를 사랑해주시는 고객님들께 감사드립니다.</p>
                        <p className="sub_box_date">2023.03.27</p>
                      </div>
                      <div className="sub_box">
                        <p className="sub_box_title">2023 신메뉴 개편 </p>
                        <p className="sub_box_content">컴포즈커피를 사랑해주시는 고객님들께 감사드립니다.</p>
                        <p className="sub_box_date">2023.03.27</p>
                      </div>
                    </div>
                    <button className="img_about_btn">+ 더보기</button>
                  </div>
                </div>
            </div>
          </div>
        </div>
        </div>
    </div>
      <Footer />
    
    </>
  );
}
