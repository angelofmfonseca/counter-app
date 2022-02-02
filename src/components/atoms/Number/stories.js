import React from 'react';
import Number from './';

export default {
  count: 3,
  component: Number,
  args: {
    count: 3
  }
};

export const Primary = (args) => (
  <Number primary {...args}>
    3
  </Number>
);
