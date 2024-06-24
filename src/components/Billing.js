import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./Billing.css";

const Billing = ({ className = "" }) => {
  return (
    <section className={`billing ${className}`}>
      <div className="billing-container-parent">
        <form className="billing-container">
          <div className="billing-form">
            <h2 className="checkout1">Checkout</h2>
            <div className="header5">
              <b className="billing-details">Billing Details</b>
            </div>
            <div className="form-field-block">
              <div className="row-1">
                <div className="block-1">
                  <b className="first-name">First Name</b>
                </div>
                <div className="block-2">
                  <b className="last-name">Last Name</b>
                </div>
              </div>
              <div className="row-2">
                <div className="block-11">
                  <b className="company-name">Company Name</b>
                </div>
                <div className="block-21">
                  <b className="country">Country</b>
                  <img className="icon4" alt="" src="/icon-4.svg" />
                </div>
              </div>
              <div className="row-3">
                <div className="block-12">
                  <b className="street-address">Street Address</b>
                </div>
              </div>
              <div className="block-22">
                <b className="apartment-suite">
                  Apartment / Suite / Unit / etc. (Optional)
                </b>
              </div>
              <div className="row-4">
                <div className="block-13">
                  <b className="town-city">Town / City</b>
                </div>
              </div>
              <div className="block-23">
                <b className="email-address">Email Address</b>
              </div>
              <div className="row-5">
                <TextField
                  className="block-14"
                  placeholder="ZIP"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#d9d9d9" },
                    "& .MuiInputBase-root": {
                      height: "50px",
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                      fontSize: "18px",
                    },
                    "& .MuiInputBase-input": { color: "#000" },
                  }}
                />
                <TextField
                  className="block-24"
                  placeholder="Phone"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#d9d9d9" },
                    "& .MuiInputBase-root": {
                      height: "50px",
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                      fontSize: "18px",
                    },
                    "& .MuiInputBase-input": { color: "#000" },
                  }}
                />
              </div>
            </div>
            <div className="billing-form-child" />
            <div className="billing-header">
              <Button
                className="button2"
                disableElevation
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#5a5a5a",
                  fontSize: "16",
                  borderColor: "#d9d9d9",
                  borderRadius: "4px",
                  "&:hover": { borderColor: "#d9d9d9" },
                  width: 100,
                  height: 54,
                }}
              >
                Back
              </Button>
              <Button
                className="button3"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#262626",
                  borderRadius: "4px",
                  "&:hover": { background: "#262626" },
                  width: 137,
                  height: 54,
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
          <div className="order-details">
            <div className="checkout-details3">
              <div className="header6">
                <b className="checkout-details4">Checkout Details</b>
              </div>
              <div className="cart-subtotal-parent">
                <b className="cart-subtotal1">Cart Subtotal</b>
                <b className="order-detail-values">$360.00</b>
              </div>
              <div className="shipping-handling-parent">
                <b className="shipping-handling1">{`Shipping & Handling`}</b>
                <b className="b3">$0.00</b>
              </div>
              <div className="other-taxes-parent">
                <b className="other-taxes1">Other Taxes</b>
                <b className="b4">$0.00</b>
              </div>
              <div className="checkout-details-child" />
              <div className="grand-total-group">
                <b className="grand-total1">Grand Total</b>
                <b className="b5">$360.00</b>
              </div>
            </div>
            <div className="transfer-options">
              <div className="header7">
                <b className="transfer-options1">Transfer Options</b>
              </div>
              <div className="checkout-details5">
                <div className="logos-block">
                  <div className="block-15">
                    <div className="logo-block">
                      <img
                        className="image-1-icon"
                        loading="lazy"
                        alt=""
                        src="/image-1@2x.png"
                      />
                    </div>
                    <b className="bank-transfer">
                      <p className="bank">Bank</p>
                      <p className="transfer">Transfer</p>
                    </b>
                  </div>
                  <div className="block-25">
                    <div className="logo-block1">
                      <img
                        className="image-2-icon"
                        loading="lazy"
                        alt=""
                        src="/image-2@2x.png"
                      />
                    </div>
                    <b className="google-pay">
                      <p className="google">Google</p>
                      <p className="pay">Pay</p>
                    </b>
                  </div>
                </div>
                <div className="block-3-parent">
                  <div className="block-3">
                    <div className="logo-block2">
                      <img
                        className="image-3-icon"
                        loading="lazy"
                        alt=""
                        src="/image-3@2x.png"
                      />
                    </div>
                    <b className="apple-pay">
                      <p className="apple">Apple</p>
                      <p className="pay1">Pay</p>
                    </b>
                  </div>
                  <div className="block-4">
                    <div className="logo-block3">
                      <img
                        className="image-4-icon"
                        loading="lazy"
                        alt=""
                        src="/image-4@2x.png"
                      />
                    </div>
                    <b className="paypal">PayPal</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="checkout2">
          <div className="header8">
            <b className="checkout3">Checkout</b>
          </div>
          <div className="checkout-details6">
            <div className="your-personal-data">
              Your Personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our product
            </div>
            <Button
              className="button4"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#262626",
                borderRadius: "4px",
                "&:hover": { background: "#262626" },
                height: 54,
              }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

Billing.propTypes = {
  className: PropTypes.string,
};

export default Billing;
