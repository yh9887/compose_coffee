import Header from "@components/Header";
import Footer from "@components/Footer";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import DownMenu from "@components/Down_menu";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
function News() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/api/notices");
      setItems(response.data);
    }
    fetchData();
  }, []);

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
              {items.map((item) => (
                <Link key={item.id} href={`/news/${item.id}`}>
                  <tr>
                    <th>{item.id}</th>
                    <th className="contents">{item.title}</th>
                    <th>컴포즈</th>
                    <th>{moment(item.createdAt).format('YYYY-MM-DD HH:mm:ss')}</th>
                    <th>{item.viewCount}</th>
                  </tr>
                </Link>
              ))}
            </tbody>
          </table>
        </div>

            <div className="news_createBtn_wrap">
              <Link href="/news/create">
                  <button className="news_createBtn">공지사항 작성하기</button>
              </Link>
            </div>
      </div>
      <Footer />
    </>
  );
}
export default News;
