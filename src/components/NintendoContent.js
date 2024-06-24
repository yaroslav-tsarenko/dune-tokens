import OverlayBorderShadow2 from "./OverlayBorderShadow2";
import OverlayBorderShadow4 from "./OverlayBorderShadow4";
import PropTypes from "prop-types";
import "./NintendoContent.css";

const NintendoContent = ({ className = "" }) => {
  return (
    <div className={`nintendo-content ${className}`}>
      <h3 className="nintendo">Nintendo</h3>
      <div className="nintendo-card-container1">
        <OverlayBorderShadow2
          link="/link-11@2x.png"
          nintendoEShopCard25="Nintendo eShop Card £25"
          nintendoPriceSeparator="25."
        />
        <OverlayBorderShadow2
          link="/link-12@2x.png"
          nintendoEShopCard25="Nintendo eShop Card £50"
          nintendoPriceSeparator="50."
          propWidth="194.9px"
          propDisplay="flex"
          propFlex="unset"
        />
        <OverlayBorderShadow2
          link="/link-13@2x.png"
          nintendoEShopCard25="Nintendo eShop Card £75"
          nintendoPriceSeparator="75."
          propWidth="194.9px"
          propDisplay="flex"
          propFlex="unset"
        />
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
        <OverlayBorderShadow4
          link="/link-15@2x.png"
          steamGiftCard25UK="Nintendo Switch Online 12"
          accountOnly="months"
          prop="17."
          prop1="14"
          propHeight="unset"
          propHeight1="unset"
          propWidth="202px"
        />
      </div>
    </div>
  );
};

NintendoContent.propTypes = {
  className: PropTypes.string,
};

export default NintendoContent;
