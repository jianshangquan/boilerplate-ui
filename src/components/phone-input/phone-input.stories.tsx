import type { Meta, StoryObj } from "@storybook/react";
import "../../style.css";

import React, { useState } from 'react';
import { BoilerplatePhoneValueProps, PhoneInput } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof PhoneInput> = {
  title: "components/input",
  component: PhoneInput,
  id: 'phone-input'
};

export default meta;
type Story = StoryObj<typeof PhoneInput>;

export const FirstStory: Story = {
  name: 'phone-input',
  args: {
    //👇 The args you need here will depend on your component
  },
  render() {
    return React.createElement(() => {
      const [value, setValue] = useState<BoilerplatePhoneValueProps>({ number: '9795788102', countryCode: '+95' });
      return (
        <div className="w-full h-[100vh] flex items-center justify-center">
          <PhoneInput value={value} onChange={(value) => setValue(value)} appearance={{ className: 'w-[30rem]' }}/>
        </div>
      )
    })
  }
};
