import React from 'react';
import { shallow } from 'enzyme';
import ManageScreen from './';

jest.mock('../../../services/api/post-increment-counter.js', () => ({
  postIncrementCounter: () => {}
}));

jest.mock('../../../services/api/post-decrement-counter.js', () => ({
  postDecrementCounter: () => {}
}));

describe('ManageScreen organism Testing', () => {
  const props = {
    list: [{ id: 1, title: 'Title 1', count: 4 }],
    count: { data: [{ id: 3, title: 'Title 2', count: 2 }], status: 200 }
  };
  it('should render without any error', () => {
    const wrapper = shallow(<ManageScreen {...props} />);

    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
