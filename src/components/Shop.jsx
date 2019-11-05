import React from "react";
import ShopItem from "./ShopItem";
import "./shop.scss";

class Shop extends React.Component {
  constructor(props) {
    super(props);
  }

  /*hoverShop(event) {
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
  }*/

  render() {
    return (
      <div className="shop">
        <ShopItem
          priceOfFood={this.props.priceOfFood}
          getFoodFromShop={this.props.getFoodFromShop}
          priceOfToy={this.props.priceOfToy}
          getToyFromShop={this.props.getToyFromShop}
          priceOfBasket={this.props.priceOfBasket}
          getBasketFromShop={this.props.getBasketFromShop}
          priceOfFemale_Dog={this.props.priceOfFemale_Dog}
          getFemaleDogFromShop={this.props.getFemaleDogFromShop}
          priceOfSlave_Cat={this.props.priceOfSlave_Cat}
          getSlaveCatFromShop={this.props.getSlaveCatFromShop}
          priceOfParc={this.props.priceOfParc}
          getParcFromShop={this.props.getParcFromShop}
          love={this.props.love}
        />
        {/* <div id="food">
          <button className="food" onClick={this.props.getFoodFromShop}>
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
          <button className="toy" onClick={this.props.getToyFromShop}>
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
        )}*/}
      </div>
    );
  }
}

export default Shop;
