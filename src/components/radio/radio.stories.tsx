import type { Meta, StoryObj } from "@storybook/react";
import "../../style.css";

import React, { useState } from 'react';
import { Radio, RadioOption } from "..";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Radio> = {
  title: "components/Radio",
  component: Radio,
  id: 'test'
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
      const [value, setValue] = useState('value1');
      return (
        <div className="w-full h-[100vh] flex items-center justify-center">
          <Radio<string> className="gap-2" value={value} onChanged={(index, value: any) => {
            console.log('value changed', value);
            setValue(value);
          }}>
            <RadioOption value={'value1'}>Option 1</RadioOption>
            <RadioOption value={'value2'}>Option 2</RadioOption>
            <RadioOption value={'value3'} disabled={true}>Option 3</RadioOption>
          </Radio>
        </div>
      )
    })
  }
};

