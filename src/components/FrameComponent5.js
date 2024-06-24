import Item from "./Item";
import PropTypes from "prop-types";
import "./FrameComponent5.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={`list-wrapper ${className}`}>
      <div className="list1">
        <div className="item6">
          <img
            className="airbnbpng-icon"
            loading="lazy"
            alt=""
            src="/airbnbpng@2x.png"
          />
          <div className="brand-logo-name">
            <a
              className="airbnb"
              href="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-1651"
              target="_blank"
            >
              Airbnb
            </a>
          </div>
        </div>
        <div className="item7">
          <img
            className="amazonpng-icon"
            loading="lazy"
            alt=""
            src="/amazonpng@2x.png"
          />
          <div className="amazoncouk-wrapper">
            <a
              className="amazoncouk"
              href="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-1651"
              target="_blank"
            >
              Amazon.co.uk
            </a>
          </div>
        </div>
        <div className="item8">
          <img
            className="argospng-icon"
            loading="lazy"
            alt=""
            src="/argospng@2x.png"
          />
          <div className="argos-wrapper">
            <a
              className="argos"
              href="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-1651"
              target="_blank"
            >
              Argos
            </a>
          </div>
        </div>
        <div className="item9">
          <img
            className="asdapng-icon"
            loading="lazy"
            alt=""
            src="/asdapng@2x.png"
          />
          <div className="asda-wrapper">
            <a
              className="asda"
              href="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-1651"
              target="_blank"
            >
              ASDA
            </a>
          </div>
        </div>
        <div className="item10">
          <img
            className="boohoopng-icon"
            loading="lazy"
            alt=""
            src="/boohoopng@2x.png"
          />
          <div className="boohoo-wrapper">
            <a
              className="boohoo"
              href="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-1651"
              target="_blank"
            >
              Boohoo
            </a>
          </div>
        </div>
        <div className="item11">
          <img className="bqpng-icon" alt="" src="/bqpng@2x.png" />
          <div className="bq-wrapper">
            <a
              className="bq"
              href="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-1651"
              target="_blank"
            >{`B&Q`}</a>
          </div>
        </div>
        <div className="item12">
          <img
            className="caffeneropng-icon"
            alt=""
            src="/caffeneropng@2x.png"
          />
          <div className="caff-nero-wrapper">
            <a
              className="caff-nero"
              href="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-1651"
              target="_blank"
            >
              Caffè Nero
            </a>
          </div>
        </div>
        <div className="item13">
          <img
            className="cineworldpng-icon"
            alt=""
            src="/cineworldpng@2x.png"
          />
          <div className="cineworld-wrapper">
            <a
              className="cineworld"
              href="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-1651"
              target="_blank"
            >
              Cineworld
            </a>
          </div>
        </div>
        <Item clarkspng="/clarkspng@2x.png" clarks="Clarks" />
        <Item
          clarkspng="/costapng@2x.png"
          clarks="Costa"
          propLeft="1261px"
          propTop="0px"
          propMinWidth="45px"
        />
        <div className="item14">
          <div className="curryspcworldpng-wrapper">
            <img
              className="curryspcworldpng-icon"
              alt=""
              src="/curryspcworldpng@2x.png"
            />
          </div>
          <a
            className="currys-pc-world"
            href="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-1651"
            target="_blank"
          >
            Currys PC World
          </a>
        </div>
        <Item
          clarkspng="/decathlonpng@2x.png"
          clarks="Decathlon"
          propLeft="1541.3px"
          propTop="0px"
          propMinWidth="77px"
        />
        <div className="item15">
          <img
            className="deliveroopng-icon"
            loading="lazy"
            alt=""
            src="/deliveroopng@2x.png"
          />
          <div className="deliveroo-wrapper">
            <a
              className="deliveroo"
              href="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-1651"
              target="_blank"
            >
              Deliveroo
            </a>
          </div>
        </div>
        <Item
          clarkspng="/googleplaypng@2x.png"
          clarks="Google Play"
          propLeft="140.1px"
          propTop="150.7px"
          propMinWidth="90px"
        />
        <div className="item16">
          <div className="greatbritishpubpng-wrapper">
            <img
              className="greatbritishpubpng-icon"
              loading="lazy"
              alt=""
              src="/greatbritishpubpng@2x.png"
            />
          </div>
          <a
            className="great-british-pub-container"
            href="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-1651"
            target="_blank"
          >
            <p className="great-british-pub">Great British Pub</p>
            <p className="card">Card</p>
          </a>
        </div>
        <Item
          clarkspng="/hmpng@2x.png"
          clarks={`H&M`}
          propLeft="420.3px"
          propTop="150.7px"
          propMinWidth="37px"
        />
        <Item
          clarkspng="/halfordspng@2x.png"
          clarks="Halfords"
          propLeft="560.5px"
          propTop="150.7px"
          propMinWidth="64px"
        />
        <Item
          clarkspng="/johnlewispng@2x.png"
          clarks="John Lewis"
          propLeft="700.6px"
          propTop="150.7px"
          propMinWidth="86px"
        />
        <Item
          clarkspng="/justeatpng@2x.png"
          clarks="Just Eat"
          propLeft="840.7px"
          propTop="150.7px"
          propMinWidth="62px"
        />
        <div className="item17">
          <div className="laithwaiteswinepng-wrapper">
            <img
              className="laithwaiteswinepng-icon"
              alt=""
              src="/laithwaiteswinepng@2x.png"
            />
          </div>
          <a
            className="laithwaites-wine"
            href="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-1651"
            target="_blank"
          >
            Laithwaite's Wine
          </a>
        </div>
        <div className="item18">
          <img
            className="marksandspencerpng-icon"
            alt=""
            src="/marksandspencerpng@2x.png"
          />
          <a
            className="marks-and-spencer"
            href="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-1651"
            target="_blank"
          >
            Marks and Spencer
          </a>
        </div>
        <Item
          clarkspng="/morrisonspng@2x.png"
          clarks="Morrisons"
          propLeft="1261px"
          propTop="150.7px"
          propMinWidth="76px"
        />
        <div className="item19">
          <img
            className="nationalbooktokenspng-icon"
            alt=""
            src="/nationalbooktokenspng@2x.png"
          />
          <div className="national-book-tokens-wrapper">
            <a
              className="national-book-tokens-container"
              href="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-1651"
              target="_blank"
            >
              <p className="national-book">National Book</p>
              <p className="tokens">Tokens</p>
            </a>
          </div>
        </div>
        <Item
          clarkspng="/newlookpng@2x.png"
          clarks="New Look"
          propLeft="1541.3px"
          propTop="150.7px"
          propMinWidth="76px"
        />
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
