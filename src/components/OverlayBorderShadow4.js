import { useMemo } from "react";
import PropTypes from "prop-types";
import "./OverlayBorderShadow4.css";

const OverlayBorderShadow4 = ({
  className = "",
  link,
  steamGiftCard25UK,
  accountOnly,
  prop,
  prop1,
  propHeight,
  propHeight1,
  propWidth,
}) => {
  const containerStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const steamGiftCardContainerStyle = useMemo(() => {
    return {
      height: propHeight1,
      width: propWidth,
    };
  }, [propHeight1, propWidth]);

  return (
    <div className={`overlaybordershadow1 ${className}`}>
      <div className="background2">
        <img className="link-icon2" alt="" src={link} />
      </div>
      <div className="overlaybordershadow-inner">
        <div className="container-parent">
          <div className="container2" style={containerStyle}>
            <div
              className="steam-gift-card-container"
              style={steamGiftCardContainerStyle}
            >
              <span>
                <p className="steam-gift-card">{steamGiftCard25UK}</p>
                <p className="account-only">{accountOnly}</p>
              </span>
            </div>
          </div>
          <div className="digital-code-container">
            <div className="digital-code1">Digital code</div>
          </div>
          <div className="frame-group">
            <div className="wrapper">
              <div className="div2">£</div>
            </div>
            <div className="div3">{prop}</div>
            <div className="frame">
              <div className="div4">{prop1}</div>
            </div>
          </div>
          <div className="button1">
            <div className="buy1">Buy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

OverlayBorderShadow4.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  steamGiftCard25UK: PropTypes.string,
  accountOnly: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propHeight1: PropTypes.any,
  propWidth: PropTypes.any,
};

export default OverlayBorderShadow4;
