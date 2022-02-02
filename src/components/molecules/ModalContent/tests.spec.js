import React from 'react';
import { shallow } from 'enzyme';
import ModalContent from './';

jest.mock('../../atoms/Input', () => ({
  Input: () => <div>Input Atom Mock</div>
}));

jest.mock('../../atoms/Title', () => ({
  Title: () => <div>Title Atom Mock</div>
}));

describe('ModalContent molecule Testing', () => {
  it('should render without any error', () => {
    const wrapper = shallow(<ModalContent setIsDisabledButton={false} setAddedItem={jest.fn()} />);

    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
