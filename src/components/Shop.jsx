import React from "react";
import "./shop.scss";

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: true,
      display: {
        food: true,
        toy: true
      }
    };
  }

  hoverShop(event) {
    let shopCase = event.target.className;
    switch (shopCase) {
      case "food":
        this.setState({
          display: {
            ...this.state.display,
            food: !this.state.display.food
          }
        });
        break;
      case "toy":
        this.setState({
          display: {
            ...this.state.display,
            toy: !this.state.display.toy
          }
        });
        break;
      default:
        return;
    }
  }

  render() {
    return (
      <div className="shop">
        <div id="food">
          <div
            className="information"
            style={
              this.state.display.food
                ? { display: "none" }
                : { display: "block" }
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
        <div id="toy">
          <div
            className="information"
            style={
              this.state.display.toy
                ? { display: "none" }
                : { display: "block" }
            }
          >
            <p>Gives you love with the power of toy</p>
          </div>
          <button
            className="toy"
            onClick={this.props.getToyFromShop}
            onMouseEnter={event => {
              this.hoverShop(event);
            }}
            onMouseLeave={event => {
              this.hoverShop(event);
            }}
          >
            <img src="bone.png" alt="toy" />
            <p>
              Buy toy (
              {new Intl.NumberFormat("fr", {
                notation: "compact"
              }).format(this.props.priceOfToy)}{" "}
              <img src="heartIcon.png" alt="heart"></img>)
            </p>
          </button>
        </div>
        {this.props.love > this.props.priceOfBasket / 8 ? (
          <div id="basket">
            <button onClick={this.props.getBasketFromShop}>
              <img src="basket.png" alt="basket" />
              <p>
                Buy basket (
                {new Intl.NumberFormat("fr", {
                  notation: "compact"
                }).format(this.props.priceOfBasket)}{" "}
                <img src="heartIcon.png" alt="heart"></img>)
              </p>
            </button>
          </div>
        ) : (
          ""
        )}
        {this.props.love > this.props.priceOfFemale_Dog / 8 ? (
          <div id="female-dog">
            <button onClick={this.props.getFemaleDogFromShop}>
              <img src="female-dog.gif" alt="female dog" />
              <p>
                Buy female dog (
                {new Intl.NumberFormat("fr", {
                  notation: "compact"
                }).format(this.props.priceOfFemale_Dog)}
                <img src="heartIcon.png" alt="heart"></img>)
              </p>
            </button>
          </div>
        ) : (
          ""
        )}
        {this.props.love > this.props.priceOfSlave_Cat / 8 ? (
          <div id="slave-cat">
            <button onClick={this.props.getSlaveCatFromShop}>
              <img src="slave-cat.gif" alt="slave cat" />
              <p>
                Buy slave cat (
                {new Intl.NumberFormat("fr", {
                  notation: "compact"
                }).format(this.props.priceOfSlave_Cat)}{" "}
                <img src="heartIcon.png" alt="heart"></img>)
              </p>
            </button>
          </div>
        ) : (
          ""
        )}

        {this.props.love > this.props.priceOfParc / 8 ? (
          <div id="parc">
            <button onClick={this.props.getParcFromShop}>
              <img src="park.gif" alt="park" />
              <p>
                Buy Park (
                {new Intl.NumberFormat("fr", {
                  notation: "compact"
                }).format(this.props.priceOfParc)}{" "}
                <img src="heartIcon.png" alt="heart"></img>)
              </p>
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Shop;
