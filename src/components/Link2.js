import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Link2.css";

const Link2 = ({ className = "", image, allIn1Choice, giftCard, propLeft }) => {
  const linkStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={`link12 ${className}`} style={linkStyle}>
      <div className="background13">
        <img className="image-icon" loading="lazy" alt="" src={image} />
      </div>
      <div className="card-subtitles-container">
        <h3 className="all-in-1-choice-gift-container">
          <p className="all-in-1-choice">{allIn1Choice}</p>
          <p className="gift-card">{giftCard}</p>
        </h3>
        <div className="subtitle-backgrounds">
          <img className="background-icon" alt="" src="/background.svg" />
        </div>
      </div>
    </div>
  );
};

Link2.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  allIn1Choice: PropTypes.string,
  giftCard: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
};

export default Link2;
