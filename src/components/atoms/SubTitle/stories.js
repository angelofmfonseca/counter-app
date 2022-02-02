import React from 'react';
import SubTitle from './';

export default {
  subtitle: 'Item subtitle',
  component: SubTitle,
  args: {
    subtitle: 'Item subtitle'
  },
  parameters: {
    docs: {
      description: {
        component: 'Any subtitle of the project'
      }
    }
  }
};

export const Primary = (args) => (
  <SubTitle primary {...args}>
    Item subtitle
  </SubTitle>
);
