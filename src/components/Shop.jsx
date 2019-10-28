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
            <img src="bone.png" alt="toy" />
            <p>
              Buy toy (1 000 <img src="heartIcon.png" alt="heart"></img>)
            </p>
          </button>
        </div>
        <div id="basket">
          <button onClick={this.props.getBasketFromShop}>
            <img src="basket.png" alt="basket" />
            <p>
              Buy basket (6 000 <img src="heartIcon.png" alt="heart"></img>)
            </p>
          </button>
        </div>
        <div id="female-dog">
          <button onClick={this.props.getFemaleDogFromShop}>
            <img src="female-dog.gif" alt="female dog" />
            <p>
              Buy female dog (20 000 <img src="heartIcon.png" alt="heart"></img>
              )
            </p>
          </button>
        </div>
        <div id="slave-cat">
          <button onClick={this.props.getSlaveCatFromShop}>
            <img src="slave-cat.gif" alt="slave cat" />
            <p>
              Buy slave cat (100 000 <img src="heartIcon.png" alt="heart"></img>
              )
            </p>
          </button>
        </div>
        <div id="parc">
          <button onClick={this.props.getParcFromShop}>
            <img src="park.gif" alt="park" />
            <p>
              Buy Park (500 000 <img src="heartIcon.png" alt="heart"></img>)
            </p>
          </button>
        </div>
      </div>
    );
  }
}

export default Shop;
