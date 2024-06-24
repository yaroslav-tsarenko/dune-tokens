import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./MainContent.css";

const MainContent = ({ className = "" }) => {
  return (
    <div className={`main-content ${className}`}>
      <form className="product-details-parent">
        <div className="product-details">
          <img
            className="image-10-icon"
            loading="lazy"
            alt=""
            src="/image-10@2x.png"
          />
          <div className="product-description">
            <div className="about-this-gift-voucher-parent">
              <div className="about-this-gift">About this Gift Voucher</div>
              <img className="frame-item" alt="" src="/vector-9.svg" />
            </div>
            <div className="how-to-use-parent">
              <div className="how-to-use">How to Use</div>
              <img className="frame-inner" alt="" src="/vector-9.svg" />
            </div>
            <div className="brands-included-in-this-vouche-parent">
              <div className="brands-included-in">
                Brands Included In this Voucher
              </div>
              <img className="vector-icon" alt="" src="/vector-9.svg" />
            </div>
            <div className="terms-conditions-group">
              <div className="terms-conditions1">{`Terms & Conditions`}</div>
              <img className="frame-child1" alt="" src="/vector-9.svg" />
            </div>
            <div className="product-note">
              <b className="note">Note:</b>
              <div className="discover-the-perfect">{`Discover the perfect blend of style and utility with our Shoes & Wallet Gift Card. Whether it's stepping out in fashionable footwear or staying organized with a sleek wallet, this versatile gift card offers endless possibilities. Give the gift of choice and let your loved ones indulge in their favorite brands and styles.
`}</div>
            </div>
          </div>
        </div>
        <div className="purchase-options-wrapper">
          <div className="purchase-options">
            <div className="product-title">
              <h1 className="best-buy-gift">Best Buy Gift Card</h1>
              <div className="introducing-the-shoes">{`Introducing the Shoes & Wallet Gift Card from WishDeck - the perfect pairing for those who appreciate both style and practicality. With this versatile eGift card, recipients can explore a wide array of footwear options to step out in fashion-forward confidence, while also browsing through a selection of sleek wallets to complement their everyday essentials.`}</div>
            </div>
            <div className="recipient">
              <div className="i-would-like">I would Like to:</div>
              <div className="recipient-options">
                <Button
                  className="recipient-buttons"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "16",
                    background: "#262626",
                    borderRadius: "10px",
                    "&:hover": { background: "#262626" },
                    height: 58,
                  }}
                >
                  Gift a Friend
                </Button>
                <Button
                  className="recipient-buttons1"
                  disableElevation
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "#262626",
                    fontSize: "16",
                    borderColor: "#262626",
                    borderRadius: "10px",
                    "&:hover": { borderColor: "#262626" },
                    width: 143,
                    height: 58,
                  }}
                >
                  Gift Myself
                </Button>
              </div>
            </div>
            <div className="value">
              <div className="gift-card-worth">Gift Card Worth:</div>
              <div className="value-options">
                <Button
                  className="value-amounts"
                  disableElevation
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "#262626",
                    fontSize: "16",
                    borderColor: "#262626",
                    borderRadius: "10px",
                    "&:hover": { borderColor: "#262626" },
                    height: 58,
                  }}
                >
                  USD $200
                </Button>
                <div className="value-amounts1">
                  <div className="usd-500">USD $500</div>
                </div>
                <Button
                  className="value-amounts2"
                  disableElevation
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "#262626",
                    fontSize: "16",
                    borderColor: "#262626",
                    borderRadius: "10px",
                    "&:hover": { borderColor: "#262626" },
                    height: 58,
                  }}
                >
                  USD $700
                </Button>
                <Button
                  className="value-amounts3"
                  disableElevation
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "#262626",
                    fontSize: "16",
                    borderColor: "#262626",
                    borderRadius: "10px",
                    "&:hover": { borderColor: "#262626" },
                    height: 58,
                  }}
                >
                  USD $1000
                </Button>
              </div>
            </div>
            <div className="quantity">
              <div className="select-your-quantity">Select your Quantity</div>
              <div className="quantity-control">
                <div className="rectangle-parent">
                  <div className="rectangle-div" />
                  <img
                    className="add-icon"
                    loading="lazy"
                    alt=""
                    src="/add.svg"
                  />
                </div>
                <div className="empty-quantity">
                  <div className="div27">4</div>
                </div>
                <div className="rectangle-group">
                  <div className="frame-child2" />
                  <div className="add-icon-wrapper">
                    <img
                      className="add-icon1"
                      loading="lazy"
                      alt=""
                      src="/vector-600.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="button13"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#262626",
                borderRadius: "10px",
                "&:hover": { background: "#262626" },
                height: 54,
              }}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

MainContent.propTypes = {
  className: PropTypes.string,
};

export default MainContent;
