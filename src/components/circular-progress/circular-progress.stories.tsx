import type { Meta, StoryObj } from "@storybook/react";
import "../../style.css";

import React, { useState } from 'react';
import { CircularProgress } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof CircularProgress> = {
  title: "Components/Circular Progress",
  component: CircularProgress,
  id: 'circular-progress'
};

export default meta;
type Story = StoryObj<typeof CircularProgress>;

export const FirstStory: Story = {
  name: 'Circular Progress',
  args: {
    //👇 The args you need here will depend on your component
  },
  render() {
    return React.createElement(() => {
      const [value, setValue] = useState(1);
      return (
        <div className="w-full h-[100vh] flex items-center justify-center">
          <CircularProgress 
            progress={10}
            pathLength={100}
            size={30}
            isProcessing={true}
          />
        </div>
      )
    })
  }
};
