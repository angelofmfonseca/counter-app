import React from 'react';
import Item from './';

export default {
  title: 'Item',
  component: Item,
  args: { title: 'Item' },
  argTypes: {
    onClick: { action: 'onClick', control: null }
  }
};

export const Primary = (args) => (
  <Item primary {...args}>
    Item
  </Item>
);
