import React from 'react';
import Line from './Line';
import MultiChoice from './MultiChoice';
import FormSentence from './FormSentence';
import Narrator from './Narrator';
import Blank from './Blank';
// import LineWithHover from './LineWithHover';

class Story extends React.Component {
  render() {
    const antIcon =
      'https://cdn.discordapp.com/attachments/776095215438004239/776504112933634108/ant.png';
    const bugIcon =
      'https://cdn.discordapp.com/attachments/776095215438004239/776504120830853120/bug.png';

    const storyArr = [
      <Narrator
        text="ერთხელ რწყილი და ჭიანჭველა დაძმობილდნენ და გაუდგნენ გზას."
        translation="Once upon a time a flea and an ant became friends and started their journey."
        audiolink="https://cdn.discordapp.com/attachments/776808259369566208/776818865472012339/New_Recording_45.m4a"
      />,
      <MultiChoice
        questionTitle="The flea and the ant became friends."
        choices={['No, that’s not right', 'Yes, that’s true']}
        answer="Yes, that’s true"
        handleClickCheckbox={this.props.handleClickCheckbox}
      />,
      <Narrator
        text="მიადგნენ რუს. რწყილმა უთხრა ჭიანჭველას:"
        translation="They arrived at a stream. The flea told the ant:"
        audiolink="https://cdn.discordapp.com/attachments/776808259369566208/776819223065526272/New_Recording_52.m4a"
      />,
      <FormSentence
        questionTitle="Listen and form a sentence"
        words={['გადავხტები', 'იზამ', 'მე', 'შენ', 'და', 'რას']}
        answers={['მე', 'გადავხტები', 'და', 'შენ', 'რას', 'იზამ']}
        audiolink="https://cdn.discordapp.com/attachments/776808259369566208/776817716714536960/My_recording_4.m4a"
      />,
      <Line
        text="მეც გადმოვხტები."
        translation="I will jump, too."
        image={antIcon}
        audiolink="https://cdn.discordapp.com/attachments/776808259369566208/776817783056891965/My_recording_7.m4a"
      />,
      <Narrator
        text="რწყილმა ისკუპა და გადახტა; ჭიანჭველამ ისკუპა, მაგრამ წყალში ჩავარდა."
        translation="The flea jumped over the stream; The ant tried, but fell into the water."
        audiolink="https://cdn.discordapp.com/attachments/776808259369566208/776819565681836042/New_Recording_53.m4a"
      />,
      <Blank
        text="ძმობილო, ........, ნუ დამახრჩობ."
        translation="my friend, help me. Don’t let me drown."
        image={antIcon}
        audiolink="https://cdn.discordapp.com/attachments/776808259369566208/776817832322924584/My_recording_9.m4a"
        questionTitle='Click on the word meaning "help me":'
        words={['მიშველე', 'გადახტა', 'წყალი', 'ამინდი']}
        answer="მიშველე"
        handleClickCheckbox={this.props.handleClickCheckbox}
      />,
      <Narrator
        text="რწყილი ახტა, დახტა, მივიდა ღორთან და სთხოვა:"
        translation="The flea jumped up and down, came up to a pig and asked:"
        audiolink="https://cdn.discordapp.com/attachments/776808259369566208/776817275177009152/New_Recording_50.m4a"
      />,
      <Line
        text="ღორო მომე ჯაგარი, დავგრეხ თოკსა – ბაწარსა, ჩავუგდებ და ამოვიყვან ჩემს ძმობილს ჭიანჭველასა."
        translation="Dear pig, give me your bristle, I’ll make a rope, throw it into the water and save my friend ant."
        image={bugIcon}
        audiolink="https://cdn.discordapp.com/attachments/776808259369566208/776817877381939210/My_recording_11.m4a"
      />,
      <MultiChoice
        questionTitle="What does the flea want?"
        choices={[
          'The flea wants to save the ant',
          'The flea wants to go home',
          'throw it into the water and save my friend ant.',
        ]}
        answer="The flea wants to save the ant"
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
