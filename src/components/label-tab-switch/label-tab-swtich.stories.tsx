import type { Meta, StoryObj } from "@storybook/react";
import "../../style.css";

import React, { useState } from 'react';
import { LabelTabSwitch } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof LabelTabSwitch> = {
  title: "components/Label Tab Switch",
  component: LabelTabSwitch,
  id: 'label-tab-swtich'
};

export default meta;
type Story = StoryObj<typeof LabelTabSwitch>;

export const FirstStory: Story = {
  name: 'label-tab-switch',
  args: {
    //👇 The args you need here will depend on your component
  },
  render() {
    return React.createElement(() => {
      const [index, setIndex] = useState<number>(1);
      return (
        <div className="w-full h-[100vh] flex items-center justify-center">
          <LabelTabSwitch index={index} onChange={(index) => setIndex(index)} items={['Tab 1', 'Tab 2', 'Tab 3']}/>
        </div>
      )
    })
  }
};
