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
      max: 10, // subject to change
    };
    this.handleClickCheckbox = this.handleClickCheckbox.bind(this);
    this.handleClickButton = this.handleClickButton.bind(this);
  }

  handleClickCheckbox(isTrue, e) {
    const target = e.nativeEvent.originalTarget;
    if (isTrue) {
      target.classList.add('correct');
      this.setState((prevState) => ({ score: prevState.score + 1 }));
    } else {
      target.classList.add('incorrect');
    }
  }

  handleClickButton() {
    this.setState((prevState) => ({ progress: prevState.progress + 1 }));
  }

  render() {
    return (
      <div>
        <Score score={this.state.score} />
        <Progress percent={this.state.progress * 10} strokeColor="red" />
        <Story
          progress={this.state.progress}
          handleClickCheckbox={this.handleClickCheckbox}
        />
        <div className="next-button" onClick={this.handleClickButton}>
          next
        </div>
      </div>
    );
  }
}

export default Level;
