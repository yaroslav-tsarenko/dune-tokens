import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FooterDesktop2.css";

const FooterDesktop2 = ({
  className = "",
  desert1,
  propTextDecoration,
  propTextDecoration1,
  propTextDecoration2,
  propTextDecoration3,
}) => {
  const aboutUsStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  const servicesStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration1,
    };
  }, [propTextDecoration1]);

  const services1Style = useMemo(() => {
    return {
      textDecoration: propTextDecoration2,
    };
  }, [propTextDecoration2]);

  const privacyPolicyStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration3,
    };
  }, [propTextDecoration3]);

  return (
    <footer className={`footer-desktop2 ${className}`}>
      <div className="frame-parent25">
        <div className="logo-parent">
          <div className="logo7">
            <img className="desert-1-icon7" alt="" src={desert1} />
            <h1 className="dunetokens7">DuneTokens</h1>
          </div>
          <div className="explore-a-seamless2">
            Explore a seamless blend of hosting services and crypto mining
            capabilities at CryptoNovaX
          </div>
        </div>
        <div className="footer-links1">
          <div className="footer-link-columns">
            <h3 className="important-links6">IMPORTANT LINKS</h3>
            <div className="about-us6">About Us</div>
            <div className="contact-us10">Contact Us</div>
            <div className="agent-contact6">Agent Contact</div>
            <div className="services6">Services</div>
          </div>
          <div className="footer-link-columns1">
            <h3 className="important-links7">IMPORTANT LINKS</h3>
            <a className="about-us7" style={aboutUsStyle}>
              About Us
            </a>
            <div className="contact-us11">Contact Us</div>
            <div className="agent-contact7">Agent Contact</div>
            <a className="services7" style={servicesStyle}>
              Services
            </a>
          </div>
          <div className="footer-link-columns2">
            <h3 className="important-links8">IMPORTANT LINKS</h3>
            <div className="about-us8">About Us</div>
            <div className="contact-us12">Contact Us</div>
            <div className="agent-contact8">Agent Contact</div>
            <a className="services8" style={services1Style}>
              Services
            </a>
          </div>
        </div>
      </div>
      <div className="footer-menu2">
        <div className="shopsphere-crypto-all2">
          © 2023 ShopSphere Crypto. All Rights Reserved.
        </div>
        <div className="legal-menu2">
          <a className="privacy-policy4" style={privacyPolicyStyle}>
            Privacy Policy
          </a>
          <div className="tearms-conditions2">{`Tearms & Conditions`}</div>
        </div>
      </div>
    </footer>
  );
};

FooterDesktop2.propTypes = {
  className: PropTypes.string,
  desert1: PropTypes.string,

  /** Style props */
  propTextDecoration: PropTypes.any,
  propTextDecoration1: PropTypes.any,
  propTextDecoration2: PropTypes.any,
  propTextDecoration3: PropTypes.any,
};

export default FooterDesktop2;
