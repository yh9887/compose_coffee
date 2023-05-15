import Header from "@components/Header";
import Footer from "@components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";

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
      setNotice(response.data);
    }
    fetchData();
  }, []);
  console.log("🚀 notice:", notice);

  return (
    <>
      <Header />
      <div>{notice.title}</div>
      <div>{notice.body}</div>
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
