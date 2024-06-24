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
import FrameComponent2 from "../components/FrameComponent2";
import FooterDesktop1 from "../components/FooterDesktop1";
import "./RefundPolicyPage.css";

const RefundPolicyPage = () => {
  return (
    <div className="refundpolicypage">
      <div className="header">
        <div className="container">
          <div className="logo-wrapper">
            <div className="logo">
              <img
                className="desert-1-icon"
                loading="lazy"
                alt=""
                src="/desert-1@2x.png"
              />
              <a className="dunetokens">DuneTokens</a>
            </div>
          </div>
          <TextField
            className="form"
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
          <div className="user">
            <TextField
              className="border"
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
              className="border1"
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
            <img className="link-icon" loading="lazy" alt="" src="/link.svg" />
          </div>
        </div>
        <header className="list">
          <FormControl
            className="item"
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
          <div className="item1">
            <div className="link">
              <a
                className="entertainment"
                href="https://www.figma.com/design/J8TOA0kk0oMlPkmVHdlfyg?node-id=1-2172"
                target="_blank"
              >{`Entertainment `}</a>
            </div>
            <div className="navigation-icons">
              <img className="icon" alt="" src="/icon-2.svg" />
            </div>
          </div>
          <FormControl
            className="item2"
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
          <div className="item3">
            <div className="link1">
              <div className="ea-sports-fc">EA Sports FC</div>
            </div>
          </div>
          <div className="item4">
            <div className="link2">
              <a
                className="blog"
                href="https://www.figma.com/design/J8TOA0kk0oMlPkmVHdlfyg?node-id=1-10068"
                target="_blank"
              >
                Blog
              </a>
            </div>
          </div>
        </header>
      </div>
      <section className="policy">
        <h1 className="refund-policy">Refund Policy</h1>
        <div className="please-refer-to">{`Please refer to our Terms and Conditions for further details regarding the use and redemption of the Shoes & Wallet Gift Card.`}</div>
      </section>
      <section className="exceptions">
        <div className="wishdeck-we-us">
          We value your trust and strive to provide transparent and fair
          cancellation and refund processes. Please read the following policy
          carefully to understand your rights and obligations regarding
          cancellations and refunds:
        </div>
        <div className="eligibility">
          <h1 className="eligibility-for-refunds-container">
            <ol className="eligibility-for-refunds">
              <li> Eligibility for Refunds</li>
            </ol>
          </h1>
          <div className="eligibility-details">
            <div className="the-product-or">
              1.1 The product or service you purchased is defective, damaged, or
              not as described.
            </div>
            <div className="you-have-canceled">
              1.2 You have canceled your order or subscription within the
              specified cancellation period, as outlined in our cancellation
              policy.
            </div>
          </div>
        </div>
        <FrameComponent2 />
        <div className="exceptions-headings">
          <h1 className="non-refundable-items-and-container">
            <ol className="non-refundable-items-and-servi">
              <li>Non-Refundable Items and Services</li>
            </ol>
          </h1>
          <div className="certain-items-or">
            Certain items or services may not be eligible for refunds, including
            but not limited to: Digital products or services that have been
            accessed, downloaded, or used. Customized or personalized products
            or services that are non-returnable. Services that have already been
            rendered or partially rendered, except where prohibited by law.
          </div>
        </div>
        <div className="exceptions-headings1">
          <h1 className="exceptions-and-special-container">
            <ol className="exceptions-and-special-circums">
              <li>Exceptions and Special Circumstances:</li>
            </ol>
          </h1>
          <div className="exceptions-to-this">
            Exceptions to this refund policy may be granted in cases of force
            majeure, such as natural disasters, government regulations, or other
            unforeseen circumstances beyond our control. Any exceptions or
            special circumstances will be evaluated on a case-by-case basis and
            at the discretion of our customer support team.
          </div>
        </div>
        <div className="exceptions-headings2">
          <h1 className="contact-us">
            <ol className="contact-us1">
              <li>Contact Us</li>
            </ol>
          </h1>
          <div className="if-you-have-container">
            <p className="if-you-have">
              If you have any questions, concerns, or requests related to this
              Privacy Policy or our data practices, please contact us at
              LilyLamb Kids.
            </p>
            <p className="blank-line">&nbsp;</p>
            <p className="by-using-our">
              By using our website, products, and services, you agree to the
              terms outlined in this Privacy Policy. We are committed to
              protecting your privacy and ensuring the security of your
              information.
            </p>
          </div>
        </div>
      </section>
      <FooterDesktop1
        propTextDecoration="none"
        propTextDecoration1="none"
        propTextDecoration2="none"
      />
    </div>
  );
};

export default RefundPolicyPage;
