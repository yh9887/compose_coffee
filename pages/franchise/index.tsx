import Header from "@components/Header";
import Footer from "@components/Footer";
import Franchise_content from "@components/Franchise_content";
import Franchise_choise from "@components/Franchise_choise";
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
                        <div className="f_sub" id="f_sub1">
                            <div className="f_sub_title">가맹절차</div >
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
                        <div className="f_sub" id="f_sub2">
                            <div className="f_sub_title">매장 오픈</div >
                            <p>오픈 담당 슈퍼바이저 파견 후 영업개시</p>
                            <img src="./img/franchise/franchise_img.png" alt="" className="f_sub2_img" />
                        </div>
                        <div className="f_sub" id="f_sub3">
                            <div className="f_sub_title">점주님, 왜 컴포즈커피를 선택하셨습니까?</div >
                            <p>컴포즈 커피를 직접 운영중인 점주님께 여쭤 보았습니다.</p>
                                <Franchise_choise src={`./img/franchise/coffee_img.png`} 
                                img_title={"COFFEE"} 
                                txt_content1={"저는 막연한 카페 창업은 욕심이 있었지만, 커피에 대한 지식과 경험이 부족했어요. 컴포즈커피는 일반 카페 프랜차이즈보다 훨씬 커피에 대한 자부심이 강해 보였어요. 특히, 컴포즈커피의 모회사인 제이엠커피는 맛있는 로스팅카페로 워낙 유명하니 선택을 마다할 이유가 있었을까요?"}
                                txt_title={"마린시티점"}/>
                                <Franchise_choise src={`./img/franchise/factory_img.png`} 
                                img_title={"FACTORY"} 
                                txt_content1={"프랜차이즈 본사에서 원두를 직접 볶는 카페다운 카페가 국내에 몇 군데 없습니다."}
                                txt_content2={" 컴포즈커피의 가장 큰 장점은 본사에서 직수입한 원두를 직접 볶기 때문에 안정적인 물량 확보는 기본이고, 맛이 아주 일정하다는 거에요."}
                                txt_title={"대연혁신지구점"}/>
                                <Franchise_choise src={`./img/franchise/quality_img.png`} 
                                img_title={"QUALITY"} 
                                txt_content1={"일반 프랜차이즈는 저가형 재료를 많이 사용합니다. 재료비가 적은 건 좋지만 카페는 첫째도 맛, 둘째도 맛이라고 생각해요."}
                                txt_content2={"컴포즈커피는 모든 라떼나 음료에 1등급 프리미엄 우유만 사용한다고 들었어요."}
                                txt_content3={"또한 자체 OEM 제품들이 많은데 그만큼 믿고 판매할 수 있다는 증거라 생각해요."}
                                txt_title={"반송점"}/>
                                <Franchise_choise src={`./img/franchise/easy_img.png`} 
                                img_title={"EASY"} 
                                txt_content1={"친구가 운영하는 컴포즈커피 매장에서 잠시 일을 도와준 경험이 있어요. 전혀 관심 없던 분야였는데, 일을 해보니 운영 방법도 간단하고 마진률도 상당히 괜찮았어요."}
                                txt_content3={"이래저래 알아보다보니 어느덧 제가 직접 매장을 운영하고 있더라구요."}
                                txt_title={"정관제일점"}/>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        </>
    );
}

export default franchise;
