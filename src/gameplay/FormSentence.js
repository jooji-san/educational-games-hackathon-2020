import React from 'react';
import Words from './Words';

class FormSentence extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickSound = this.handleClickSound.bind(this);
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

  handleClickSound(audio) {
    audio.play();
  }

  render() {
    const audio = new Audio(this.props.audiolink);

    const questionTitle = this.props.questionTitle;
    const words = this.props.words;
    const answers = this.props.answers;
    const answer = answers[this.state.index];

    return (
      <div className="question">
        <div className="question-title-and-sound">
          <div className="question-title">{questionTitle}</div>
          <div
            className="sound-button form-sound-button"
            onClick={() => this.handleClickSound(audio)}
          >
            <img
              className="sound-icon"
              src="https://cdn.discordapp.com/attachments/776095215438004239/776808377798885416/external-content.duckduckgo.com.png"
              alt="sound icon"
            ></img>
          </div>
        </div>
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
