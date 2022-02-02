import React from 'react';
import { shallow } from 'enzyme';
import ManageScreen from './';

jest.mock('../../../services/api/post-increment-counter', () => ({
  postIncrementCounter: () => {}
}));

jest.mock('../../../services/api/post-decrement-counter', () => ({
  postDecrementCounter: () => {}
}));

describe('ManageScreen organism Testing', () => {
  it('should render without any error when status is 200', () => {
    const props = {
      list: [{ id: 1, title: 'Title 1', count: 4 }],
      count: { data: [{ id: 3, title: 'Title 2', count: 2 }], status: 200 }
    };
    const wrapper = shallow(<ManageScreen {...props} />);
    expect(wrapper.isEmptyRender()).toBe(false);
  });
  it('should render without any error when list is empty', () => {
    const props = {
      list: [],
      count: { data: [{ id: 3, title: 'Title 2', count: 2 }], status: 200 }
    };
    const wrapper = shallow(<ManageScreen {...props} />);
    expect(wrapper.isEmptyRender()).toBe(false);
  });
  it('should render without any error when list is null', () => {
    const props = {
      list: null,
      count: { data: [{ id: 3, title: 'Title 2', count: 2 }], status: 200 }
    };
    const wrapper = shallow(<ManageScreen {...props} />);
    expect(wrapper.isEmptyRender()).toBe(false);
  });
  it('should render without any error when status is 404', () => {
    const props = {
      list: null,
      count: { data: [{ id: 3, title: 'Title 2', count: 2 }], status: 404 }
    };
    const wrapper = shallow(<ManageScreen {...props} />);
    expect(wrapper.isEmptyRender()).toBe(true);
  });
});
