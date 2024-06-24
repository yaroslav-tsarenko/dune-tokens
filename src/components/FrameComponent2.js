import { Button } from "@mui/material";
import Link2 from "./Link2";
import Link1 from "./Link1";
import Link from "./Link";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={`background-group ${className}`}>
      <div className="background16" />
      <div className="popular-cards">
        <h1 className="heading-21">Most frequently chosen gift cards</h1>
        <div className="card-list">
          <div className="cards">
            <Link2
              image="/image@2x.png"
              allIn1Choice="All-in-1 Choice"
              giftCard="Gift Card"
            />
            <Link1
              imageShadow="/imageshadow@2x.png"
              hotelGiftCard="Hotel Gift Card"
            />
            <Link
              imageShadow="/imageshadow-1@2x.png"
              beautyFashion={`Beauty & Fashion`}
              choiceGiftCard="Choice Gift Card"
            />
            <Link2
              image="/image-1@2x.png"
              allIn1Choice="Restaurant Gift"
              giftCard="Card"
              propLeft="1036.5px"
            />
            <Link
              imageShadow="/imageshadow-2@2x.png"
              beautyFashion="Great British Pub"
              choiceGiftCard="Gift Card"
              propLeft="1382px"
              propTop="24px"
              propBackgroundColor="#b61019"
            />
            <Link
              imageShadow="/imageshadow-3@2x.png"
              beautyFashion="John Lewis Gift"
              choiceGiftCard="Card"
              propLeft="0px"
              propTop="388px"
              propBackgroundColor="#401717"
            />
            <Link
              imageShadow="/imageshadow-4@2x.png"
              beautyFashion="Great British Pub"
              choiceGiftCard="Gift Card"
              propLeft="345.5px"
              propTop="388px"
              propBackgroundColor="#b61019"
            />
            <Link1
              imageShadow="/imageshadow-3@2x.png"
              hotelGiftCard="Costa Gift Card"
              propTop="388px"
              propLeft="691px"
              propBackgroundColor="#eac57d"
            />
            <Link
              imageShadow="/imageshadow-6@2x.png"
              beautyFashion="Virgin Experience"
              choiceGiftCard="Days Gift Card"
              propLeft="1036.5px"
              propTop="388px"
              propBackgroundColor="#f26984"
            />
            <Link1
              imageShadow="/imageshadow-7@2x.png"
              hotelGiftCard="Hotel Gift Card"
              propTop="388px"
              propLeft="1382px"
              propBackgroundColor="#378bc8"
            />
          </div>
          <Button
            className="view-all"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "17.6",
              background: "#262626",
              borderRadius: "10px",
              "&:hover": { background: "#262626" },
              width: 200,
              height: 46,
            }}
          >
            View all gift cards
          </Button>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
