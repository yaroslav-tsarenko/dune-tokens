import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Section.css";

const Section = ({ className = "" }) => {
  return (
    <section className={`section ${className}`}>
      <div className="picture-en-generic-2024-hp-d">
        <h1 className="the-perfect-gift">The Perfect Gift For all Occasions</h1>
        <div className="picture-en-generic-2024-hp-d-inner">
          <Button
            className="frame-child"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#262626",
              borderRadius: "0px 0px 0px 0px",
              "&:hover": { background: "#262626" },
              width: 116,
              height: 46,
            }}
          >
            Buy Now
          </Button>
        </div>
        <div className="button-parent">
          <img className="button-icon" alt="" src="/button-1.svg" />
          <img className="button-icon1" alt="" src="/button-2.svg" />
        </div>
      </div>
    </section>
  );
};

Section.propTypes = {
  className: PropTypes.string,
};

export default Section;
