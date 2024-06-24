import OverlayBorderShadow4 from "./OverlayBorderShadow4";
import PropTypes from "prop-types";
import "./PopularCardList.css";

const PopularCardList = ({ className = "" }) => {
  return (
    <div className={`popular-card-list ${className}`}>
      <div className="apple-card">
        <div className="overlaybordershadow2">
          <div className="background3">
            <img className="link-icon3" alt="" src="/link-1@2x.png" />
          </div>
          <div className="apple-card-content">
            <div className="apple-card-info">
              <div className="container3">
                <b className="variable-apple-gift-container">
                  <p className="variable-apple-gift">
                    Variable Apple Gift Card —
                  </p>
                  <p className="email-delivery">Email Delivery</p>
                </b>
              </div>
              <div className="apple-card-button">
                <div className="digital-code2">Digital code</div>
              </div>
              <div className="steam-card-price">
                <div className="frame-div">
                  <div className="div5">£</div>
                </div>
                <div className="div6">10.</div>
                <div className="frame-container">
                  <div className="empty-price-wrapper">
                    <div className="empty-price">00</div>
                  </div>
                  <div className="sub-price-separator">-</div>
                </div>
                <div className="wrapper1">
                  <div className="div7">£</div>
                </div>
                <div className="price-separator">500.</div>
                <div className="empty-price-container">
                  <div className="empty-price1">00</div>
                </div>
              </div>
              <div className="button2">
                <div className="buy2">Buy</div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlaybordershadow3">
          <div className="background4">
            <img
              className="x180png-icon"
              loading="lazy"
              alt=""
              src="/3562194728180x180png@2x.png"
            />
          </div>
          <div className="overlaybordershadow-child">
            <div className="frame-parent1">
              <div className="variable-xbox-50-digital-card-parent">
                <b className="variable-xbox-50">{`Variable Xbox $50 Digital Card `}</b>
                <div className="digital-code3">Digital code</div>
                <div className="apple-card-price">
                  <div className="price-symbol">
                    <div className="div8">£</div>
                  </div>
                  <div className="price-separator1">10.</div>
                  <div className="price-decimal">
                    <div className="price-decimal-symbol">
                      <div className="empty-price2">00</div>
                    </div>
                    <div className="price-unit">-</div>
                  </div>
                  <div className="price-unit-symbol">
                    <div className="div9">£</div>
                  </div>
                  <div className="empty-price-separator">500.</div>
                  <div className="empty-price-decimal">
                    <div className="empty-price-decimal1">00</div>
                  </div>
                </div>
              </div>
              <div className="button3">
                <div className="buy3">Buy</div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlaybordershadow4">
          <div className="background5">
            <img className="link-icon4" alt="" src="/link-2@2x.png" />
          </div>
          <div className="overlaybordershadow-inner1">
            <div className="variable-google-play-gift-code-parent">
              <b className="variable-google-play-container">
                <p className="variable-google-play">
                  Variable Google Play gift code
                </p>
                <p className="p">£5-100</p>
              </b>
              <div className="digital-code-frame">
                <div className="digital-code4">Digital code</div>
              </div>
              <div className="frame-wrapper">
                <div className="frame-parent2">
                  <div className="wrapper2">
                    <div className="div10">£</div>
                  </div>
                  <div className="price-separator2">5.</div>
                  <div className="frame-parent3">
                    <div className="empty-price-frame">
                      <div className="empty-price3">00</div>
                    </div>
                    <div className="price-separator3">-</div>
                  </div>
                  <div className="wrapper3">
                    <div className="div11">£</div>
                  </div>
                  <div className="price-separator4">100.</div>
                  <div className="empty-price-wrapper1">
                    <div className="empty-price4">00</div>
                  </div>
                </div>
              </div>
              <div className="button-wrapper">
                <div className="button4">
                  <div className="buy4">Buy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlaybordershadow5">
          <div className="background6">
            <img className="link-icon5" alt="" src="/link-3@2x.png" />
          </div>
          <div className="overlaybordershadow-inner2">
            <div className="amazoncouk-gift-card-100-parent">
              <b className="amazoncouk-gift-card">
                Amazon.co.uk Gift Card £100
              </b>
              <div className="frame-parent4">
                <div className="digital-code-parent">
                  <div className="digital-code5">Digital code</div>
                  <div className="xbox-card-price">
                    <div className="xbox-price-symbol">
                      <div className="div12">£</div>
                    </div>
                    <div className="xbox-price-separator">100.</div>
                    <div className="xbox-price-decimal">
                      <div className="xbox-empty-price">00</div>
                    </div>
                  </div>
                </div>
                <div className="button5">
                  <div className="buy5">Buy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <OverlayBorderShadow4
          link="/link-4@2x.png"
          steamGiftCard25UK="Steam Gift Card £25 (UK"
          accountOnly="account only)"
          prop="25."
          prop1="00"
        />
      </div>
    </div>
  );
};

PopularCardList.propTypes = {
  className: PropTypes.string,
};

export default PopularCardList;
