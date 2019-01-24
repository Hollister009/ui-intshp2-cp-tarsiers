import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../Spinner';
import ErrorHandler from './ErrorHandler';

describe('<ErrorHandler />', () => {
  it('should match its snapshot', () => {
    const wrapper = shallow(<ErrorHandler />);

    expect(wrapper).toMatchSnapshot();
  });
});

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

it('should renders without crashing', () => {
  const props = { hasError: false };

  expect(shallow(<ErrorHandler {...props} />).length).toEqual(1);
});
