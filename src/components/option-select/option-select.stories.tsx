import type { Meta, StoryObj } from "@storybook/react";
import "../../style.css";

import React, { useState } from 'react';
import { OptionSelect } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof OptionSelect> = {
  title: "Components/Option-Select",
  component: OptionSelect,
  id: 'option-select'
};

export default meta;
type Story = StoryObj<typeof OptionSelect>;

export const FirstStory: Story = {
  name: 'Option Select',
  args: {
    //👇 The args you need here will depend on your component
  },
  render() {
    return React.createElement(() => {
      const [value, setValue] = useState(1);
      return (
        <div className="w-full h-[100vh] flex items-center justify-center">
          <OptionSelect 
            className="w-[10rem]"
            items={[
              { value: 1, label: 'label 1' },
              { value: 2, label: 'label 2' },
              { value: 3, label: 'label 3' },
              { value: 4, label: 'label 4' },
              { value: 5, label: 'label 5' },
              { value: 6, label: 'label 5', disabled: true },
              { value: 6, label: 'label 5', disabled: true },
            ]}
            selectedItem={value}
            multiples={false}
            setSelectedItem={(value) => {
              setValue(value);
            }}
          />
        </div>
      )
    })
  }
};
