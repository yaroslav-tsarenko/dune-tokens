import { Button } from "@mui/material";
import Header3 from "../components/Header3";
import Section from "../components/Section";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import PopularCardList from "../components/PopularCardList";
import XboxCard from "../components/XboxCard";
import Newsletter from "../components/Newsletter";
import NintendoContent from "../components/NintendoContent";
import FortniteEntertainment from "../components/FortniteEntertainment";
import FooterDesktop2 from "../components/FooterDesktop2";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <Header3 />
      <Section />
      <FrameComponent6 />
      <section className="heading-container">
        <h1 className="heading-2">Gift Cards accepted by big UK brands</h1>
      </section>
      <div className="description-container">
        <div className="elysian-giftss-digital">
          Elysian Gifts's digital gift cards include 50+ stores across the UK
          and online.
        </div>
      </div>
      <FrameComponent5 />
      <div className="view-all-link-container">
        <Button
          className="link"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "20",
            background: "#1d1d1d",
            borderRadius: "4.8px",
            "&:hover": { background: "#1d1d1d" },
            width: 167.8,
            height: 40,
          }}
        >
          View all
        </Button>
      </div>
      <section className="disclaimer-container">
        <div className="the-merchants-represented-container">
          <span className="the-merchants-represented-container1">
            <p className="the-merchants-represented">
              The merchants represented are not sponsors or otherwise affiliated
              with this company. The logos and other identifying marks attached
              are trademarks of and owned by each represented company
            </p>
            <p className="andor-its-affiliates">
              and/or its affiliates. Please visit each company's website for
              additional terms and conditions.
            </p>
          </span>
        </div>
      </section>
      <section className="popular-card-content-wrapper">
        <div className="popular-card-content">
          <h3 className="popular-gift-cards">Popular gift cards</h3>
          <PopularCardList />
          <div className="playstation-card">
            <h3 className="playstation">Playstation</h3>
            <div className="overlaybordershadow">
              <div className="background">
                <img className="link-icon" alt="" src="/link-5@2x.png" />
                <div className="background1">
                  <div className="popular">POPULAR</div>
                </div>
              </div>
              <div className="playstation-card-info">
                <div className="playstation-card-details">
                  <div className="container">
                    <b className="playstation-store-card">
                      PlayStation Store Card £50
                    </b>
                  </div>
                  <div className="digital-code-wrapper">
                    <div className="digital-code">Digital code</div>
                  </div>
                  <div className="playstation-price-parent">
                    <div className="playstation-price">
                      <div className="div">£</div>
                    </div>
                    <div className="separator">50.</div>
                    <div className="playstation-price1">
                      <div className="div1">00</div>
                    </div>
                  </div>
                  <div className="button">
                    <div className="buy">Buy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <XboxCard />
        </div>
      </section>
      <Newsletter />
      <section className="nintendo-card">
        <div className="nintendo-card-container">
          <NintendoContent />
          <FortniteEntertainment />
        </div>
      </section>
      <FooterDesktop2
        desert1="/desert-1-1@2x.png"
        propTextDecoration="unset"
        propTextDecoration1="unset"
        propTextDecoration2="unset"
        propTextDecoration3="unset"
      />
    </div>
  );
};

export default HomePage;
