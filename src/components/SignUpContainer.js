import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./SignUpContainer.css";

const SignUpContainer = ({ className = "" }) => {
  return (
    <section className={`sign-up-container ${className}`}>
      <div className="sign-up-content">
        <div className="sign-in2">
          <div className="sign-up-parent">
            <h1 className="sign-up">Sign up</h1>
            <div className="sign-up-to">
              Sign up to get rewards, and many more
            </div>
          </div>
          <form className="input-fields">
            <div className="name-address-user-fields">
              <div className="name-address-user-labels">
                <div className="your-name">Your Name</div>
              </div>
              <TextField
                className="email-country-password-fields"
                placeholder="Email"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#d1d1d1" },
                  "& .MuiInputBase-root": {
                    height: "40px",
                    backgroundColor: "#fff",
                  },
                  "& .MuiInputBase-input": { color: "#000" },
                }}
              />
            </div>
            <div className="name-address-user-fields1">
              <div className="address-wrapper">
                <div className="address">Address</div>
              </div>
              <div className="country-parent">
                <div className="country">Country</div>
                <img
                  className="email-country-password-spacers"
                  alt=""
                  src="/email-country-password-spacers.svg"
                />
              </div>
            </div>
            <div className="name-address-user-fields2">
              <div className="username-parent">
                <div className="username">Username</div>
                <img
                  className="name-address-user-spacers"
                  alt=""
                  src="/frame-153-11.svg"
                />
              </div>
              <div className="password-parent">
                <div className="password1">Password</div>
                <img className="frame-item" alt="" src="/frame-153-1.svg" />
              </div>
            </div>
            <Button
              className="button1"
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
              Sign Up
            </Button>
          </form>
          <div className="or-sign-up">or, sign up with</div>
          <div className="social-buttons">
            <img
              className="social-icons"
              loading="lazy"
              alt=""
              src="/frame-158.svg"
            />
            <img
              className="social-icons1"
              loading="lazy"
              alt=""
              src="/frame-158.svg"
            />
            <img
              className="social-icons2"
              loading="lazy"
              alt=""
              src="/frame-158.svg"
            />
          </div>
        </div>
      </div>
      <img
        className="divider-icon"
        loading="lazy"
        alt=""
        src="/rectangle-491@2x.png"
      />
    </section>
  );
};

SignUpContainer.propTypes = {
  className: PropTypes.string,
};

export default SignUpContainer;
