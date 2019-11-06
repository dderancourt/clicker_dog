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
  }

  componentDidMount() {
    setInterval(() => {
      this.props.incrementLove();
    }, 1000);
  }

  render() {
    return (
      <div id="game">
        <Shop />
        <Dog />
        <div className="right-container">
          <Inventory />
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

const mapDispachToProps = dispatch => {
  return {
    incrementLove: () => dispatch({ type: "INCREMENT_LOVE" })
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Game);
