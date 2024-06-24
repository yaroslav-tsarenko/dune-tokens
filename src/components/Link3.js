import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Link3.css";

const Link3 = ({ className = "", image, gaming, propMinWidth }) => {
  const gamingStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`link19 ${className}`}>
      <img className="image-icon1" alt="" src={image} />
      <div className="gaming-wrapper">
        <div className="gaming2" style={gamingStyle}>
          {gaming}
        </div>
      </div>
    </div>
  );
};

Link3.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  gaming: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default Link3;
