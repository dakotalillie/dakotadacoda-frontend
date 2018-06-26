import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Jumbo from './Jumbo';

describe('Jumbo', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Jumbo />);
  });

  it('renders successfully', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});