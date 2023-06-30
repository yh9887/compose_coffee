import Header from "@components/Header";
import Footer from "@components/Footer";
import axios from "axios";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import DownMenu from "@components/Down_menu";
import { useEffect, useState } from "react";
import toast from "react-simple-toasts";
import { useRouter } from 'next/router';


function Edit({ id }) {
    const router = useRouter();
    const [title, setTitle] = useState<string>();
    const [body, setBody] = useState("");
    const [notice, setNotice] = useState({
        id: "",
        title: "",
        imageKey: "",
        body: "",
        createdAt: "",
        viewCount: null,
    });
    const noticeCreateHandler = async () => {
        await axios.patch(`/api/notice?id=${id}`, {
            title,
            body
        })
        toast("정상적으로 등록되었습니다.");
        router.push(`/news/${id}`);
    }

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("/api/notice", {
                params: {
                    id,
                },
            });
            setTitle(response.data.title)
            setBody(response.data.body)

            setNotice(response.data);
        }
        fetchData();
    }, []);


    return (
        <div>
            <Header />
            <div className="main">
                <div className="sec1">
                    <img src="../../img/news/banner.jpg" alt="" />
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



                <div className="form">
                    <form style={{ margin: "10px" }}>
                        <h3 className="form_title">제목</h3>
                        <input
                            type="text"
                            placeholder="제목을 입력해주세요."
                            onChange={(e) => setTitle(e.target.value)}
                            className="form_input"
                            value={title}
                        />
                        <h3 className="form_title">내용</h3>
                        <textarea
                            placeholder="내용을 입력해주세요."
                            onChange={(e) => setBody(e.target.value)}
                            className="form_info"
                            value={body}
                        />

                        <div>
                            <button type="button" onClick={noticeCreateHandler} className="form_button createBtn">수정하기</button>
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        </div>
    );
}
export async function getServerSideProps(props: any) {
    return {
        props: {
            id: props.query.id,
        },
    };
}

export default Edit;