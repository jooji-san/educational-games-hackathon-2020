import React from 'react';
import Choice from './Choice';

class MultiChoice extends React.Component {
  render() {
    const choices = this.props.choices;

    return (
      <div className="question">
        <div className="question-title">{this.props.questionTitle}</div>
        {choices.map((choice, i) => {
          return (
            <Choice
              choiceText={choice}
              answer={this.props.answer}
              handleClickCheckbox={this.props.handleClickCheckbox}
              key={i}
            />
          );
        })}
      </div>
    );
  }
}

export default MultiChoice;
