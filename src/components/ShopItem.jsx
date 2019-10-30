import React from "react";
import { ReactComponent } from "*.svg";

class ShopItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="food">
        <div
          className="information"
          style={
            this.state.display.food ? { display: "none" } : { display: "block" }
          }
        >
          <p>Gives you love with the power of food</p>
        </div>
        <button
          className="food"
          onClick={this.props.getFoodFromShop}
          onMouseEnter={event => {
            this.hoverShop(event);
          }}
          onMouseLeave={event => {
            this.hoverShop(event);
          }}
        >
          <img src="food.png" alt="food" />
          <p>
            Buy food (
            {new Intl.NumberFormat("fr", {
              notation: "compact"
            }).format(this.props.priceOfFood)}{" "}
            <img src="heartIcon.png" alt="heart"></img>)
          </p>
        </button>
      </div>
    );
  }
}

export default ShopItem;
