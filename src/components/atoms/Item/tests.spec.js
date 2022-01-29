import React from 'react';
import { shallow } from 'enzyme';
import Item from './';

describe('Item atom Testing', () => {
  it('should render without any error', () => {
    const wrapper = shallow(<Item title="Item Title" />);

    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
