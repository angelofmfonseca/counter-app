import React from 'react';
import ListTotal from './';

export default {
  count: [2, 1, 0, 4],
  component: ListTotal,
  args: { count: [2, 1, 0, 4] }
};

export const Primary = (args) => (
  <ListTotal primary {...args}>
    7
  </ListTotal>
);
