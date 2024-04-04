import type { Meta, StoryObj } from "@storybook/react";
import "../../style.css";
import React, { useEffect, useState } from 'react';

import { Input } from "..";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Input> = {
  title: "components/Input",
  component: Input,
  id: 'input'
};

export default meta;
type Story = StoryObj<typeof Input>;

export const FirstStory: Story = {
  name: 'input',
  args: {
    //👇 The args you need here will depend on your component
    value: null,
    placeholder: 'Enter your name',
    onShowPreview: (value: any) => value
  },
  render() {
    return React.createElement(() => {
      const [state, setState] = useState<any>(null);

      useEffect(() => {
        setInterval(() => {
          console.log('interval')
          setState('fdsa');
        }, 1000)
      }, [])

      return (
        <div className="w-full h-[100vh] flex items-center justify-center flex-col">
          <Input value={state} type="text" className="w-[20rem]" placeholder="Enter your name"/>
          <Input value={state} type="password" className="w-[20rem]" placeholder="Enter your password"/>
          <Input value={state} type="number" className="w-[20rem]" placeholder="Enter your phone number"/>
        </div>
      )
    })
  }
};
