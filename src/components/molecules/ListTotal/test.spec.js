import React from 'react';
import { shallow } from 'enzyme';
import ListTotal from './';

jest.mock('../../../utils/get-total-times', () => ({
  getTotalTimes: () => 1
}));

describe('ListTotal molecule Testing', () => {
  it('should render without any error', () => {
    const wrapper = shallow(<ListTotal count={[{ id: 1, title: 'Title', count: 2 }]} />);

    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
