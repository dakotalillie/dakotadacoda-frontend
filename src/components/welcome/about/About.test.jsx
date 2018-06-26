import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import About from './About';

describe('About', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<About />);
  });

  it('renders successfully', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});