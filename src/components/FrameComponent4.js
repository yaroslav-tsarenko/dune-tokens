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
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <header className={`header-parent ${className}`}>
      <div className="header4">
        <div className="container13">
          <div className="logo-wrapper2">
            <div className="logo6">
              <img className="desert-1-icon6" alt="" src="/desert-1@2x.png" />
              <a className="dunetokens6">DuneTokens</a>
            </div>
          </div>
          <TextField
            className="form4"
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
          <div className="login2">
            <TextField
              className="border8"
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
              className="border9"
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
            <img className="link-icon15" alt="" src="/link.svg" />
          </div>
        </div>
        <div className="list5">
          <FormControl
            className="item35"
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
          <div className="item36">
            <div className="link15">
              <a
                className="entertainment2"
                href="https://www.figma.com/design/J8TOA0kk0oMlPkmVHdlfyg?node-id=1-2172"
                target="_blank"
              >{`Entertainment `}</a>
            </div>
            <div className="icon-wrapper2">
              <img className="icon5" alt="" src="/icon-2.svg" />
            </div>
          </div>
          <div className="item37">
            <div className="link16">
              <a className="shopping1">{`Shopping `}</a>
            </div>
            <div className="icon-wrapper3">
              <img className="icon6" alt="" src="/icon-3.svg" />
            </div>
          </div>
          <div className="item38">
            <div className="link17">
              <div className="ea-sports-fc4">EA Sports FC</div>
            </div>
          </div>
          <div className="item39">
            <div className="link18">
              <a className="blog4">Blog</a>
            </div>
          </div>
        </div>
      </div>
      <div className="info">
        <div className="frame-parent8">
          <div className="icon-wrapper4">
            <img className="icon7" alt="" src="/icon-4.svg" />
          </div>
          <div className="receive-your-code-container1">
            <span>{`Receive `}</span>
            <b className="your-code-instantly1">your code instantly</b>
          </div>
        </div>
        <div className="customers-rate-us-container1">
          <span>{`Customers rate us `}</span>
          <b className="b1">4.6 / 5</b>
        </div>
        <b className="strong-secure1">Secure checkout</b>
      </div>
    </header>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
