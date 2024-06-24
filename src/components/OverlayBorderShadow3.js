import PropTypes from "prop-types";
import "./OverlayBorderShadow3.css";

const OverlayBorderShadow3 = ({
  className = "",
  link,
  xboxGamePassUltimate1,
  month,
  prop,
}) => {
  return (
    <div className={`overlaybordershadow6 ${className}`}>
      <div className="background7">
        <img className="link-icon6" alt="" src={link} />
      </div>
      <div className="overlaybordershadow-inner3">
        <div className="container-group">
          <div className="container4">
            <b className="xbox-game-pass-container">
              <p className="xbox-game-pass">{xboxGamePassUltimate1}</p>
              <p className="month">{month}</p>
            </b>
          </div>
          <div className="digital-code-wrapper1">
            <div className="digital-code6">Digital code</div>
          </div>
          <div className="frame-parent5">
            <div className="wrapper4">
              <div className="div13">£</div>
            </div>
            <div className="div14">{prop}</div>
            <div className="wrapper5">
              <div className="div15">99</div>
            </div>
          </div>
          <div className="button6">
            <div className="buy6">Buy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

OverlayBorderShadow3.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  xboxGamePassUltimate1: PropTypes.string,
  month: PropTypes.string,
  prop: PropTypes.string,
};

export default OverlayBorderShadow3;
