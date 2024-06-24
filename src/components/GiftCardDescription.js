import PropTypes from "prop-types";
import "./GiftCardDescription.css";

const GiftCardDescription = ({ className = "" }) => {
  return (
    <section className={`gift-card-description ${className}`}>
      <div className="frame-parent24">
        <div className="heading-2-gift-cards-for-eve-parent">
          <div className="heading-22">Gift cards for every occasion</div>
          <div className="looking-to-buy">
            Looking to buy a gift card for a birthday, for him or for her, for
            Valentine's Day, Christmas - or for no specific reason at all? Then
            you’ve come to the right place.
          </div>
          <div className="startselect-offers-a">{`Startselect offers a wide range of digital gift cards in different categories such as gaming, entertainment, food, shopping, travel, events & tickets and more. This means that you’ll always find the perfect gift card for any occasion!`}</div>
        </div>
        <div className="gift-card-steps">
          <div className="heading-23">Buy a gift card in three easy steps</div>
          <div className="would-you-like">
            Would you like to buy a gift card? Then just follow these three
            simple steps:
          </div>
          <div className="item-found">
            Found the perfect gift card? Then hit the ‘Buy’ button and add the
            product to your shopping cart. In your shopping cart overview, click
            on 'Continue to checkout’ Choose a payment method that suits you
            best, and follow the instructions
          </div>
          <div className="after-the-payment">
            After the payment is completed, you’ll instantly see the code on
            your screen, and it’ll be sent to you by email as well!
          </div>
        </div>
        <div className="personalize-gift-card">
          <div className="heading-24">
            Personalize your gift card and send it as a gift!
          </div>
          <div className="would-you-like1">
            Would you like to surprise a family member, friend, colleague or
            anyone else with a gift card from Startselect? With our Gifting
            Service you can make it even more special! For example, you can
            choose a fitting design and add a personal message.
          </div>
        </div>
        <div className="link23">
          <div className="check-out-our">
            Check out our Gifting Service now!
          </div>
        </div>
      </div>
    </section>
  );
};

GiftCardDescription.propTypes = {
  className: PropTypes.string,
};

export default GiftCardDescription;
