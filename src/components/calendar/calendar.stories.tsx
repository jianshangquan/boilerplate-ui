import type { Meta, StoryObj } from "@storybook/react";
import '../../style.css'

import React, { useState } from 'react';
import { CalendarInput, DATETIME12_FORMAT } from ".";
import moment from "moment";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof CalendarInput> = {
  title: "Components/ Calendar Input",
  component: CalendarInput,
  id: 'calendar-input'
};

export default meta;
type Story = StoryObj<typeof CalendarInput>;

export const FirstStory: Story = {
  name: 'Calendar',
  args: {
    //👇 The args you need here will depend on your component
  },
  render() {
    return React.createElement(() => {
      const [value, setValue] = useState(moment());
      return (
        <div className="w-full h-[100vh] flex gap-2 items-center justify-center">
          <CalendarInput value={value} appearance={{ calendar: { modal: { className: 'bg-white' } } }}/>
          <CalendarInput value={value} includeTime={true}/>
          <CalendarInput value={value} includeTime={true} timeFormat='24'/>
        </div>
      )
    })
  }
};
