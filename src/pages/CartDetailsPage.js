import Main from "../components/Main";
import CartContent from "../components/CartContent";
import FooterDesktop from "../components/FooterDesktop";
import "./CartDetailsPage.css";

const CartDetailsPage = () => {
  return (
    <div className="cartdetailspage">
      <Main />
      <CartContent />
      <FooterDesktop />
    </div>
  );
};

export default CartDetailsPage;
