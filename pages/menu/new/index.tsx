import Footer from "@components/Footer";
import Header from "@components/Header";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import DownMenu from "@components/Down_menu";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import toast from "react-simple-toasts";

function NewMenu() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/api/categories");
      setCategories(response.data);
    }
    fetchData();
  }, []);

  const itemCreateHandler = async () => {
    // 아이템 생성
    await axios.post("/api/item", {
      title,
      description,
      categoryId: selectedCategory,
    });
    // 메뉴페이지이동
    
toast("정상적으로 등록되었습니다.");  
    router.push("/menu");
  };

  return (
    <>
      <Header />
      <div className="sec1">
            <img src="../img/menu/banner.jpg" alt="" />
            <h1 className="sec1_title">MENU</h1>
            <div className="nav">
              <div className="home">
                <FontAwesomeIcon
                  icon={faHouseChimney}
                  className={"fa-solid fa-house-chimney "}
                />
              </div>
              <div className="nav_menu">
                <div className="top_menu">
                  <span>MENU</span>
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className={"fa-sharp fa-solid fa-angle-down"}
                  />
                </div>
                <DownMenu />
              </div>
            </div>
          </div>
      <div className="form">
        <form style={{ margin: "10px" }}>
          <select onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">선택</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.title}
              </option>
            ))}
          </select>
          <h3 className="form_title">상품명</h3>
          <input
            type="text"
            placeholder="상품명을 입력해주세요."
            onChange={(e) => setTitle(e.target.value)}
            className="form_input"
          />
          <h3 className="form_title">상품소개</h3>
          <textarea
            placeholder="소개글을 입력해주세요."
            onChange={(e) => setDescription(e.target.value)}
            className="form_info"
          />
          <h3 className="form_title">대표 이미지</h3>
          <input type="file" onChange={() => console.log("이미지 선택 완료")} />
          <div>
            <button type="button" onClick={itemCreateHandler} className="form_button createBtn">
              등록하기
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default NewMenu;
