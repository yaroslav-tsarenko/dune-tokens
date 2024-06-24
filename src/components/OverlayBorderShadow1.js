import { useMemo } from "react";
import PropTypes from "prop-types";
import "./OverlayBorderShadow1.css";

const OverlayBorderShadow1 = ({
  className = "",
  playstationStoreSprite200,
  playStationStore,
  playStationStoreGiftCards,
  emptyPrices,
  prop,
  prop1,
  categoryEmptyPrices,
  propLeft,
  propTop,
  propDisplay,
  propMinWidth,
  propWidth,
  propDisplay1,
  propMinWidth1,
  propWidth1,
  propMarginTop,
  propMinWidth2,
  propFlex,
  propFlex1,
  propMinWidth3,
  propFlex2,
}) => {
  const overlayBorderShadowStyle = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  const playStationStoreStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propDisplay, propMinWidth, propWidth]);

  const playStationStoreGiftStyle = useMemo(() => {
    return {
      display: propDisplay1,
      minWidth: propMinWidth1,
    };
  }, [propDisplay1, propMinWidth1]);

  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth1,
      marginTop: propMarginTop,
    };
  }, [propWidth1, propMarginTop]);

  const emptyPricesStyle = useMemo(() => {
    return {
      minWidth: propMinWidth2,
      flex: propFlex,
    };
  }, [propMinWidth2, propFlex]);

  const frameDiv2Style = useMemo(() => {
    return {
      flex: propFlex1,
    };
  }, [propFlex1]);

  const divStyle = useMemo(() => {
    return {
      minWidth: propMinWidth3,
      flex: propFlex2,
    };
  }, [propMinWidth3, propFlex2]);

  return (
    <div
      className={`overlaybordershadow12 ${className}`}
      style={overlayBorderShadowStyle}
    >
      <div className="background17">
        <img
          className="playstation-store-sprite-200x1-icon"
          loading="lazy"
          alt=""
          src={playstationStoreSprite200}
        />
      </div>
      <div className="overlaybordershadow-inner6">
        <div className="container-parent2">
          <div className="container14">
            <div className="playstation-store" style={playStationStoreStyle}>
              {playStationStore}
            </div>
            <div
              className="playstation-store-gift"
              style={playStationStoreGiftStyle}
            >
              {playStationStoreGiftCards}
            </div>
          </div>
          <div className="frame-parent9" style={frameDiv1Style}>
            <div className="wrapper8">
              <div className="div28">£</div>
            </div>
            <div className="empty-prices" style={emptyPricesStyle}>
              {emptyPrices}
            </div>
            <div className="frame-parent10" style={frameDiv2Style}>
              <div className="wrapper9">
                <div className="div29">{prop}</div>
              </div>
              <div className="div30">-</div>
            </div>
            <div className="wrapper10">
              <div className="div31">£</div>
            </div>
            <div className="div32" style={divStyle}>
              {prop1}
            </div>
            <div className="category-empty-prices-wrapper">
              <div className="category-empty-prices">{categoryEmptyPrices}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

OverlayBorderShadow1.propTypes = {
  className: PropTypes.string,
  playstationStoreSprite200: PropTypes.string,
  playStationStore: PropTypes.string,
  playStationStoreGiftCards: PropTypes.string,
  emptyPrices: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  categoryEmptyPrices: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propTop: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
  propDisplay1: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propWidth1: PropTypes.any,
  propMarginTop: PropTypes.any,
  propMinWidth2: PropTypes.any,
  propFlex: PropTypes.any,
  propFlex1: PropTypes.any,
  propMinWidth3: PropTypes.any,
  propFlex2: PropTypes.any,
};

export default OverlayBorderShadow1;
