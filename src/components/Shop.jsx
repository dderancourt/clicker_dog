import React from "react";
import ShopItem from "./ShopItem";
import { connect } from "react-redux";
import "./shop.scss";
import Inventory from "./Inventory";

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
        {/*<ShopItem
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
        />*/}
        <div id="food">
          <button className="food" onClick={this.props.addFoodFromShop}>
            <img src="food.png" alt="food" />
            <p>
              Buy food (
              {new Intl.NumberFormat("fr", {
                notation: "compact"
              }).format(this.props.price.food)}{" "}
              <img src="heartIcon.png" alt="heart"></img>)
            </p>
          </button>
        </div>
        <div id="toy">
          <button className="toy" onClick={this.props.addToyFromShop}>
            <img src="bone.png" alt="toy" />
            <p>
              Buy toy (
              {new Intl.NumberFormat("fr", {
                notation: "compact"
              }).format(this.props.price.toy)}{" "}
              <img src="heartIcon.png" alt="heart"></img>)
            </p>
          </button>
        </div>
        {this.props.love > this.props.priceOfBasket / 8 ? (
          <div id="basket">
            <button onClick={this.props.addBasketFromShop}>
              <img src="basket.png" alt="basket" />
              <p>
                Buy basket (
                {new Intl.NumberFormat("fr", {
                  notation: "compact"
                }).format(this.props.price.basket)}{" "}
                <img src="heartIcon.png" alt="heart"></img>)
              </p>
            </button>
          </div>
        ) : (
          ""
        )}
        {this.props.love > this.props.priceOfFemale_Dog / 8 ? (
          <div id="female-dog">
            <button onClick={this.props.addFemaleDogFromShop}>
              <img src="female-dog.gif" alt="female dog" />
              <p>
                Buy female dog (
                {new Intl.NumberFormat("fr", {
                  notation: "compact"
                }).format(this.props.price.female_Dog)}
                <img src="heartIcon.png" alt="heart"></img>)
              </p>
            </button>
          </div>
        ) : (
          ""
        )}
        {this.props.love > this.props.priceOfSlave_Cat / 8 ? (
          <div id="slave-cat">
            <button onClick={this.props.addSlaveCatFromShop}>
              <img src="slave-cat.gif" alt="slave cat" />
              <p>
                Buy slave cat (
                {new Intl.NumberFormat("fr", {
                  notation: "compact"
                }).format(this.props.price.slave_Cat)}{" "}
                <img src="heartIcon.png" alt="heart"></img>)
              </p>
            </button>
          </div>
        ) : (
          ""
        )}

        {this.props.love > this.props.priceOfParc / 8 ? (
          <div id="parc">
            <button onClick={this.props.addParcFromShop}>
              <img src="park.gif" alt="park" />
              <p>
                Buy Park (
                {new Intl.NumberFormat("fr", {
                  notation: "compact"
                }).format(this.props.price.parc)}{" "}
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

const mapStateToProps = state => {
  return {
    love: state.love,
    price: { ...state.price },
    inventory: { ...state.Inventory }
  };
};

const mapDispachToProps = dispatch => {
  return {
    addFoodFromShop: () => dispatch({ type: "ADD_FOOD" }),
    addToyFromShop: () => dispatch({ type: "ADD_TOY" }),
    addBasketFromShop: () => dispatch({ type: "ADD_BASKET" }),
    addFemaleDogFromShop: () => dispatch({ type: "ADD_FEMALE_DOG" }),
    addSlaveCatFromShop: () => dispatch({ type: "ADD_SLAVE_CAT" }),
    addParkFromShop: () => dispatch({ type: "ADD_PARK" })
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Shop);
