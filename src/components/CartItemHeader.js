import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import PropTypes from "prop-types";
import "./CartItemHeader.css";

const CartItemHeader = ({ className = "" }) => {
  return (
    <div className={`cart-item-header ${className}`}>
      <div className="cart-item-header-divider" />
      <div className="cart-item-image-wrapper">
        <img className="image-icon" loading="lazy" alt="" src="/image@2x.png" />
        <div className="cart-item-title-price">
          <b className="gift-card-120">Gift Card $120</b>
          <b className="worth-usd-400">Worth USD $400</b>
        </div>
        <div className="cart-item-quantity">
          <div className="cart-item-quantity-value">
            <b className="cart-item-quantity1">$120.00</b>
            <b className="credits">12 Credits</b>
          </div>
          <div className="cart-item-quantity-controls">
            <div className="cart-item-quantity-control-but">
              <div className="cart-item-quantity-increment-d">
                <img
                  className="icon-plus"
                  loading="lazy"
                  alt=""
                  src="/iconplus.svg"
                />
              </div>
              <b className="cart-item-quantity2">3</b>
              <input className="cart-item-quantity-decrement" type="checkbox" />
            </div>
            <FormControl
              className="cart-item-quantity-time-value"
              variant="standard"
              sx={{
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#262626",
                borderRadius: "8px",
                width: "100%",
                height: "38px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "38px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "38px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "38px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "38px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#fff",
                  fontSize: 18,
                  fontWeight: "Bold",
                  fontFamily: "Inter",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "16px",
                },
              }}
            >
              <InputLabel color="success" />
              <Select
                color="success"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="16px"
                    height="16px"
                    src="/frame-1000002972-1.svg"
                    style={{ marginRight: "16px" }}
                  />
                )}
              >
                <MenuItem>Hourly</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
        </div>
        <b className="cart-item-divider">$120.00</b>
      </div>
    </div>
  );
};

CartItemHeader.propTypes = {
  className: PropTypes.string,
};

export default CartItemHeader;
