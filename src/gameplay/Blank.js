import React from 'react';
import Line from './Line';
import SelectWord from './SelectWord';

class Blank extends React.Component {
  render() {
    return (
      <div className="question blank">
        <div className="question-title">Fill in the blank</div>
        <Line
          text={this.props.text}
          translation={this.props.translation}
          image={this.props.image}
          audiolink={this.props.audiolink}
        />
        <SelectWord
          questionTitle={this.props.questionTitle}
          words={this.props.words}
          answer={this.props.answer}
          handleClickCheckbox={this.props.handleClickCheckbox}
        />
      </div>
    );
  }
}

export default Blank;
