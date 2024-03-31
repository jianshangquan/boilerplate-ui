import type { Meta, StoryObj } from "@storybook/react";
import "../../style.css";

import React, { useEffect, useState } from 'react';
import { AnimatedCounter } from ".";
import lodash from 'lodash';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof AnimatedCounter> = {
  title: "components/Animated counter",
  component: AnimatedCounter,
  id: 'animated-counter'
};

export default meta;
type Story = StoryObj<typeof AnimatedCounter>;

export const FirstStory: Story = {
  name: 'animated counter',
  args: {
    //👇 The args you need here will depend on your component
  },
  render() {
    return React.createElement(() => {
      const [value, setValue] = useState(1);

      useEffect(() => {
        setInterval(() => {
          setValue(lodash.random(0, 1000));
        }, 1000 )
      }, [])

      return (
        <div className="w-full h-[100vh] flex items-center justify-center">
          <AnimatedCounter value={value}/>
        </div>
      )
    })
  }
};
