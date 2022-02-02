import React from 'react';
import Title from './';

export default {
  title: 'Title',
  component: Title,
  args: {
    title: 'Item title'
  }
};

export const Primary = (args) => (
  <Title primary {...args}>
    Item title
  </Title>
);
