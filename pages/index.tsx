import Header from "@components/Header";
import Footer from "@components/Footer";
import Link from "next/link";

export default function Home() {
  return(
    <>
      <Header />
      <div className="video_wrap">
        <video width="750" height="500" controls autoPlay muted loop>
          <source src="img/main.mp4"/>
        </video>
        <div className="main">
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
      </div>
      <div className="section1">ddddddsdsadasdd</div>

      <Footer />
    </>
  );
}
