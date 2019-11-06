import React from "react";
import { connect } from "react-redux";
import "./Dog.scss";

class Dog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canPlayAudio: true
    };
  }

  playAudio() {
    const audio = document.getElementsByClassName("audio")[0];
    audio.play();
  }

  onClickFunction() {
    this.props.getClickFromDog();
    if (this.state.canPlayAudio) {
      this.setState({ canPlayAudio: false });
      setTimeout(() => {
        this.setState({ canPlayAudio: true });
      }, 1500);
      this.playAudio();
    }
  }

  render() {
    return (
      <div className="dog">
        <div className="score">
          <p>
            You have{" "}
            {new Intl.NumberFormat("fr", {
              notation: "compact"
            }).format(Math.round(this.props.love))}{" "}
            loves
          </p>
          <p>
            You generate{" "}
            {new Intl.NumberFormat("fr", {
              notation: "compact"
            }).format(this.props.lovePerSecond)}{" "}
            loves per second
          </p>
          <p>
            You generate{" "}
            {new Intl.NumberFormat("fr", {
              notation: "compact"
            }).format(this.props.lovePerClick)}{" "}
            loves per click
          </p>
        </div>
        <img
          className="dog-pic"
          src="breathingDog.gif"
          alt="Dog"
          onClick={() => this.onClickFunction()}
        />
        <audio className="audio">
          <source src="bark.wav"></source>
        </audio>
        <img className="running-dog" src="running-dog.gif" alt="dog" />
        <img className="running-dog2" src="running-dog.gif" alt="dog" />
        <img className="running-dog3" src="running-dog.gif" alt="dog" />
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
    getClickFromDog: () => dispatch({ type: "ADD_LOVE", value: 1 })
    /*onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 })*/
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Dog);
