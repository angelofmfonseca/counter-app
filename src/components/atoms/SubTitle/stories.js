import React from 'react';
import SubTitle from './';

export default {
  subtitle: 'Item subtitle',
  component: SubTitle,
  args: {
    subtitle: 'Item subtitle'
  }
};

export const Primary = (args) => (
  <SubTitle primary {...args}>
    Item subtitle
  </SubTitle>
);
