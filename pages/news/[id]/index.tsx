import Header from "@components/Header";
import Footer from "@components/Footer";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import DownMenu from "@components/Down_menu";
import { useEffect, useState } from "react";
import Link from "next/link";
import moment from "moment";

function NewsShow({ id }) {
  const [notice, setNotice] = useState({
    id: "",
    title: "",
    imageKey: "",
    body: "",
    createdAt: "",
    viewCount: null,
  });
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/api/notice", {
        params: {
          id,
        },
      });
      await axios.put(`/api/notice?id=${id}`)
      setNotice(response.data);
    }
    fetchData();
  }, []);
  
  console.log("🚀 notice:", notice);

  return (
    <>
      <Header />
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
      <div className="notice_wrap">
      <h1 className="notice_title">{notice?.title}</h1>
      <div className="title_info">
        <span className="notice_createdAt">{moment(notice.createdAt).format('YYYY-MM-DD HH:mm:ss')}</span>
        <span>{notice.viewCount}</span>
      </div>
      <div className="notice_border"></div>
      <div className="notice_body">{notice.body}</div>
      <button 
        type="button"
        className="notice_delete createBtn"
        onClick={()=>{console.log(notice.id)}}
        >삭제</button>
      <button type="button"className="notice_change createBtn">수정</button>

      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps(props: any) {
  return {
    props: {
      id: props.query.id,
    },
  };
}

export default NewsShow;
