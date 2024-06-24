import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Link.css";

const Link = ({
  className = "",
  imageShadow,
  beautyFashion,
  choiceGiftCard,
  propLeft,
  propTop,
  propBackgroundColor,
}) => {
  const link2Style = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  const background1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className={`link14 ${className}`} style={link2Style}>
      <div className="background15" style={background1Style}>
        <div className="wrapper-imageshadow1">
          <img
            className="imageshadow-icon1"
            loading="lazy"
            alt=""
            src={imageShadow}
          />
        </div>
      </div>
      <div className="beauty-fashion-choice-gift-c-parent">
        <h3 className="beauty-fashion-container">
          <p className="beauty-fashion">{beautyFashion}</p>
          <p className="choice-gift-card">{choiceGiftCard}</p>
        </h3>
        <div className="background-wrapper">
          <img className="background-icon2" alt="" src="/background.svg" />
        </div>
      </div>
    </div>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  imageShadow: PropTypes.string,
  beautyFashion: PropTypes.string,
  choiceGiftCard: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propTop: PropTypes.any,
  propBackgroundColor: PropTypes.any,
};

export default Link;
