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
        toy: 0
      }
    };
  }

  getFoodFromShop = () => {
    this.setState({
      lovePerSecond: this.state.lovePerSecond + 1,
      inventory: {
        ...this.state.inventory,
        food: this.state.inventory.food + 1
      }
    });
  };

  getToyFromShop = () => {
    this.setState({
      lovePerSecond: this.state.lovePerSecond + 10,
      inventory: {
        ...this.state.inventory,
        toy: this.state.inventory.toy + 1
      }
    });
  };

  getClickFromDog = () => {
    this.setState({
      love: this.state.love + 1
    });
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
