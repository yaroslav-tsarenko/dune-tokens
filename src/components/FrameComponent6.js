import PropTypes from "prop-types";
import "./FrameComponent6.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <section className={`info-container-wrapper ${className}`}>
      <div className="info-container">
        <div className="info-item-parent">
          <div className="info-item">
            <img className="icon1" alt="" src="/icon-4.svg" />
          </div>
          <div className="receive-your-code-container">
            <span>{`Receive `}</span>
            <b className="your-code-instantly">your code instantly</b>
          </div>
        </div>
        <div className="customers-rate-us-container">
          <span>{`Customers rate us `}</span>
          <b className="b">4.6 / 5</b>
        </div>
        <b className="strong-secure">Secure checkout</b>
      </div>
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
