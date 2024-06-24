import Header2 from "../components/Header2";
import MainContent from "../components/MainContent";
import FrameComponent2 from "../components/FrameComponent2";
import FooterDesktop1 from "../components/FooterDesktop1";
import "./ProductPage.css";

const ProductPage = () => {
  return (
    <div className="productpage">
      <Header2 />
      <main className="content">
        <section className="main-content-parent">
          <MainContent />
          <FrameComponent2 />
        </section>
      </main>
      <FooterDesktop1 />
    </div>
  );
};

export default ProductPage;
