import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import CartItemHeader from "./CartItemHeader";
import PropTypes from "prop-types";
import "./CartContent.css";

const CartContent = ({ className = "" }) => {
  return (
    <section className={`cart-content ${className}`}>
      <div className="cart-items">
        <div className="cart-item">
          <div className="cart-summary">
            <div className="header2">
              <div className="header-child" />
              <div className="cart-summary-header-title">
                <b className="product">Product</b>
              </div>
              <div className="cart-summary-header-quantity-p">
                <b className="price">Price</b>
                <b className="quantity">Quantity</b>
              </div>
              <b className="total">Total</b>
            </div>
            <div className="cart-summary-item">
              <img
                className="image-icon1"
                loading="lazy"
                alt=""
                src="/image@2x.png"
              />
              <div className="cart-summary-item-title-discou">
                <b className="gift-card-1201">Gift Card $120</b>
                <b className="discount-20-off">Discount: 20% OFF</b>
              </div>
              <div className="cart-summary-item-price">
                <div className="cart-summary-item-price-value">
                  <b className="cart-summary-item1">$120.00</b>
                  <b className="credits1">12 Credits</b>
                </div>
                <div className="cart-summary-item-quantity">
                  <div className="cart-summary-item-quantity-con">
                    <div className="cart-summary-item-quantity-inc">
                      <img
                        className="icon-plus1"
                        loading="lazy"
                        alt=""
                        src="/iconplus.svg"
                      />
                    </div>
                    <b className="cart-summary-item2">3</b>
                    <input
                      className="cart-summary-item-quantity-inc1"
                      type="checkbox"
                    />
                  </div>
                  <FormControl
                    className="cart-summary-item-quantity-tim"
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
                          src="/cart-summary-item-quantity-time-icon-wrapper.svg"
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
              <b className="cart-summary-item3">$120.00</b>
            </div>
          </div>
          <CartItemHeader />
          <CartItemHeader />
          <div className="cart-actions">
            <div className="cart-actions-divider" />
            <div className="cart-action-buttons">
              <Button
                className="button"
                disableElevation
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#000",
                  fontSize: "18",
                  borderColor: "#000",
                  borderRadius: "4px",
                  "&:hover": { borderColor: "#000" },
                  width: 133,
                  height: 54,
                }}
              >
                Go Back
              </Button>
              <Button
                className="button1"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "18",
                  background: "#262626",
                  borderRadius: "4px",
                  "&:hover": { background: "#262626" },
                  width: 146,
                  height: 54,
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
        <div className="checkout-details">
          <div className="checkout-details1">
            <div className="header3">
              <b className="checkout-details2">Checkout Details</b>
            </div>
          </div>
          <div className="checkout-summary">
            <div className="checkout-summary-items">
              <b className="cart-subtotal">Cart Subtotal</b>
              <b className="checkout-summary-item">$360.00</b>
            </div>
          </div>
          <div className="checkout-charges">
            <div className="checkout-charge-items">
              <div className="checkout-charge-item-labels">
                <b className="shipping-handling">{`Shipping & Handling`}</b>
                <b className="other-taxes">Other Taxes</b>
              </div>
              <div className="checkout-charge-item-labels1">
                <b className="b">$0.00</b>
                <b className="b1">$0.00</b>
              </div>
            </div>
          </div>
          <div className="horizontal-rule-wrapper">
            <div className="horizontal-rule" />
          </div>
          <div className="checkout-summary1">
            <div className="grand-total-parent">
              <b className="grand-total">Grand Total</b>
              <b className="b2">$360.00</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CartContent.propTypes = {
  className: PropTypes.string,
};

export default CartContent;
