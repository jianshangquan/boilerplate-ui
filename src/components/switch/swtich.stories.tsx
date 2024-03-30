import type { Meta, StoryObj } from "@storybook/react";
import "../../style.css";

import React, { useState } from 'react';
import { Swtich } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Swtich> = {
  title: "components/Switch",
  component: Swtich,
  id: 'swtich'
};

export default meta;
type Story = StoryObj<typeof Swtich>;

export const FirstStory: Story = {
  name: 'switch',
  args: {
    //👇 The args you need here will depend on your component
  },
  render() {
    return React.createElement(() => {
      const [value, setValue] = useState(true);
      return (
        <div className="w-full h-[100vh] flex items-center justify-center">
          <div className="flex gap-10 flex-col items-center justify-center">
            <Swtich value={value} onChanged={(value) => setValue(value)} />
            <Swtich value={value} onChanged={(value) => setValue(value)} label={'allow open'} />
          </div>
        </div>
      )
    })
  }
};
