import Header from "@components/Header";
import Footer from "@components/Footer";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import DownMenu from "@components/Down_menu";
import { useState } from "react";

function NewsCreate() {
    const[title, setTitle] =useState<string>();
    const[body, setBody] =useState("");
    return (
        <div>
            <Header />
            <div className="main">
                <div className="sec1">
                    <img src="../img/news/banner.jpg" alt="" />
                    <Link href={"/news/1"}>
                        <h1 className="sec1_title">공지사항 생성</h1>
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

                <div className="w-100 px-3 pt-21">
                    <div>
                        <input type="text" placeholder=" 제목을 입력하세요."
                        onChange={(e)=> setTitle(e.target.value)}/>
                        {/* input이 실행될때마다 뒤에 함수를 실행해라. 값을 변경하기 위해 가져옴 */}
                    <div>
                    <div>
                        <textarea placeholder=" 내용을 입력하세요."
                        onChange={(e)=> setBody(e.target.value)}/>
                    </div>
                    <button onClick={()=> console.log(title,body)}>작성하기</button>
                </div>
            </div>
                </div>
            <Footer />
            </div>
        </div>
    );
}

export default NewsCreate;