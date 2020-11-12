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
        answer="No, that’s not right"
        handleClickCheckbox={this.props.handleClickCheckbox}
      />,
      <Line
        text="დროა წავიდე პრინცესა პიჩის გადასარჩენად! დროა წავიდე პრინცესა პიჩის გადასარჩენად! დროა წავიდე პრინცესა პიჩის გადასარჩენად! დროა წავიდე პრინცესა პიჩის გადასარჩენად!"
        image="http://placekitten.com/50/50"
      />,
      <MultiChoice
        questionTitle="What is Mario's mission?"
        choices={[
          'To stay home',
          'To rescue princess peach',
          'To kill princess peach',
        ]}
        answer="To rescue princess peach"
        handleClickCheckbox={this.props.handleClickCheckbox}
      />,
      <Line
        text="როგორც ხედავ, დღეს კარგი ამინდია."
        image="http://placekitten.com/g/50/50"
      />,
      <SelectWord
        questionTitle='Click on the word meaning "weather is":'
        words={['წვიმა', 'ქარი', 'ამინდია', 'როგორ']}
        answer="ამინდია"
        handleClickCheckbox={this.props.handleClickCheckbox}
      />,
    ];

    let currentTimeline = [];
    for (let i = 0; i < this.props.progress; i++) {
      currentTimeline.push(storyArr[i]);
    }

    return <div className="story">{currentTimeline}</div>;
  }
}

export default Story;
