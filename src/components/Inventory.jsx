import React from "react";
import { connect } from "react-redux";
import "./Inventory.scss";

class Inventory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="inventory">
        <div className="inventory-title">
          <img src="dog-icon.gif" alt="dog"></img>
          <h2>Inventory</h2>
          <img src="dog-icon.gif" alt="dog"></img>
        </div>
        <div className="bottom-enhancement-pic">
          <img src="swimming-dog.gif" alt="dog"></img>
        </div>
        <div className="inventory-list">
          <p>{this.props.items[0].number} foods</p>
          <p>{this.props.items[1].number} toys</p>
          <p>{this.props.items[2].number} baskets</p>
          <p>{this.props.items[3].number} female dogs</p>
          <p>{this.props.items[4].number} slave cats</p>
          <p>{this.props.items[5].number} park</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

export default connect(mapStateToProps)(Inventory);
