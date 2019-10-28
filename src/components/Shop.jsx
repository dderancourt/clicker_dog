import React from "react";
import "./shop.scss";

class Shop extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="shop">
        <div id="food">
          <button onClick={this.props.getFoodFromShop}>
            <img src="food.png" alt="food" />
            <p>
              Buy food (100 <img src="heartIcon.png" alt="heart"></img>)
            </p>
          </button>
        </div>
        <div id="toy">
          <button onClick={this.props.getToyFromShop}>
            <p>
              Buy toy (1 000 <img src="heartIcon.png" alt="heart"></img>)
            </p>
          </button>
        </div>
        <div id="basket">
          <button onClick={this.props.getBasketFromShop}>
            <p>
              Buy basket (6 000 <img src="heartIcon.png" alt="heart"></img>)
            </p>
          </button>
        </div>
        <div id="female-dog">
          <button onClick={this.props.getFemaleDogFromShop}>
            <p>
              Buy female dog (20 000 <img src="heartIcon.png" alt="heart"></img>
              )
            </p>
          </button>
        </div>
        <div id="slave-cat">
          <button onClick={this.props.getSlaveCatFromShop}>
            <p>
              Buy slave cat (100 000 <img src="heartIcon.png" alt="heart"></img>
              )
            </p>
          </button>
        </div>
        <div id="parc">
          <button onClick={this.props.getParcFromShop}>
            <p>
              Buy Parc (500 000 <img src="heartIcon.png" alt="heart"></img>)
            </p>
          </button>
        </div>
      </div>
    );
  }
}

export default Shop;
