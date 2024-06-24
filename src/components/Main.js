import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import PropTypes from "prop-types";
import "./Main.css";

const Main = ({ className = "" }) => {
  return (
    <section className={`main ${className}`}>
      <div className="header1">
        <div className="container1">
          <div className="logo-container">
            <div className="logo1">
              <img
                className="desert-1-icon1"
                loading="lazy"
                alt=""
                src="/desert-1@2x.png"
              />
              <a className="dunetokens1">DuneTokens</a>
            </div>
          </div>
          <TextField
            className="form1"
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
          <div className="login">
            <TextField
              className="border2"
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
              className="border3"
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
            <img className="link-icon1" loading="lazy" alt="" src="/link.svg" />
          </div>
        </div>
        <header className="list1">
          <FormControl
            className="item5"
            variant="standard"
            sx={{
              borderColor: "#fff",
              borderStyle: "SOLID",
              borderTopWidth: "0px",
              borderRightWidth: "0px",
              borderBottomWidth: "2px",
              borderLeftWidth: "0px",
              borderRadius: "0px 0px 0px 0px",
              width: "85.5px",
              height: "46px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "46px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "46px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "46px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "46px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": {
                color: "#000",
                fontSize: 14,
                fontWeight: "Medium",
                fontFamily: "Roboto",
                textAlign: "left",
                p: "0 !important",
              },
            }}
          >
            <InputLabel color="primary" />
            <Select
              color="primary"
              disableUnderline
              displayEmpty
              IconComponent={() => (
                <img
                  width="16.8px"
                  height="16.8px"
                  src="/icon-1.svg"
                  style={{ marginRight: "-4.618527782440651e-14px" }}
                />
              )}
            >
              <MenuItem>{`Gaming `}</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
          <div className="item6">
            <div className="link3">
              <a
                className="entertainment1"
                href="https://www.figma.com/design/J8TOA0kk0oMlPkmVHdlfyg?node-id=1-2172"
                target="_blank"
              >{`Entertainment `}</a>
            </div>
            <div className="nav-item-icons">
              <img className="icon1" alt="" src="/icon-2.svg" />
            </div>
          </div>
          <div className="item7">
            <div className="link4">
              <a className="shopping">{`Shopping `}</a>
            </div>
            <div className="icon-wrapper">
              <img className="icon2" alt="" src="/icon-3.svg" />
            </div>
          </div>
          <div className="item8">
            <div className="link5">
              <div className="ea-sports-fc1">EA Sports FC</div>
            </div>
          </div>
          <div className="item9">
            <div className="link6">
              <a
                className="blog1"
                href="https://www.figma.com/design/J8TOA0kk0oMlPkmVHdlfyg?node-id=1-10068"
                target="_blank"
              >
                Blog
              </a>
            </div>
          </div>
        </header>
      </div>
      <div className="main-inner">
        <div className="cart-header-title-wrapper-parent">
          <div className="cart-header-title-wrapper">
            <h1 className="your-cart">Your Cart</h1>
          </div>
          <div className="view-or-edit">
            View or edit your cart before checkout
          </div>
        </div>
      </div>
    </section>
  );
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
