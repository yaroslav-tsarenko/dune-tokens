import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`cancellation-period-parent ${className}`}>
      <h1 className="cancellation-period">
        <ol className="cancellation-period1">
          <li>Cancellation Period</li>
        </ol>
      </h1>
      <div className="cancellation-period-details">
        <div className="cancellation-period-headers">
          <div className="time-period">1.1 Time Period</div>
          <div className="you-may-cancel">
            You may cancel your booking or subscription within [10] days of
            purchase or before the start of the service, whichever comes first,
            to receive a full refund.
          </div>
        </div>
        <div className="cancellation-period-headers1">
          <div className="beyond-time-period">1.2 Beyond time period</div>
          <div className="cancellations-made-after1">
            Cancellations made after the specified period may be subject to
            partial or no refund, as outlined below.
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
