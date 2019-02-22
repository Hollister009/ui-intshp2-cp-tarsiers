import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../Spinner';
import ErrorHandler from './ErrorHandler';

describe('<ErrorHandler />', () => {
  it('should match its snapshot', () => {
    const wrapper = shallow(<ErrorHandler />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render the child component', () => {
    const wrapper = shallow(
      <ErrorHandler>
        <Spinner />
      </ErrorHandler>
    );

    expect(wrapper.find('Spinner').exists()).toBeTruthy();
  });

  it('should catch errors with componentDidCatch', () => {
    const wrapper = shallow(
      <ErrorHandler>
        <Spinner />
      </ErrorHandler>
    );
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'componentDidCatch');

    instance.testFunc = () => {
      throw new Error('test error message');
    };
    wrapper.find(Spinner).simulateError(new Error('test error message'));
    expect(spy).toHaveBeenCalled();
  });
});
