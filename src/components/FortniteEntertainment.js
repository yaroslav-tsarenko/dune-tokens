import OverlayBorderShadow4 from "./OverlayBorderShadow4";
import OverlayBorderShadow2 from "./OverlayBorderShadow2";
import PropTypes from "prop-types";
import "./FortniteEntertainment.css";

const FortniteEntertainment = ({ className = "" }) => {
  return (
    <div className={`fortnite-entertainment ${className}`}>
      <h3 className="fortnite-and-entertainment">Fortnite and Entertainment</h3>
      <div className="fortnite-container">
        <div className="overlaybordershadow9">
          <div className="background10">
            <img className="link-icon9" alt="" src="/link-16@2x.png" />
          </div>
          <div className="fortnite-voucher-cards">
            <div className="fortnite-voucher-options">
              <div className="container7">
                <div className="fortnite-1000-v-bucks-container">
                  <p className="fortnite-1000-v-bucks">
                    Fortnite 1000 V-Bucks Digital
                  </p>
                  <p className="code">Code</p>
                </div>
              </div>
              <div className="digital-delivery-type">
                <div className="digital-code9">Digital code</div>
              </div>
              <div className="fortnite-voucher-prices">
                <div className="fortnite-price-values">
                  <div className="div18">£</div>
                </div>
                <div className="div19">6.</div>
                <div className="netflix-price-value-wrapper">
                  <div className="netflix-price-value">99</div>
                </div>
              </div>
              <div className="button10">
                <div className="buy9">Buy</div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlaybordershadow10">
          <div className="background11">
            <img className="link-icon10" alt="" src="/link-17@2x.png" />
          </div>
          <div className="overlaybordershadow-inner4">
            <div className="container-container">
              <div className="container8">
                <div className="fortnite-2800-v-bucks-container">
                  <p className="fortnite-2800-v-bucks">
                    Fortnite 2800 V-Bucks Digital
                  </p>
                  <p className="code1">Code</p>
                </div>
              </div>
              <div className="digital-code-wrapper4">
                <div className="digital-code10">Digital code</div>
              </div>
              <div className="frame-parent6">
                <div className="wrapper6">
                  <div className="div20">£</div>
                </div>
                <div className="div21">17.</div>
                <div className="wrapper7">
                  <div className="div22">49</div>
                </div>
              </div>
              <div className="button11">
                <div className="buy10">Buy</div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlaybordershadow11">
          <div className="background12">
            <img className="link-icon11" alt="" src="/link-18@2x.png" />
          </div>
          <div className="overlaybordershadow-inner5">
            <div className="container-parent1">
              <div className="container9">
                <div className="variable-netflix-gift">
                  Variable Netflix Gift Card
                </div>
              </div>
              <div className="digital-code-wrapper5">
                <div className="digital-code11">Digital code</div>
              </div>
              <div className="spotify-price-value-parent">
                <div className="spotify-price-value">
                  <div className="div23">£</div>
                </div>
                <div className="spotify-price-value1">25.</div>
                <div className="frame-parent7">
                  <div className="netflix-amount-wrapper">
                    <div className="netflix-amount">00</div>
                  </div>
                  <div className="div24">-</div>
                </div>
                <div className="spotify-price-value2">
                  <div className="div25">£</div>
                </div>
                <div className="div26">200.</div>
                <div className="price-container">
                  <div className="empty-price5">00</div>
                </div>
              </div>
              <div className="button12">
                <div className="buy11">Buy</div>
              </div>
            </div>
          </div>
        </div>
        <OverlayBorderShadow4
          link="/link-14@2x.png"
          steamGiftCard25UK="Nintendo Switch Online 12"
          accountOnly="months"
          prop="17."
          prop1="14"
          propHeight="unset"
          propHeight1="unset"
          propWidth="202px"
        />
        <OverlayBorderShadow2
          link="/link-20@2x.png"
          nintendoEShopCard25="Spotify Premium Gift Card £30"
          nintendoPriceSeparator="30."
          propWidth="unset"
          propDisplay="unset"
          propFlex="1"
        />
      </div>
    </div>
  );
};

FortniteEntertainment.propTypes = {
  className: PropTypes.string,
};

export default FortniteEntertainment;
