import React from 'react';
import Line from './Line';
import MultiChoice from './MultiChoice';
import SelectWord from './SelectWord';

class Story extends React.Component {
  render() {
    const storyArr = [
      <Line
        text="სახიფათო დავალებები გელის! არ გეშინია?"
        image="http://placekitten.com/50/50"
      />,
      <Line text="არა, არ მეშინია!" image="http://placekitten.com/g/50/50" />,
      <MultiChoice
        questionTitle="Mario is scared"
        choices={['No, that’s not right', 'Yes, that’s true']}
        correctChoice={0}
        handleClickCheckbox={this.props.handleClickCheckbox}
      />,
      <Line
        text="დროა წავიდე პრინცესა პიჩის გადასარჩენად!"
        image="http://placekitten.com/50/50"
      />,
      <MultiChoice
        questionTitle="What is Mario's mission?"
        choices={[
          'To stay home',
          'To rescue princess peach',
          'To kill princess peach',
        ]}
        correctChoice={1}
        handleClickCheckbox={this.props.handleClickCheckbox}
      />,
      <Line
        text="როგორც ხედავ, დღეს კარგი ამინდია."
        image="http://placekitten.com/g/50/50"
      />,
      <SelectWord
        questionTitle='Click on the word meaning "weather is":'
        words={['წვიმა', 'ქარი', 'ამინდია', 'როგორ']}
        correctNum={2}
        handleClickCheckbox={this.props.handleClickCheckbox}
      />,
    ];

    let currentTimeline = [];
    for (let i = 0; i < this.props.progress; i++) {
      currentTimeline.push(storyArr[i]);
    }

    return <div>{currentTimeline}</div>;
  }
}

export default Story;
