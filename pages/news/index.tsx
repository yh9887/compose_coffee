import Header from "@components/Header";
import Footer from "@components/Footer";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import DownMenu from "@components/Down_menu";

function News() {
  // const news = localStorage.getItem("NEWS");
  return (
    <>
      <Header />
      <div className="main">
        <div className="sec1">
          <img src="../img/news/banner.jpg" alt="" />
          <Link href={"/news/1"}>
            <h1 className="sec1_title">NEWS</h1>
          </Link>
          <div className="nav">
            <div className="home">
              <FontAwesomeIcon
                icon={faHouseChimney}
                className={"fa-solid fa-house-chimney "}
              />
            </div>
            <div className="nav_menu">
              <div className="top_menu">
                <span>NEWS</span>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={"fa-sharp fa-solid fa-angle-down"}
                />
              </div>
              <DownMenu />
            </div>
            <div className="about">
              <div className="top_menu">
                <span>공지사항</span>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={"fa-sharp fa-solid fa-angle-down"}
                />
              </div>
              <DownMenu pageName="news" />
            </div>
          </div>
        </div>

        <div className="w-100 px-3 pt-21 ">
          <table className="table table-hover" id="table">
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>글쓴이</th>
                <th>날짜</th>
                <th>조회 수</th>
              </tr>
            </thead>
            <tbody id="tbody">
              <tr>
                <th>01</th>
                <th>테스트</th>
                <th>컴포즈</th>
                <th>2023.05.04</th>
                <th>0</th>
              </tr>
              <tr>
                <th>01</th>
                <th>테스트</th>
                <th>컴포즈</th>
                <th>2023.05.04</th>
                <th>0</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default News;
