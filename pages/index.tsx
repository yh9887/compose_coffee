import Header from "@components/Header";
import Footer from "@components/Footer";
export default function Home() {
  return(
    <>
      <Header />
      <div className="video_wrap">
        <video width="750" height="500" controls autoPlay muted loop>
          <source src="img/main.mp4"/>
        </video>
      </div>
      <Footer />
    </>
  );
}
