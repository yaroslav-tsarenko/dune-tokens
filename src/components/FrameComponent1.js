import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({
  className = "",
  useOfServices,
  eligibility,
  toUseOurServicesYouMustBe,
  accountCreation,
  someOfOurServicesMayRequi,
  propWidth,
  propWidth1,
  propAlignSelf,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const eligibilityOwnershipStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const someOfOurStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <section className={`use-of-services-parent ${className}`}>
      <h1 className="use-of-services-container">
        <ol className="use-of-services">
          <li>{useOfServices}</li>
        </ol>
      </h1>
      <div className="please-read-these1">
        Please read these Terms carefully before using our services. Your use of
        our services indicates your acceptance of these Terms and your agreement
        to comply with them. If you do not agree with any part of these Terms,
        you may not use our services.
      </div>
      <div className="eligibility-ownership-parent" style={frameDivStyle}>
        <div
          className="eligibility-ownership"
          style={eligibilityOwnershipStyle}
        >
          <h1 className="eligibility">{eligibility}</h1>
          <div className="to-use-our">{toUseOurServicesYouMustBe}</div>
        </div>
        <div className="account-trademarks">
          <h1 className="account-creation">{accountCreation}</h1>
          <div className="some-of-our" style={someOfOurStyle}>
            {someOfOurServicesMayRequi}
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  useOfServices: PropTypes.string,
  eligibility: PropTypes.string,
  toUseOurServicesYouMustBe: PropTypes.string,
  accountCreation: PropTypes.string,
  someOfOurServicesMayRequi: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default FrameComponent1;
