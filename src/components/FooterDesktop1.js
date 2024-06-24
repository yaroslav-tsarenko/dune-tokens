import PropTypes from "prop-types";
import "./FooterDesktop1.css";

const FooterDesktop1 = ({ className = "" }) => {
  return (
    <footer className={`footer-desktop1 ${className}`}>
      <div className="footer-container1">
        <div className="footer-top">
          <div className="logo4">
            <img
              className="desert-1-icon4"
              loading="lazy"
              alt=""
              src="/desert-1-11@2x.png"
            />
            <h1 className="dunetokens4">DuneTokens</h1>
          </div>
          <div className="explore-a-seamless1">
            Explore a seamless blend of hosting services and crypto mining
            capabilities at CryptoNovaX
          </div>
        </div>
        <div className="footer-links-container">
          <div className="footer-links-columns">
            <h3 className="important-links3">IMPORTANT LINKS</h3>
            <div className="about-us3">About Us</div>
            <div className="contact-us7">Contact Us</div>
            <div className="agent-contact3">Agent Contact</div>
            <div className="services3">Services</div>
          </div>
          <div className="footer-links-columns1">
            <h3 className="important-links4">IMPORTANT LINKS</h3>
            <div className="about-us4">About Us</div>
            <div className="contact-us8">Contact Us</div>
            <div className="agent-contact4">Agent Contact</div>
            <div className="services4">Services</div>
          </div>
          <div className="footer-links-columns2">
            <h3 className="important-links5">IMPORTANT LINKS</h3>
            <div className="about-us5">About Us</div>
            <div className="contact-us9">Contact Us</div>
            <div className="agent-contact5">Agent Contact</div>
            <div className="services5">Services</div>
          </div>
        </div>
      </div>
      <div className="footer-menu1">
        <div className="shopsphere-crypto-all1">
          © 2023 ShopSphere Crypto. All Rights Reserved.
        </div>
        <div className="legal-menu1">
          <div className="privacy-policy3">Privacy Policy</div>
          <div className="tearms-conditions1">{`Tearms & Conditions`}</div>
        </div>
      </div>
    </footer>
  );
};

FooterDesktop1.propTypes = {
  className: PropTypes.string,
};

export default FooterDesktop1;
