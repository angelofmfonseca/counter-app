import React from 'react';
import { shallow } from 'enzyme';
import ErrorScreen from './';

jest.mock('../../components/atoms/Button', () => ({
  Button: () => <div>Button Atom Mock</div>
}));

jest.mock('../../components/atoms/Input', () => ({
  Input: () => <div>Input Atom Mock</div>
}));

jest.mock('react-router', () => ({
  useNavigate: () => <div>useNavigate Mock</div>
}));

describe('ErrorScreen page Testing', () => {
  it('should render without any error', () => {
    const wrapper = shallow(<ErrorScreen />);

    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
