import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Projects from './Projects';

describe('Projects', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Projects />);
  });

  it('renders successfully', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});