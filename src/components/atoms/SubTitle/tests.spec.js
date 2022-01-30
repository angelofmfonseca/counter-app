import React from 'react';
import { shallow } from 'enzyme';
import SubTitle from './';

describe('Item atom Testing', () => {
  it('should render without any error', () => {
    const wrapper = shallow(<SubTitle subtitle="Item Subtitle" />);

    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
