import React from "react";
import Shop from "./Shop";
import Inventory from "./Inventory";
import Dog from "./Dog";
import Enhancement from "./Enhancement";
import "./game.scss";
import { connect } from "react-redux";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lovePerSecond: 0,
      lovePerClick: 0,
      totalLoveEver: 0,
      price: {
        food: 100,
        toy: 3000,
        basket: 50000,
        female_dog: 600000,
        slave_cat: 20000000,
        parc: 100000000
      },
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
    if (this.state.love >= this.state.price.food) {
      this.setState({
        love: this.state.love - this.state.price.food,
        lovePerSecond: this.state.lovePerSecond + 1,
        price: {
          ...this.state.price,
          food: this.state.price.food + this.state.price.food * 0.15
        },
        inventory: {
          ...this.state.inventory,
          food: this.state.inventory.food + 1
        }
      });
    }
  };

  getToyFromShop = () => {
    if (this.state.love >= this.state.price.toy) {
      this.setState({
        price: {
          ...this.state.price,
          toy: this.state.price.toy + this.state.price.toy * 0.15
        },
        love: this.state.love - this.state.price.toy,
        lovePerSecond: this.state.lovePerSecond + 10,
        inventory: {
          ...this.state.inventory,
          toy: this.state.inventory.toy + 1
        }
      });
    }
  };

  getBasketFromShop = () => {
    if (this.state.love >= this.state.price.basket) {
      this.setState({
        price: {
          ...this.state.price,
          basket: this.state.price.basket + this.state.price.basket * 0.15
        },
        love: this.state.love - this.state.price.basket,
        lovePerSecond: this.state.lovePerSecond + 50,
        inventory: {
          ...this.state.inventory,
          basket: this.state.inventory.basket + 1
        }
      });
    }
  };

  getFemaleDogFromShop = () => {
    if (this.state.love >= this.state.price.female_dog) {
      this.setState({
        price: {
          ...this.state.price,
          female_dog:
            this.state.price.female_dog + this.state.price.female_dog * 0.15
        },
        love: this.state.love - this.state.price.female_dog,
        lovePerSecond: this.state.lovePerSecond + 100,
        inventory: {
          ...this.state.inventory,
          female_dog: this.state.inventory.female_dog + 1
        }
      });
    }
  };

  getSlaveCatFromShop = () => {
    if (this.state.love >= this.state.price.slave_cat) {
      this.setState({
        price: {
          ...this.state.price,
          slave_cat:
            this.state.price.slave_cat + this.state.price.slave_cat * 0.15
        },
        love: this.state.love - this.state.price.slave_cat,
        lovePerSecond: this.state.lovePerSecond + 500,
        inventory: {
          ...this.state.inventory,
          slave_cat: this.state.inventory.slave_cat + 1
        }
      });
    }
  };

  getParcFromShop = () => {
    if (this.state.love >= this.state.price.parc) {
      this.setState({
        price: {
          ...this.state.price,
          parc: this.state.price.parc + this.state.price.parc * 0.15
        },
        love: this.state.love - this.state.price.parc,
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
      this.setState({
        love: this.state.love + 1,
        totalLoveEver: this.state.totalLoveEver + 1,
        lovePerClick: 1
      });
    } else {
      this.setState({
        love: this.state.love + loveByClick,
        totalLoveEver: this.state.love + loveByClick,
        lovePerClick: loveByClick
      });
    }
  };

  incrementLove() {
    this.setState({
      love: this.state.love + this.state.lovePerSecond,
      totalLoveEver: this.state.totalLoveEver + this.state.lovePerSecond
    });
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
          priceOfFood={this.state.price.food}
          getFoodFromShop={this.getFoodFromShop}
          priceOfToy={this.state.price.toy}
          getToyFromShop={this.getToyFromShop}
          priceOfBasket={this.state.price.basket}
          getBasketFromShop={this.getBasketFromShop}
          priceOfFemale_Dog={this.state.price.female_dog}
          getFemaleDogFromShop={this.getFemaleDogFromShop}
          priceOfSlave_Cat={this.state.price.slave_cat}
          getSlaveCatFromShop={this.getSlaveCatFromShop}
          priceOfParc={this.state.price.parc}
          getParcFromShop={this.getParcFromShop}
          love={this.props.love}
        />
        <Dog
          lovePerSecond={this.state.lovePerSecond}
          lovePerClick={this.state.lovePerClick}
        />
        <div className="right-container">
          <Inventory inventory={this.state.inventory} />
          <Enhancement />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    love: state.love
  };
};

export default connect(mapStateToProps)(Game);
