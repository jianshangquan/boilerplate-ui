import type { Meta, StoryObj } from "@storybook/react";
import "../../style.css";

import React, { useState } from 'react';
import { Button } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  id: 'button'
};

export default meta;
type Story = StoryObj<typeof Button>;

export const FirstStory: Story = {
  name: 'Button',
  args: {
    //👇 The args you need here will depend on your component
  },
  render() {
    return React.createElement(() => {
      const [value, setValue] = useState(1);
      return (
        <div className="w-full h-[100vh] flex items-center justify-center">
          <Button>Confirm</Button>
          <Button loading={true}>Processing</Button>
        </div>
      )
    })
  }
};
