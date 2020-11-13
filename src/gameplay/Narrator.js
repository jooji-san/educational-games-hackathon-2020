import React from 'react';

class Narrator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTranslation: false,
    };
    this.handleClickTranslation = this.handleClickTranslation.bind(this);
    this.handleClickSound = this.handleClickSound.bind(this);
  }

  handleClickTranslation() {
    this.setState((prevState) => {
      return prevState.isTranslation
        ? { isTranslation: false }
        : { isTranslation: true };
    });
  }

  handleClickSound(audio) {
    audio.play();
  }

  render() {
    const audio = new Audio(this.props.audiolink);

    return (
      <div className="narrator-line">
        <div className="narrator">
          {this.state.isTranslation ? this.props.translation : this.props.text}
        </div>
        <div
          className="translation-button"
          onClick={() => this.handleClickTranslation()}
        >
          <img
            class="translation-icon"
            src="https://cdn.discordapp.com/attachments/776095215438004239/776799753795010580/5735-200.png"
            alt="translation icon"
          ></img>
        </div>
        <div
          className="sound-button"
          onClick={() => this.handleClickSound(audio)}
        >
          <img
            className="sound-icon"
            src="https://cdn.discordapp.com/attachments/776095215438004239/776808377798885416/external-content.duckduckgo.com.png"
            alt="sound icon"
          ></img>
        </div>
      </div>
    );
  }
}

export default Narrator;
