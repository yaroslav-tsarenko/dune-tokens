import FrameComponent from "../components/FrameComponent";
import Billing from "../components/Billing";
import FooterDesktop from "../components/FooterDesktop";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  return (
    <div className="checkoutpage">
      <FrameComponent
        checkout="Checkout"
        viewOrEditYourCartBeforeC="View or edit your cart before checkout"
      />
      <Billing />
      <FooterDesktop propTextDecoration="none" propTextDecoration1="unset" />
    </div>
  );
};

export default CheckoutPage;
