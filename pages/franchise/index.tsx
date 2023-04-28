import Header from "@components/Header";
import Footer from "@components/Footer";
import Franchise_content from "@components/Franchise_content";
function franchise() {
    return (
        <>
            <div className="wrap">
                <Header />
                <div className="main">
                    <div className="sec1">
                        <img src="../img/franchise/banner.jpg" alt="" />
                        <h1 className="sec1_title">FRANCHISE</h1>
                        <div className="nav">
                            <div className="home">
                                <i className="fa fa-home" aria-hidden="true"></i>
                            </div>
                            <div className="nav_menu">
                                <div className="top_menu">
                                    <span>FRNACHISE</span>
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
                            <div className="nav_menu">
                                <div className="top_menu">
                                    <span>가맹절차</span>
                                    <i className="fa fa-light fa-angle-down"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sec2">
                        <div className="f_sub1">
                            <span className="f_sub1_title">가맹절차</span >
                        <div className="f_sub1_content">
                            <Franchise_content src={"./img/franchise/box_img1.png"}number={"01"} mainTitle={"가맹점 문의 및 상담"} subTitle1={"· 홈페이지 또는 전화 문의 후 담당자와 상담진행"}/>
                            <Franchise_content src={"./img/franchise/box_img2.png"}number={"02"} mainTitle={"상권분석"} subTitle1={"· 현장방문 및 지역 상권조사"}/>
                            <Franchise_content src={"./img/franchise/box_img3.png"}number={"03"} mainTitle={"가맹점 계약"} subTitle1={"· 최종협의 및 계약체결"} subTitle2={"· 가맹계약서, 계약금 지불"}/>
                            <Franchise_content src={"./img/franchise/box_img4.png"}number={"04"} mainTitle={"인테리어 협의"} subTitle1={"· 매장 실측 및 도면설계"}/>
                            <Franchise_content src={"./img/franchise/box_img5.png"}number={"05"} mainTitle={"직원채용 및 교육진행"} subTitle1={"· 제빵 및 홀 직원/파트타이머 채용"} subTitle2={"· 현장실습 및 본사이론 교육 진행"}/>
                            <Franchise_content src={"./img/franchise/box_img6.png"}number={"06"} mainTitle={"인테리어 완공"} subTitle1={"· 현장시공 감리"}subTitle2={"· 주방집기, 가구 세팅"}/>
                            <Franchise_content src={"./img/franchise/box_img7.png"}number={"07"} mainTitle={"오픈 준비"} subTitle1={"· 초도물품 검수"}subTitle2={"· 최종점검 및 오픈 시뮬레이션"}/>
                            <Franchise_content src={"./img/franchise/box_img8.png"}number={"08"} mainTitle={"GRAND OPEN"} />
                        </div>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        </>
    );
}

export default franchise;
