import React from 'react';
import { shallow } from 'enzyme';
import Popup from './';

jest.mock('react');

jest.mock('../../../context/modal-context', () => ({
  ModalContext: () => [false, () => {}]
}));

jest.mock('../../atoms/Button', () => ({
  Button: () => <div>Button Atom Mock</div>
}));

jest.mock('../../atoms/Title', () => ({
  Title: () => <div>Title Atom Mock</div>
}));

jest.mock('../../atoms/SubTitle', () => ({
  SubTitle: () => <div>SubTitle Atom Mock</div>
}));

describe('Popup molecule Testing', () => {
  it('should render without any error', () => {
    const wrapper = shallow(<Popup />);

    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
