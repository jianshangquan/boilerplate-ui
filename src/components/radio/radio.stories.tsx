import type { Meta, StoryObj } from "@storybook/react";
import "../../style.css";

import React, { useState } from 'react';
import { Radio, RadioOption } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Radio> = {
  title: "components/Radio",
  component: Radio,
  id: 'radio'
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const FirstStory: Story = {
  name: 'radio',
  args: {
    //👇 The args you need here will depend on your component
  },
  render() {
    return React.createElement(() => {
      const [value, setValue] = useState();
      return (
        <div className="w-full h-[100vh] flex items-center justify-center">
          <Radio value={value} onChanged={(index, value) => setValue(value)} className="gap-3">
            <RadioOption value={1} label={'Option 1'} disabled={true}/>
            <RadioOption value={2} label={'Option 2'}/>
          </Radio>
        </div>
      )
    })
  }
};
