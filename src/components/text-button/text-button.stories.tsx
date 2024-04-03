import type { Meta, StoryObj } from "@storybook/react";
import "../../style.css";

import React, { useState } from 'react';
import { TextButton } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof TextButton> = {
  title: "components/Text Button",
  component: TextButton,
  id: 'text-button'
};

export default meta;
type Story = StoryObj<typeof TextButton>;

export const FirstStory: Story = {
  name: 'text button',
  args: {
    //👇 The args you need here will depend on your component
  },
  render() {
    return React.createElement(() => {
      const [value, setValue] = useState(1);
      return (
        <div className="w-full h-[100vh] flex items-center justify-center">
            <TextButton>Hello</TextButton>
        </div>
      )
    })
  }
};
