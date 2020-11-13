import React from 'react';
import Words from './Words';

class SelectWord extends React.Component {
  render() {
    const words = this.props.words;

    return (
      <div className="question">
        <div className="question-title">{this.props.questionTitle}</div>
        <Words
          words={this.props.words}
          answer={this.props.answer}
          handleClickCheckbox={this.props.handleClickCheckbox}
        />
      </div>
    );
  }
}

export default SelectWord;
