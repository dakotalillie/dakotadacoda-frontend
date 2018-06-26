import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Blog from './Blog';

describe('Blog', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Blog />);
  });

  it('renders successfully', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});