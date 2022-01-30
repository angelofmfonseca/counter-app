import React from 'react';
import { shallow } from 'enzyme';
import WelcomeScreen from './';

jest.mock('../../assets/logo.svg', () => ({
  ReactComponent: () => <div>Logo Asset Mock</div>
}));

jest.mock('../../components/atoms/Button', () => ({
  Button: () => <div>Buttom Atom Mock</div>
}));

describe('WelcomeScreen page Testing', () => {
  it('should render without any error', () => {
    const wrapper = shallow(<WelcomeScreen />);

    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
