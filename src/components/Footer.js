import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "" }) => {
  return (
    <section className={`footer ${className}`}>
      <div className="footer-top">
        <div className="footer-content1">
          <img
            className="footer-links-icon"
            loading="lazy"
            alt=""
            src="/frame-1000006877@2x.png"
          />
          <div className="footer-note">
            <div className="footer-powered">
              <div className="powered-by">{`Powered by `}</div>
              <img
                className="payment-icons"
                loading="lazy"
                alt=""
                src="/payment-icons@2x.png"
              />
            </div>
            <img
              className="footer-note-child"
              loading="lazy"
              alt=""
              src="/vector-341.svg"
            />
            <div className="legal">Legal</div>
            <div className="refunds">Refunds</div>
          </div>
        </div>
      </div>
      <div className="rectangle-parent">
        <div className="frame-child" />
        <div className="name-input">
          <div className="name-fields">
            <div className="contact-information">Contact Information</div>
            <TextField
              className="form-field"
              placeholder="Email"
              variant="outlined"
              sx={{
                "& fieldset": { borderColor: "#d9d9d9" },
                "& .MuiInputBase-root": {
                  height: "54px",
                  backgroundColor: "#fff",
                },
                "& .MuiInputBase-input": { color: "#000" },
              }}
            />
          </div>
          <h3 className="payment-information">Payment Information</h3>
          <div className="card-info">
            <div className="card-information">Card Information</div>
            <div className="form-field1">
              <div className="card-number-placeholder">1234 1234 1234 1234</div>
              <div className="frame-group">
                <img
                  className="frame-item"
                  loading="lazy"
                  alt=""
                  src="/frame-1000006882@2x.png"
                />
                <img
                  className="frame-inner"
                  loading="lazy"
                  alt=""
                  src="/frame-1000006883@2x.png"
                />
                <img
                  className="frame-icon"
                  loading="lazy"
                  alt=""
                  src="/frame-1000006884@2x.png"
                />
              </div>
              <img className="icon5" alt="" src="/icon.svg" />
            </div>
            <div className="card-date">
              <TextField
                className="form-field2"
                placeholder="MM/YY"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#d9d9d9" },
                  "& .MuiInputBase-root": {
                    height: "54px",
                    backgroundColor: "#fff",
                  },
                  "& .MuiInputBase-input": { color: "#d9d9d9" },
                }}
              />
              <TextField
                className="form-field3"
                placeholder="MM/YY"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#d9d9d9" },
                  "& .MuiInputBase-root": {
                    height: "54px",
                    backgroundColor: "#fff",
                  },
                  "& .MuiInputBase-input": { color: "#d9d9d9" },
                }}
              />
            </div>
          </div>
          <div className="name-fields1">
            <div className="carholder-name">Carholder Name</div>
            <TextField
              className="form-field4"
              placeholder="Name on Card"
              variant="outlined"
              sx={{
                "& fieldset": { borderColor: "#d9d9d9" },
                "& .MuiInputBase-root": {
                  height: "54px",
                  backgroundColor: "#fff",
                },
                "& .MuiInputBase-input": { color: "#d9d9d9" },
              }}
            />
          </div>
          <div className="country-input">
            <div className="country-or-region">Country or region</div>
            <div className="form-field5">
              <div className="usa">USA</div>
              <img
                className="country-dropdown-icon"
                alt=""
                src="/country-dropdown.svg"
              />
              <img className="icon6" alt="" src="/icon.svg" />
            </div>
          </div>
          <div className="verification-checkbox">
            <input className="checkbox" type="checkbox" />
            <div className="i-verified-that">
              I verified that my device is eSIM compatible and is not carrier
              locked and i agree to the refund policy.
            </div>
          </div>
          <img
            className="name-input-child"
            loading="lazy"
            alt=""
            src="/vector-342.svg"
          />
          <div className="i-verified-that1">
            I verified that my device is eSIM compatible and is not carrier
            locked and i agree to the refund policy.
          </div>
          <Button
            className="button5"
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
            Pay Now
          </Button>
        </div>
      </div>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
