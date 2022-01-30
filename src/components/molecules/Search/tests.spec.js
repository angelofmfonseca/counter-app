import React from 'react';
import { shallow } from 'enzyme';
import Search from './';

jest.mock('../../atoms/Input', () => ({
  Input: () => <div>Input Atom Mock</div>
}));

jest.mock('../../atoms/Button', () => ({
  Button: () => <div>Button Atom Mock</div>
}));

describe('Search molecule Testing', () => {
  it('should render without any error', () => {
    const wrapper = shallow(<Search searchFilter={jest.fn()} />);

    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
