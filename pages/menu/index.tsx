import Header from "@components/Header";
import Footer from "@components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import DownMenu from "@components/Down_menu";
import Link from "next/link";
import toast from "react-simple-toasts";
import router, { useRouter } from 'next/router';

function Menu({id}) {
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/api/items");
      setItems(response.data);
    }
    fetchData();
    
  }, [reload]);
  const menuDelete= async (id) => {
    if (window.confirm("정말 삭제합니까?")){
      await axios.delete(`/api/item?id=${id}`)
      toast("삭제되었습니다.");  
      await router.push("/menu");
      setReload(!reload)
    } else {
      toast("취소합니다.");
    }
    console.log(id)
  };
  const menuEdit = (id)=>{
    console.log(id)
  }

  return (
    <>
      <div className="wrap">
        <Header />
        <div className="main">
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
          <div className="sec2">
            <div className="menu_nav">
              <ul>
                <li>전체</li>
                <li>커피</li>
                <li>더치커피</li>
                <li>논커피 라떼</li>
                <li>주스</li>
                <li>스무디</li>
                <li>티</li>
                <li>에이드</li>
                <li>프라페</li>
                <li>밀크쉐이크</li>
                <li>사이드메뉴</li>
              </ul>
            </div>
            <div className="menu_content">
              {items.map((item) => (
                <div key={item.id} className="menu_box">
                  <img id="menu_img" src="../img/menu/menu.jpg" alt="" />
                  <div id="menu_info">
                  <Link href={`/menu/${id}/edit`}>
                    <button 
                    type="button" 
                    className="menu_edit"
                    onClick={()=> menuEdit(item.id)}
                    ><FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                  </Link>
                    <button 
                    type="button" 
                    className="menu_delBtn"
                    onClick={()=> menuDelete(item.id)}
                    ><FontAwesomeIcon icon={faTrashCan} />
                    </button>
                    <h4>{item.title}</h4>
                    <div className="line"></div>
                    <div>{item.description || ""}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="createBtn_wrap">
          <Link href="/menu/new">
            <button className="createBtn">상품등록</button>
          </Link>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Menu;