import type { Meta, StoryObj } from "@storybook/react";
import "../../style.css";

import React, { useState } from 'react';
import { GithubGraph } from ".";
import lodash from 'lodash';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof GithubGraph> = {
  title: "components/Github graph",
  component: GithubGraph,
  id: 'github-commit-history-view'
};

export default meta;
type Story = StoryObj<typeof GithubGraph>;

export const FirstStory: Story = {
  name: 'History view',
  args: {
    //👇 The args you need here will depend on your component
  },
  render() {
    return React.createElement(() => {
      const [value, setValue] = useState(1);
      return (
        <div className="w-full h-[100vh] flex items-center justify-center">
            <div className="w-[90%] flex items-center justify-center">
              <GithubGraph 
                startDate="2020-01-30"
                data={[...Array(365).keys()].map(i => lodash.random(1, 50))}
              />
            </div>
        </div>
      )
    })
  }
};
