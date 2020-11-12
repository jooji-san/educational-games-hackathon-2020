import React from 'react';

class SelectWord extends React.Component {
  render() {
    const words = this.props.words;

    return (
      <div className="select-word-question">
        <div className="question-title">{this.props.questionTitle}</div>
        <div className="words">
          {words.map((word, i) => {
            return (
              <div
                className="word"
                data-question={this.props.questionTitle}
                data-choicetext={word}
                onClick={(e) =>
                  this.props.handleClickCheckbox(this.props.answer, e)
                }
                key={i}
              >
                {word}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SelectWord;
