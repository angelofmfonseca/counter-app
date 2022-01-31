import React from 'react';
import { shallow } from 'enzyme';
import Title from './';

describe('Title atom Testing', () => {
  it('should render without any error', () => {
    const props = {
      title: 'Title',
      color: '#000',
      fontSize: '22px',
      fontWeight: 400,
      textAlign: 'center'
    };
    const wrapper = shallow(<Title {...props} />);
    console.log('wrapper: ', wrapper.props());

    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
