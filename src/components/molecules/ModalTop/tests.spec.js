import React from 'react';
import { shallow } from 'enzyme';
import ModalTop from './';

jest.mock('../../atoms/Button', () => ({
  Button: () => <div>Button Atom Mock</div>
}));

jest.mock('../../atoms/Title', () => ({
  Title: () => <div>Title Atom Mock</div>
}));

describe('ModalTop molecule Testing', () => {
  it('should render without any error when isDisabledButton prop is false', () => {
    const wrapper = shallow(
      <ModalTop
        setIsModalOpened={jest.fn()}
        isDisabledButton={false}
        setItem={jest.fn()}
        addedItem={'cafe'}
      />
    );

    expect(wrapper.isEmptyRender()).toBe(false);
  });
  it('should render without any error when isDisabledButton prop is true', () => {
    const wrapper = shallow(
      <ModalTop
        setIsModalOpened={jest.fn()}
        isDisabledButton={true}
        setItem={jest.fn()}
        addedItem={'cafe'}
      />
    );

    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
