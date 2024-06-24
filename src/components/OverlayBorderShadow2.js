import { useMemo } from "react";
import PropTypes from "prop-types";
import "./OverlayBorderShadow2.css";

const OverlayBorderShadow2 = ({
  className = "",
  link,
  nintendoEShopCard25,
  nintendoPriceSeparator,
  propWidth,
  propDisplay,
  propFlex,
}) => {
  const nintendoEShopCardStyle = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
      flex: propFlex,
    };
  }, [propWidth, propDisplay, propFlex]);

  return (
    <div className={`overlaybordershadow8 ${className}`}>
      <div className="background9">
        <img className="link-icon8" alt="" src={link} />
      </div>
      <div className="nintendo-card-items-wrapper">
        <div className="nintendo-card-items">
          <div className="container6">
            <div className="nintendo-eshop-card" style={nintendoEShopCardStyle}>
              {nintendoEShopCard25}
            </div>
          </div>
          <div className="digital-code-wrapper3">
            <div className="digital-code8">Digital code</div>
          </div>
          <div className="nintendo-prices-parent">
            <div className="nintendo-prices">
              <div className="div17">£</div>
            </div>
            <div className="nintendo-price-separator">
              {nintendoPriceSeparator}
            </div>
            <div className="nintendo-empty-prices">
              <div className="empty-nintendo-prices">00</div>
            </div>
          </div>
          <div className="button9">
            <div className="buy8">Buy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

OverlayBorderShadow2.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  nintendoEShopCard25: PropTypes.string,
  nintendoPriceSeparator: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propFlex: PropTypes.any,
};

export default OverlayBorderShadow2;
