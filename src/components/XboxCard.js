import OverlayBorderShadow3 from "./OverlayBorderShadow3";
import PropTypes from "prop-types";
import "./XboxCard.css";

const XboxCard = ({ className = "" }) => {
  return (
    <div className={`xbox-card ${className}`}>
      <h3 className="xbox">Xbox</h3>
      <div className="xbox-card-container">
        <div className="overlaybordershadow7">
          <div className="background8">
            <img className="link-icon7" alt="" src="/link-6@2x.png" />
          </div>
          <div className="xbox-card-items-wrapper">
            <div className="xbox-card-items">
              <div className="container5">
                <b className="xbox-gift-card">Xbox Gift Card £25</b>
              </div>
              <div className="digital-code-wrapper2">
                <div className="digital-code7">Digital code</div>
              </div>
              <div className="xbox-prices-parent">
                <div className="xbox-prices">
                  <div className="div16">£</div>
                </div>
                <div className="xbox-price-separator1">25.</div>
                <div className="xbox-empty-prices">
                  <div className="empty-xbox-prices">00</div>
                </div>
              </div>
              <div className="button7">
                <div className="buy7">Buy</div>
              </div>
            </div>
          </div>
        </div>
        <OverlayBorderShadow3
          link="/link-7@2x.png"
          xboxGamePassUltimate1="Xbox Game Pass Ultimate 1"
          month="month"
          prop="12."
        />
        <OverlayBorderShadow3
          link="/link-8@2x.png"
          xboxGamePassUltimate1="Xbox Game Pass Ultimate 2"
          month="months"
          prop="38."
        />
        <OverlayBorderShadow3
          link="/link-8@2x.png"
          xboxGamePassUltimate1="Xbox Game Pass Ultimate 3"
          month="months"
          prop="38."
        />
        <OverlayBorderShadow3
          link="/link-7@2x.png"
          xboxGamePassUltimate1="Xbox Game Pass Ultimate 4"
          month="month"
          prop="12."
        />
      </div>
    </div>
  );
};

XboxCard.propTypes = {
  className: PropTypes.string,
};

export default XboxCard;
