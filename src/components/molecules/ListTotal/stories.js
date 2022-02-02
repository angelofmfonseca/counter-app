import React from 'react';
import ListTotal from './';

export default {
  count: [2, 1, 0, 4],
  component: ListTotal,
  args: { count: [2, 1, 0, 4] },
  parameters: {
    docs: {
      description: {
        component:
          'Component that takes care of showing how many counter are onte the list and how many times each one appears on the list'
      }
    }
  }
};

export const Primary = (args) => (
  <ListTotal primary {...args}>
    7
  </ListTotal>
);
