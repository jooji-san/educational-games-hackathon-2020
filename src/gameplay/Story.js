import React from 'react';
import Line from './Line';
import MultiChoice from './MultiChoice';
import SelectWord from './SelectWord';
import FormSentence from './FormSentence';
import Narrator from './Narrator';

class Story extends React.Component {
  render() {
    const antIcon =
      'https://cdn.discordapp.com/attachments/776095215438004239/776504112933634108/ant.png';
    const bugIcon =
      'https://cdn.discordapp.com/attachments/776095215438004239/776504120830853120/bug.png';

    const storyArr = [
      <Narrator text="ერთხელ ერთი რწყილი და ჭიანჭველა დაძმობილდნენ და გაუდგნენ გზას. რუს მიადგნენ. რწყილმა უთხრა ჭიანჭველას:" />,
      <MultiChoice
        questionTitle="The flea and the ant became friends."
        choices={['No, that’s not right', 'Yes, that’s true']}
        answer="Yes, that’s true"
        handleClickCheckbox={this.props.handleClickCheckbox}
      />,
      <FormSentence
        questionTitle="Listen and form a sentence"
        words={['გადავხტები', 'იზამ', 'მე', 'შენ', 'და', 'რას']}
        answers={['მე', 'გადავხტები', 'და', 'შენ', 'რას', 'იზამ']}
      />,
      <Line text="მეც გადმოვხტები." image={antIcon} />,
      <Narrator text="რწყილმა ისკუპა და გადახტა; ჭიანჭველამ ისკუპა, მაგრამ წყალში ჩავარდა. " />,
      <Narrator text="ჭიანჭველა რწყილს შეეხვეწა:" />,
      <Line text="ძმობილო, ........, ნუ დამახრჩობ." image={antIcon} />,
      <SelectWord
        questionTitle='Click on the word meaning "help me":'
        words={['მიშველე', 'გადახტა', 'წყალი', 'ამინდი']}
        answer="მიშველე"
        handleClickCheckbox={this.props.handleClickCheckbox}
      />,
      // <MultiChoice
      //   questionTitle="What is Mario's mission?"
      //   choices={[
      //     'To stay home',
      //     'To rescue princess peach',
      //     'To kill princess peach',
      //   ]}
      //   answer="To rescue princess peach"
      //   handleClickCheckbox={this.props.handleClickCheckbox}
      // />,
    ];

    let currentTimeline = [];
    for (let i = 0; i < this.props.progress; i++) {
      currentTimeline.push(storyArr[i]);
    }

    return <div className="story">{currentTimeline}</div>;
  }
}

export default Story;
