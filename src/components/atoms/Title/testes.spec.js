import React from 'react';
import { shallow } from 'enzyme';
import Title from './';

describe('Item atom Testing', () => {
  it('should render without any error', () => {
    const props = {
      title: 'Item Title',
      color: '#000',
      fontSize: '22px',
      fontWeight: 400
    };
    const wrapper = shallow(<Title {...props} />);

    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
