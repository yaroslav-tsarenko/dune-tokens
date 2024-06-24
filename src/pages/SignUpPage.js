import Header1 from "../components/Header1";
import SignUpContainer from "../components/SignUpContainer";
import FooterDesktop1 from "../components/FooterDesktop1";
import "./SignUpPage.css";

const SignUpPage = () => {
  return (
    <div className="signuppage">
      <Header1 />
      <SignUpContainer />
      <FooterDesktop1 />
    </div>
  );
};

export default SignUpPage;
