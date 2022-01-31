import React from 'react';
import { shallow } from 'enzyme';
import CreateScreen from './';

jest.mock('../../atoms/Button', () => ({
  Button: () => <div>Button Atom Mock</div>
}));

jest.mock('../../atoms/Input', () => ({
  Input: () => <div>Input Atom Mock</div>
}));

jest.mock('../../atoms/Loading', () => ({
  Loading: () => <div>Loading Atom Mock</div>
}));

describe('CreateScreen organism Testing', () => {
  it('should render without any error', () => {
    const wrapper = shallow(<CreateScreen />);

    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
