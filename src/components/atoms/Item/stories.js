import React from 'react';
import Item from './';

export default {
  title: 'Item',
  component: Item,
  args: { title: 'Item' },
  argTypes: {
    onClick: { action: 'onClick', control: null }
  },
  parameters: {
    docs: {
      description: {
        component: 'Name of the counter'
      }
    }
  }
};

export const Primary = (args) => (
  <Item primary {...args}>
    Item
  </Item>
);
