import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import "./Header2.css";

const Header2 = ({ className = "" }) => {
  return (
    <header className={`header3 ${className}`}>
      <nav className="container12">
        <div className="logo-wrapper1">
          <div className="logo5">
            <img
              className="desert-1-icon5"
              loading="lazy"
              alt=""
              src="/desert-1@2x.png"
            />
            <a className="dunetokens5">DuneTokens</a>
          </div>
        </div>
        <TextField
          className="form3"
          placeholder="Search for"
          variant="outlined"
          sx={{
            "& fieldset": { border: "none" },
            "& .MuiInputBase-root": {
              height: "32px",
              borderRadius: "0px 0px 0px 0px",
              fontSize: "14px",
            },
            "& .MuiInputBase-input": { color: "#9ca3af" },
            width: "318.7px",
          }}
        />
        <div className="login1">
          <TextField
            className="border6"
            placeholder="GB"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <img width="24px" height="16px" src="/imageborder.png" />
              ),
            }}
            sx={{
              "& fieldset": { borderColor: "#e5e5e5" },
              "& .MuiInputBase-root": {
                height: "32px",
                paddingLeft: "17px",
                borderRadius: "0px 0px 0px 0px",
              },
              "& .MuiInputBase-input": { paddingLeft: "8px", color: "#666" },
              width: "89.1px",
            }}
          />
          <TextField
            className="border7"
            placeholder="Login"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <img width="19.2px" height="19.2px" src="/icon.svg" />
              ),
            }}
            sx={{
              "& fieldset": { borderColor: "#e5e5e5" },
              "& .MuiInputBase-root": {
                height: "32px",
                paddingLeft: "17px",
                borderRadius: "0px 0px 0px 0px",
                fontSize: "15.9px",
              },
              "& .MuiInputBase-input": { paddingLeft: "8px", color: "#666" },
            }}
          />
          <img className="link-icon14" loading="lazy" alt="" src="/link.svg" />
        </div>
      </nav>
      <div className="list4">
        <div className="item30">
          <a className="gaming">
            <span className="gaming1">Gaming</span>
            {` `}
          </a>
          <div className="icon-container">
            <img className="icon2" alt="" src="/icon-1.svg" />
          </div>
        </div>
        <div className="item31">
          <div className="link8">
            <a className="entertainment1">{`Entertainment `}</a>
          </div>
          <div className="icon-frame">
            <img className="icon3" alt="" src="/icon-2.svg" />
          </div>
        </div>
        <div className="item32">
          <div className="link9">
            <a className="shopping">{`Shopping `}</a>
          </div>
          <div className="icon-wrapper1">
            <img className="icon4" alt="" src="/icon-3.svg" />
          </div>
        </div>
        <div className="item33">
          <div className="link10">
            <a className="ea-sports-fc3">EA Sports FC</a>
          </div>
        </div>
        <div className="item34">
          <div className="link11">
            <a className="blog3">Blog</a>
          </div>
        </div>
      </div>
    </header>
  );
};

Header2.propTypes = {
  className: PropTypes.string,
};

export default Header2;
