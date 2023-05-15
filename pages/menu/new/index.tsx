import Footer from "@components/Footer";
import Header from "@components/Header";

function NewMenu() {
  return (
    <>
      <Header />
      <form className="p-4 pb-20">
        <div className="fixed bottom-0 left-0 flex justify-center w-full pt-4 pb-8 border-t border-transparent drop-shadow-2xl bg-white z-20">
          <button
            type="submit"
            className="w-11/12 py-4 text-center text-white font-medium bg-main-500 rounded"
          >
            등록하기
          </button>
        </div>
      </form>
      <Footer />
    </>
  );
}

export default NewMenu;
