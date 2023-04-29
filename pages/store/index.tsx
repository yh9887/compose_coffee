import Header from "@components/Header";
import Footer from "@components/Footer";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";


function Store() {
    return (
        <>
            <Header />
            <div className="main">
                <div className="sec1">
                    <img src="../img/store/banner.jpg" alt="" />
                    <h1 className="sec1_title">STORE</h1>
                    <div className="nav">
                        <div className="home">
                        <FontAwesomeIcon icon={faHouseChimney} className={"fa-solid fa-house-chimney "} />
                        </div>
                        <div className="nav_menu">
                            <div className="top_menu">
                                <span>STORE</span>
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
                        <div className="nav_menu">
                            <div className="top_menu">
                                <span>매장찾기</span>
                                <FontAwesomeIcon icon={faAngleDown} className={"fa-sharp fa-solid fa-angle-down"} />

                            </div>
                            <div className="down_menu">
                                <a href="">
                                    <p>매장찾기</p>
                                </a>
                                <a href="">
                                    <p>고객의 소리</p>
                                </a>
                                <a href="">
                                    <p>제휴 및 제안</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Store;
