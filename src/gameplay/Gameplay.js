import React from 'react';
import Score from './Score';
import Story from './Story';
import { Line as Progress } from 'rc-progress';

class Level extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      progress: 1,
      max: 4, // subject to change
    };
    this.handleClickCheckbox = this.handleClickCheckbox.bind(this);
    this.handleClickButton = this.handleClickButton.bind(this);
  }

  handleClickCheckbox(answer, e) {
    const target = e.nativeEvent.originalTarget;
    if (target.dataset.choicetext === answer) {
      target.classList.add('correct');
      this.setState((prevState) => ({ score: prevState.score + 1 }));
    } else {
      target.classList.add('incorrect');
      const correct = document.querySelector(`[data-choicetext="${answer}"]`);
      correct.classList.add('correct');
    }
  }

  handleClickButton() {
    this.setState((prevState) => ({ progress: prevState.progress + 1 }));
  }

  render() {
    return (
      <div className="gameplay">
        <div className="top-bar">
          <div className="progress-bar">
            <Progress
              percent={this.state.progress * 10}
              strokeColor="#47cf73"
            />
          </div>
          <Score score={this.state.score} max={this.state.max} />
        </div>
        <Story
          progress={this.state.progress}
          handleClickCheckbox={this.handleClickCheckbox}
        />
        <div className="sponge"></div>
        <div className="next-button" onClick={this.handleClickButton}>
          next
        </div>
      </div>
    );
  }
}

export default Level;
