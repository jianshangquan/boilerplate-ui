import type { Meta, StoryObj } from "@storybook/react";
import "../../style.css";
import React, { useState } from 'react';
import { Textarea } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Textarea> = {
  title: "components/Textarea",
  component: Textarea,
  id: 'textarea'
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const FirstStory: Story = {
  name: 'textarea',
  args: {
    //👇 The args you need here will depend on your component
    value: null,
    placeholder: 'long text area',
  },
  render() {
    return React.createElement(() => {
      const [state, setState] = useState(null);
      return (
        <div className="w-full h-[100vh] flex items-center justify-center flex-col">
          <Textarea placeholder="Test place holder" appearance={{ textarea: { className: '' } }}/>
        </div>
      )
    })
  }
};
