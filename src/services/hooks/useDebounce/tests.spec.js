import React from 'react';
import { shallow } from 'enzyme';
import { useDebounce } from './';

describe('useDebounce hook Testing', () => {
  const Component = ({ value, delay }) => {
    const result = useDebounce(value, delay);
    return <div result={result} />;
  };
  it('should execute useDebounce hook', () => {
    const wrapper = shallow(<Component value="term" delay={100} />);
    expect(wrapper.props()).toEqual({ result: 'term' });
  });
});
