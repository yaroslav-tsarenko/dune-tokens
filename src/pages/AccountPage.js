import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import FooterDesktop from "../components/FooterDesktop";
import "./AccountPage.css";

const AccountPage = () => {
  return (
    <div className="accountpage">
      <FrameComponent
        checkout="Welcome, Darnell"
        viewOrEditYourCartBeforeC="Your Personal Dashboard"
      />
      <FrameComponent1 />
      <FooterDesktop propTextDecoration="unset" propTextDecoration1="unset" />
    </div>
  );
};

export default AccountPage;
