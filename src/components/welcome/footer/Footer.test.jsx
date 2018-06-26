import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Footer from './Footer';

describe('Footer', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  it('renders successfully', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});