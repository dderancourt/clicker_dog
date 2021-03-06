import React from "react";
import Shop from "./Shop";
import Inventory from "./Inventory";
import Dog from "./Dog";
import "./game.scss";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      love: 0,
      lovePerSecond: 0,
      inventory: {
        food: 0,
        toy: 0,
        basket: 0,
        female_dog: 0,
        slave_cat: 0,
        parc: 0
      }
    };
  }

  getFoodFromShop = () => {
    if (this.state.love >= 100) {
      this.setState({
        love: this.state.love - 100,
        lovePerSecond: this.state.lovePerSecond + 1,
        inventory: {
          ...this.state.inventory,
          food: this.state.inventory.food + 1
        }
      });
    }
  };

  getToyFromShop = () => {
    if (this.state.love >= 1000) {
      this.setState({
        love: this.state.love - 1000,
        lovePerSecond: this.state.lovePerSecond + 10,
        inventory: {
          ...this.state.inventory,
          toy: this.state.inventory.toy + 1
        }
      });
    }
  };

  getBasketFromShop = () => {
    if (this.state.love >= 6000) {
      this.setState({
        love: this.state.love - 6000,
        lovePerSecond: this.state.lovePerSecond + 50,
        inventory: {
          ...this.state.inventory,
          basket: this.state.inventory.basket + 1
        }
      });
    }
  };

  getFemaleDogFromShop = () => {
    if (this.state.love >= 20000) {
      this.setState({
        love: this.state.love - 20000,
        lovePerSecond: this.state.lovePerSecond + 100,
        inventory: {
          ...this.state.inventory,
          female_dog: this.state.inventory.female_dog + 1
        }
      });
    }
  };

  getSlaveCatFromShop = () => {
    if (this.state.love >= 100000) {
      this.setState({
        love: this.state.love - 100000,
        lovePerSecond: this.state.lovePerSecond + 500,
        inventory: {
          ...this.state.inventory,
          slave_cat: this.state.inventory.slave_cat + 1
        }
      });
    }
  };

  getParcFromShop = () => {
    if (this.state.love >= 500000) {
      this.setState({
        love: this.state.love - 500000,
        lovePerSecond: this.state.lovePerSecond + 10000,
        inventory: {
          ...this.state.inventory,
          parc: this.state.inventory.parc + 1
        }
      });
    }
  };

  getClickFromDog = () => {
    let loveByClick = this.state.lovePerSecond * 0.02;
    if (loveByClick < 1) {
      this.setState({ love: this.state.love + 1 });
    } else {
      this.setState({
        love: this.state.love + loveByClick
      });
    }
  };

  incrementLove() {
    let newLove = this.state.love + this.state.lovePerSecond;
    this.setState({ love: newLove });
  }

  componentDidMount() {
    setInterval(() => {
      this.incrementLove();
    }, 1000);
  }

  render() {
    return (
      <div id="game">
        <Shop
          getFoodFromShop={this.getFoodFromShop}
          getToyFromShop={this.getToyFromShop}
          getBasketFromShop={this.getBasketFromShop}
          getFemaleDogFromShop={this.getFemaleDogFromShop}
          getSlaveCatFromShop={this.getSlaveCatFromShop}
          getParcFromShop={this.getParcFromShop}
        />
        <Dog
          love={this.state.love}
          lovePerSecond={this.state.lovePerSecond}
          getClickFromDog={this.getClickFromDog}
        />
        <Inventory inventory={this.state.inventory} />
      </div>
    );
  }
}

export default Game;
