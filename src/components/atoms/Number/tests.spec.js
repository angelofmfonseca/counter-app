import React from 'react';
import { shallow } from 'enzyme';
import Number from './';

describe('Number atom Testing', () => {
  it('should render without any error', () => {
    const wrapper = shallow(<Number count={5} />);

    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
