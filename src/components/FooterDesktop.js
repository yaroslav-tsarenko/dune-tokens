import PropTypes from "prop-types";
import "./FooterDesktop.css";

const FooterDesktop = ({ className = "" }) => {
  return (
    <footer className={`footer-desktop ${className}`}>
      <div className="footer-container">
        <div className="footer-content">
          <div className="logo2">
            <img
              className="desert-1-icon2"
              loading="lazy"
              alt=""
              src="/desert-1-11@2x.png"
            />
            <h1 className="dunetokens2">DuneTokens</h1>
          </div>
          <div className="explore-a-seamless">
            Explore a seamless blend of hosting services and crypto mining
            capabilities at CryptoNovaX
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-links-headers">
            <h3 className="important-links">IMPORTANT LINKS</h3>
            <div className="about-us">About Us</div>
            <div className="contact-us4">Contact Us</div>
            <div className="agent-contact">Agent Contact</div>
            <div className="services">Services</div>
          </div>
          <div className="footer-links-headers1">
            <h3 className="important-links1">IMPORTANT LINKS</h3>
            <div className="about-us1">About Us</div>
            <div className="contact-us5">Contact Us</div>
            <div className="agent-contact1">Agent Contact</div>
            <a className="services1">Services</a>
          </div>
          <div className="footer-links-headers2">
            <h3 className="important-links2">IMPORTANT LINKS</h3>
            <div className="about-us2">About Us</div>
            <div className="contact-us6">Contact Us</div>
            <div className="agent-contact2">Agent Contact</div>
            <div className="services2">Services</div>
          </div>
        </div>
      </div>
      <div className="footer-menu">
        <div className="shopsphere-crypto-all">
          © 2023 ShopSphere Crypto. All Rights Reserved.
        </div>
        <div className="legal-menu">
          <a className="privacy-policy2">Privacy Policy</a>
          <div className="tearms-conditions">{`Tearms & Conditions`}</div>
        </div>
      </div>
    </footer>
  );
};

FooterDesktop.propTypes = {
  className: PropTypes.string,
};

export default FooterDesktop;
