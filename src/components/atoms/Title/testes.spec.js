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
    expect(wrapper.prop('children')).toBe('Title');
    expect(wrapper.prop('color')).toBe('#000');
    expect(wrapper.prop('fontSize')).toBe('22px');
    expect(wrapper.prop('fontWeight')).toBe(400);
    expect(wrapper.prop('textAlign')).toBe('center');

    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
