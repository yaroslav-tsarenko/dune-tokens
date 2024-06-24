import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Link1.css";

const Link1 = ({
  className = "",
  imageShadow,
  hotelGiftCard,
  propTop,
  propLeft,
  propBackgroundColor,
}) => {
  const link1Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const backgroundStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className={`link13 ${className}`} style={link1Style}>
      <div className="background-parent">
        <div className="background14" style={backgroundStyle}>
          <div className="wrapper-imageshadow">
            <img
              className="imageshadow-icon"
              loading="lazy"
              alt=""
              src={imageShadow}
            />
          </div>
        </div>
        <div className="hotel-gift-card-wrapper">
          <h3 className="hotel-gift-card">{hotelGiftCard}</h3>
        </div>
      </div>
      <img className="background-icon1" alt="" src="/background.svg" />
    </div>
  );
};

Link1.propTypes = {
  className: PropTypes.string,
  imageShadow: PropTypes.string,
  hotelGiftCard: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propBackgroundColor: PropTypes.any,
};

export default Link1;
