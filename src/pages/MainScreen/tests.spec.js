import React from 'react';
import { shallow } from 'enzyme';
import MainScreen from './';

jest.mock('../../components/atoms/Button', () => ({
  Button: () => <div>Button Atom Mock</div>
}));

jest.mock('../../components/atoms/Input', () => ({
  Input: () => <div>Input Atom Mock</div>
}));

jest.mock('../../components/atoms/Loading', () => ({
  Loading: () => <div>Loading Atom Mock</div>
}));

jest.mock('../../services/api/get-counter.js', () => ({
  getCounter: () => {}
}));

jest.mock('../../services/api/post-increment-counter.js', () => ({
  postIncrementCounter: () => {}
}));

jest.mock('../../services/api/post-decrement-counter.js', () => ({
  postDecrementCounter: () => {}
}));

describe('MainScreen page Testing', () => {
  it('should render without any error', () => {
    const wrapper = shallow(<MainScreen />);

    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
