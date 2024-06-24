import Link3 from "./Link3";
import PropTypes from "prop-types";
import "./GiftCardLinks.css";

const GiftCardLinks = ({ className = "" }) => {
  return (
    <div className={`gift-card-links ${className}`}>
      <div className="link20">
        <div className="gift-card-link-images">
          <img
            className="image-icon2"
            loading="lazy"
            alt=""
            src="/image1@2x.png"
          />
        </div>
        <div className="all-categories">
          <p className="all">All</p>
          <p className="categories">Categories</p>
        </div>
      </div>
      <div className="link21">
        <div className="image-wrapper">
          <img className="image-icon3" alt="" src="/image-11@2x.png" />
        </div>
        <div className="entertainment3">Entertainment</div>
      </div>
      <Link3 image="/image-2@2x.png" gaming="Gaming" />
      <div className="link22">
        <img className="image-icon4" alt="" src="/image-3@2x.png" />
        <a className="shopping2">Shopping</a>
      </div>
      <Link3 image="/image-4@2x.png" gaming="Travel" propMinWidth="38.6px" />
      <Link3 image="/image-5@2x.png" gaming="Food" propMinWidth="32.1px" />
    </div>
  );
};

GiftCardLinks.propTypes = {
  className: PropTypes.string,
};

export default GiftCardLinks;
