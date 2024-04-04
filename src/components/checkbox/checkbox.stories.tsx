import type { Meta, StoryObj } from "@storybook/react";
import "../../style.css";

import React, { useState } from 'react';
import { Checkbox } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Checkbox> = {
  title: "components/Checkbox",
  component: Checkbox,
  id: 'checkbox'
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const FirstStory: Story = {
  name: 'checkbox',
  args: {
    //👇 The args you need here will depend on your component
  },
  render() {
    return React.createElement(() => {
      const [value, setValue] = useState(false);
      return (
        <div className="w-full h-[100vh] flex items-center justify-center">
          <Checkbox checked={value} onChanged={(value: boolean) => setValue(value)}>jljlkj</Checkbox>
          <Checkbox checked={value} disabled={true} onChanged={(value: boolean) => setValue(value)}>jljlkj</Checkbox>
        </div>
      )
    })
  }
};
