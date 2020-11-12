import React from 'react';
import Choice from './Choice';

class MultiChoice extends React.Component {
  render() {
    const choices = this.props.choices;
    const correctChoice = this.props.correctChoice;

    return (
      <div>
        <h2>{this.props.questionTitle}</h2>
        {choices.map((choice, i) => {
          if (i === correctChoice) {
            return (
              <Choice
                choiceText={choice}
                isTrue={true}
                handleClickCheckbox={this.props.handleClickCheckbox}
                key={i}
              />
            );
          } else {
            return (
              <Choice
                choiceText={choice}
                isTrue={false}
                handleClickCheckbox={this.props.handleClickCheckbox}
                key={i}
              />
            );
          }
        })}
      </div>
    );
  }
}

export default MultiChoice;
