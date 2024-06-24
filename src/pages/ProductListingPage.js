import FrameComponent4 from "../components/FrameComponent4";
import GiftCardLinks from "../components/GiftCardLinks";
import FrameComponent3 from "../components/FrameComponent3";
import GiftCardDescription from "../components/GiftCardDescription";
import FooterDesktop2 from "../components/FooterDesktop2";
import "./ProductListingPage.css";

const ProductListingPage = () => {
  return (
    <div className="productlistingpage">
      <FrameComponent4 />
      <div className="productlistingpage-inner">
        <div className="heading-1-check-out-our-gift-parent">
          <h3 className="heading-1">Check out our Gift Cards</h3>
          <GiftCardLinks />
        </div>
      </div>
      <section className="productlistingpage-child">
        <FrameComponent3 />
      </section>
      <GiftCardDescription />
      <FooterDesktop2 desert1="/desert-1-12@2x.png" />
    </div>
  );
};

export default ProductListingPage;
