import React from 'react';
import { shallow } from 'enzyme';
import Template from './';

jest.mock('../components/atoms/Button', () => ({
  Button: () => <div>Button Atom Mock</div>
}));

jest.mock('../components/atoms/Input', () => ({
  Input: () => <div>Input Atom Mock</div>
}));

describe('Template Testing', () => {
  it('should render without any error', () => {
    const wrapper = shallow(<Template />);

    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
