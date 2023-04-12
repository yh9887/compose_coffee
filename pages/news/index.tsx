import Header from "@components/Header";
import Footer from "@components/Footer";
import Link from "next/link";

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
              <i className="fa fa-home" aria-hidden="true"></i>
            </div>
            <div className="nav_menu">
              <div className="top_menu">
                <span>NEWS</span>
                <i className="fa fa-light fa-angle-down"></i>
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
            <div className="about">
              <div className="top_menu">
                <span>공지사항</span>
                <i className="fa fa-light fa-angle-down"></i>
              </div>
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
            </div>
          </div>
        </div>

        <div className="w-100 px-3 pt-21 ">
          <table className="table table-hover" id="table">
            <thead>
              <tr>
                <th>번호</th>
                <th className="w-50">제목</th>
                <th>글쓴이</th>
                <th>날짜</th>
                <th>조회 수</th>
              </tr>
            </thead>
            <tbody id="tbody"></tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default News;
