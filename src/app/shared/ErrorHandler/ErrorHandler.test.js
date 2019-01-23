import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../Spinner';
import ErrorHandler from './ErrorHandler';

describe('When no JS errors are caught in a child component', () => {
  it('should render the child component', () => {
    const wrapper = shallow(
      <ErrorHandler>
        <Spinner />
      </ErrorHandler>
    );

    expect(wrapper.find('Spinner').exists()).toBeTruthy();
  });
});
