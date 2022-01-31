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
  it('should render without any error', () => {
    const wrapper = shallow(
      <ModalTop setIsModalOpened={jest.fn()} isDisabledButton={false} addedItem={'cafe'} />
    );

    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
