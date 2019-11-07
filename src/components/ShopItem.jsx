import React from "react";
import { connect } from "react-redux";

function ShopItem(props) {
  return props.items.map(item => {
    return (
      <div id={item.name}>
        <button
          onClick={() => {
            props.addItems(item.index);
          }}
        >
          <img src={item.image} alt={item.name} />
          <p>
            Buy {item.name} (
            {new Intl.NumberFormat("fr", {
              notation: "compact"
            }).format(item.price)}{" "}
            <img src="heartIcon.png" alt="heart"></img>)
          </p>
        </button>
      </div>
    );
  });
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const mapDispachToProps = dispatch => {
  return {
    addItems: index => dispatch({ type: "ADD_ITEMS", index: index })
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(ShopItem);
