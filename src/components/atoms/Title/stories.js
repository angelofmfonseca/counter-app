import React from 'react';
import Title from './';

export default {
  title: 'Title',
  component: Title,
  args: {
    title: 'Item title'
  },
  parameters: {
    docs: {
      description: {
        component: 'Any title of the project'
      }
    }
  }
};

export const Primary = (args) => (
  <Title primary {...args}>
    Item title
  </Title>
);
