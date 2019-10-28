import React from "react";
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
          <p>you have {Math.round(this.props.love)} loves</p>
          <p>you generate {this.props.lovePerSecond} loves per second</p>
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

export default Dog;
