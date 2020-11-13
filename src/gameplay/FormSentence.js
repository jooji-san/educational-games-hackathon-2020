import React from 'react';
import Words from './Words';

class FormSentence extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(answer, e) {
    const target = e.nativeEvent.originalTarget;
    console.log(target.dataset.choicetext, answer);
    if (target.dataset.choicetext === answer) {
      target.classList.toggle('visibility-hidden');
      const answerWord = document.querySelector(
        `[data-choicetext="${answer}"]`
      );
      answerWord.classList.toggle('visibility-hidden');
      this.setState((prevState) => ({ index: prevState.index + 1 }));
    }
  }

  render() {
    const questionTitle = this.props.questionTitle;
    const words = this.props.words;
    const answers = this.props.answers;
    const answer = answers[this.state.index];

    return (
      <div className="question">
        <div className="question-title">{questionTitle}</div>
        <div className="answer-words">
          {answers.map((answer, i) => {
            return (
              <div
                className="word visibility-hidden"
                data-choicetext={answer}
                key={i}
              >
                {answer}
              </div>
            );
          })}
        </div>
        <Words
          words={words}
          handleClickCheckbox={this.handleClick}
          answer={answer}
        />
      </div>
    );
  }
}

export default FormSentence;
