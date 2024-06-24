import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import Header from "../components/Header";
import FooterDesktop from "../components/FooterDesktop";
import "./SignInPage.css";

const SignInPage = () => {
  return (
    <div className="signinpage">
      <Header />
      <section className="sign-in-content-parent">
        <div className="sign-in-content">
          <div className="sign-in">
            <div className="sign-in-title-content">
              <div className="sign-in-parent">
                <h1 className="sign-in1">Sign in</h1>
                <div className="sign-in-to">
                  Sign in to your account to see products catered to you
                </div>
              </div>
              <form className="credentials-input">
                <FormControl
                  className="input-labels"
                  variant="standard"
                  sx={{
                    borderColor: "#d1d1d1",
                    borderStyle: "SOLID",
                    borderTopWidth: "1px",
                    borderRightWidth: "1px",
                    borderBottomWidth: "1px",
                    borderLeftWidth: "1px",
                    backgroundColor: "#fff",
                    borderRadius: "4px",
                    width: "100%",
                    height: "40px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "40px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "40px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "40px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "40px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      color: "#000",
                      fontSize: 16,
                      fontWeight: "Regular",
                      fontFamily: "Inter",
                      textAlign: "left",
                      p: "0 !important",
                      marginLeft: "11px",
                    },
                  }}
                >
                  <InputLabel color="secondary" />
                  <Select
                    color="secondary"
                    disableUnderline
                    displayEmpty
                    IconComponent={() => (
                      <img
                        width="16px"
                        height="16px"
                        src="/credential-input-fields.svg"
                        style={{ marginRight: "11px" }}
                      />
                    )}
                  >
                    <MenuItem>Username</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
                <div className="input-labels1">
                  <div className="password">Password</div>
                  <img
                    className="input-labels-child"
                    alt=""
                    src="/frame-153-1.svg"
                  />
                </div>
                <Button
                  className="button"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "16",
                    background: "#262626",
                    borderRadius: "4px",
                    "&:hover": { background: "#262626" },
                  }}
                >
                  Sign In
                </Button>
              </form>
              <div className="or-sign-in">or, sign in with</div>
              <div className="social-login">
                <img
                  className="social-options-icon"
                  loading="lazy"
                  alt=""
                  src="/frame-158.svg"
                />
                <img
                  className="social-options-icon1"
                  loading="lazy"
                  alt=""
                  src="/frame-158.svg"
                />
                <img
                  className="social-options-icon2"
                  loading="lazy"
                  alt=""
                  src="/frame-158.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className="frame-child"
          loading="lazy"
          alt=""
          src="/rectangle-49@2x.png"
        />
      </section>
      <FooterDesktop />
    </div>
  );
};

export default SignInPage;
