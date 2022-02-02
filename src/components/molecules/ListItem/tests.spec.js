import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './';

jest.mock('../../../services/api/post-increment-counter', () => ({
  postIncrementCounter: () => {}
}));

jest.mock('../../../services/api/post-decrement-counter', () => ({
  postDecrementCounter: () => {}
}));

describe('ListItem molecule Testing', () => {
  it('should render without any error', () => {
    const wrapper = shallow(<ListItem eachCount={{ id: 1, title: 'Title', count: 2 }} />);
    console.log('wrapper: ', wrapper.debug());
    expect(wrapper.find('Item').prop('title')).toBe('Title');
    expect(wrapper.find('Number').prop('count')).toBe(2);
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
