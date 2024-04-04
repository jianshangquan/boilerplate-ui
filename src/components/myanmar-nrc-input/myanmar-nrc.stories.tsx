import type { Meta, StoryObj } from "@storybook/react";
import "../../style.css";

import React, { useState } from 'react';
import { BoilerplateMyanmarNRCInputValueProps, MyanmarNRCInput } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof MyanmarNRCInput> = {
  title: "components/input",
  component: MyanmarNRCInput,
  id: 'myanmar-nrc'
};

export default meta;
type Story = StoryObj<typeof MyanmarNRCInput>;

export const FirstStory: Story = {
  name: 'myanmar-nrc',
  args: {
    //👇 The args you need here will depend on your component
  },
  render() {
    return React.createElement(() => {
      const [value, setValue] = useState<BoilerplateMyanmarNRCInputValueProps>({ 
        state: '1',  
        number: '12345',
        township: 'LaMaTa',
        type: 'N'
      });
      return (
        <div className="w-full h-[100vh] flex flex-col items-center justify-center">
          <MyanmarNRCInput value={value} onChange={(value) => setValue(value)}/>
          <MyanmarNRCInput value={value} disabled={true} onChange={(value) => setValue(value)}/>
        </div>
      )
    })
  }
};

