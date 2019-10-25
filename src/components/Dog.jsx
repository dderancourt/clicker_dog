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
        <div>you have {this.props.love} loves</div>
        <div>you generate {this.props.lovePerSecond} loves per second</div>
        <img
          className="dog-pic"
          src="breathingDog.gif"
          alt="Dog"
          onClick={() => this.onClickFunction()}
        />
        <audio className="audio">
          <source src="bark.wav"></source>
        </audio>
      </div>
    );
  }
}

export default Dog;
