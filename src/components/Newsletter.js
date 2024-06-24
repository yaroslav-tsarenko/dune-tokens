import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import "./Newsletter.css";

const Newsletter = ({ className = "" }) => {
  return (
    <section className={`newsletter ${className}`}>
      <div className="newsletter-container">
        <div className="newsletter-content">
          <div className="newsletter-form">
            <div className="newsletter-info">
              <h1 className="strong-stay">Stay up to date</h1>
              <div className="every-month-we-container">
                <p className="every-month-we">
                  Every month we send out an update about our latest deals,
                </p>
                <p className="promotions-and-new">
                  promotions and new products.
                </p>
              </div>
            </div>
            <div className="input-container">
              <TextField
                className="input"
                placeholder="Email address"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#e5e5e5" },
                  "& .MuiInputBase-root": {
                    height: "42px",
                    backgroundColor: "#fff",
                    borderRadius: "0px 0px 0px 0px",
                  },
                  "& .MuiInputBase-input": { color: "#9ca3af" },
                }}
              />
              <button className="button8">
                <div className="subscribe">Subscribe!</div>
              </button>
            </div>
          </div>
        </div>
        <img
          className="d1f-df37-4549-8b82-cdc271e9a18-icon"
          loading="lazy"
          alt=""
          src="/00041d1fdf3745498b82cdc271e9a188@2x.png"
        />
      </div>
    </section>
  );
};

Newsletter.propTypes = {
  className: PropTypes.string,
};

export default Newsletter;
