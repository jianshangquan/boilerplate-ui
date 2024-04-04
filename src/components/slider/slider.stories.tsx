import type { Meta, StoryObj } from "@storybook/react";
import "../../style.css";

import React, { useState } from 'react';
import { Slider } from ".";
import { Input } from "../input";
import { AnimatedCounter } from "../animated-counter";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Slider> = {
  title: "components/Slider",
  component: Slider,
  id: 'slider'
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const FirstStory: Story = {
  name: 'slider',
  args: {
    //👇 The args you need here will depend on your component
  },
  render() {
    return React.createElement(() => {
      const [value, setValue] = useState<number>(0);
      return (
        <div className="w-full h-[100vh] flex items-center justify-center">
          <div className="w-[50%] flex flex-col gap-1">
            <Input value={value} onChange={({ target }) => setValue(Number(target.value))} placeholder="Value" type="number"/>
            <Slider disabled={false} value={value} onChange={setValue} steps={[0, 0.2, 0.4, 0.6, 0.8, 1]}/>
            <div className="flex gap-1 items-center">
              <span>{'Animated counter : '}</span>
              <AnimatedCounter value={value * 100}/>
            </div>
            <div>{value * 100}</div>
          </div>
        </div>
      )
    })
  }
};

