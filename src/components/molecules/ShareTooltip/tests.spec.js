import React from 'react';
import { shallow } from 'enzyme';
import ShareTooltip from './';

jest.mock('../../atoms/Button', () => ({
  Button: () => <div>Button Atom Mock</div>
}));

jest.mock('../../atoms/Title', () => ({
  Title: () => <div>Title Atom Mock</div>
}));

describe('ShareTooltip molecule Testing', () => {
  it('should render without any error', () => {
    const wrapper = shallow(<ShareTooltip copyToClipboard={jest.fn()} />);

    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
