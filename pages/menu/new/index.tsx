import Footer from "@components/Footer";
import Header from "@components/Header";
import axios from "axios";
import { useEffect, useState } from "react";

function NewMenu() {
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
    await axios.post("/api/item", {
      title,
      description,
      categoryId: selectedCategory,
    });
  };

  return (
    <>
      {/* <Header /> */}
      <form style={{ margin: "10px" }}>
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">선택</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
        </select>
        <h3>상품명</h3>
        <input
          type="text"
          placeholder="상품명을 입력해주세요."
          onChange={(e) => setTitle(e.target.value)}
        />
        <h3>상품소개</h3>
        <textarea
          placeholder="소개글을 입력해주세요."
          onChange={(e) => setDescription(e.target.value)}
        />
        <h3>대표 이미지</h3>
        <input type="file" onChange={() => console.log("이미지 선택 완료")} />
        <div>
          <button type="button" onClick={itemCreateHandler}>
            등록하기
          </button>
        </div>
      </form>
      {/* <Footer /> */}
    </>
  );
}

export default NewMenu;
