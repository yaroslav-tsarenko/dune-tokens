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
import "./Header1.css";

const Header1 = ({ className = "" }) => {
  return (
    <div className={`header2 ${className}`}>
      <div className="container11">
        <div className="logo-frame">
          <div className="logo3">
            <img
              className="desert-1-icon3"
              loading="lazy"
              alt=""
              src="/desert-1@2x.png"
            />
            <a className="dunetokens3">DuneTokens</a>
          </div>
        </div>
        <TextField
          className="form2"
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
        <div className="border-parent">
          <TextField
            className="border4"
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
            className="border5"
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
          <img className="link-icon13" loading="lazy" alt="" src="/link.svg" />
        </div>
      </div>
      <header className="list3">
        <FormControl
          className="item25"
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
        <FormControl
          className="item26"
          variant="standard"
          sx={{
            borderColor: "#fff",
            borderStyle: "SOLID",
            borderTopWidth: "0px",
            borderRightWidth: "0px",
            borderBottomWidth: "2px",
            borderLeftWidth: "0px",
            borderRadius: "0px 0px 0px 0px",
            width: "8.702380952380949%",
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
                src="/icon-2.svg"
                style={{ marginRight: "0.09999999999997657px" }}
              />
            )}
          >
            <MenuItem>{`Entertainment `}</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <FormControl
          className="item27"
          variant="standard"
          sx={{
            borderColor: "#fff",
            borderStyle: "SOLID",
            borderTopWidth: "0px",
            borderRightWidth: "0px",
            borderBottomWidth: "2px",
            borderLeftWidth: "0px",
            borderRadius: "0px 0px 0px 0px",
            width: "6.1071428571428585%",
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
                src="/icon-3.svg"
                style={{ marginRight: "6.750155989720953e-14px" }}
              />
            )}
          >
            <MenuItem>{`Shopping `}</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <div className="item28">
          <div className="link6">
            <div className="ea-sports-fc2">EA Sports FC</div>
          </div>
        </div>
        <div className="item29">
          <div className="link7">
            <a className="blog2">Blog</a>
          </div>
        </div>
      </header>
    </div>
  );
};

Header1.propTypes = {
  className: PropTypes.string,
};

export default Header1;
