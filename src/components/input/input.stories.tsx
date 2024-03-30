import type { Meta, StoryObj } from "@storybook/react";
import "../../style.css";
import React from 'react';

import { Input } from "..";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  id: 'input'
};

export default meta;
type Story = StoryObj<typeof Input>;

export const FirstStory: Story = {
  name: 'Index',
  args: {
    //👇 The args you need here will depend on your component
    value: null,
    placeholder: 'Enter your name',
    onShowPreview: (value: any) => value
  },
  render(){
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <Input className="w-[20rem]"/>
      </div>
    )
  }
};
