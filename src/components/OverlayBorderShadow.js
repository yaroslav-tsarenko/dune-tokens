import { useMemo } from "react";
import PropTypes from "prop-types";
import "./OverlayBorderShadow.css";

const OverlayBorderShadow = ({
  className = "",
  robloxSprite200x113png,
  roblox,
  robloxGiftCards,
  prop,
  prop1,
  propTop,
  propMinWidth,
  propMinWidth1,
  propMarginTop,
}) => {
  const overlayBorderShadow1Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const robloxStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const robloxGiftCardsStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const frameDiv3Style = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  return (
    <div
      className={`overlaybordershadow13 ${className}`}
      style={overlayBorderShadow1Style}
    >
      <div className="background18">
        <img
          className="roblox-sprite-200x113png-icon"
          loading="lazy"
          alt=""
          src={robloxSprite200x113png}
        />
      </div>
      <div className="overlaybordershadow-inner7">
        <div className="container-parent3">
          <div className="container15">
            <div className="roblox" style={robloxStyle}>
              {roblox}
            </div>
            <div className="roblox-gift-cards" style={robloxGiftCardsStyle}>
              {robloxGiftCards}
            </div>
          </div>
          <div className="frame-parent11" style={frameDiv3Style}>
            <div className="wrapper11">
              <div className="div33">£</div>
            </div>
            <div className="div34">{prop}</div>
            <div className="frame-parent12">
              <div className="frame-parent13">
                <div className="wrapper12">
                  <div className="div35">00</div>
                </div>
                <div className="div36">-</div>
              </div>
              <div className="wrapper13">
                <div className="div37">£</div>
              </div>
            </div>
            <div className="div38">{prop1}</div>
            <div className="wrapper14">
              <div className="div39">00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

OverlayBorderShadow.propTypes = {
  className: PropTypes.string,
  robloxSprite200x113png: PropTypes.string,
  roblox: PropTypes.string,
  robloxGiftCards: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propMarginTop: PropTypes.any,
};

export default OverlayBorderShadow;
