import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Skills from './Skills';

describe('Skills', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Skills />);
  });

  it('renders successfully', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('clicking on tabs sets state', () => {
    wrapper.find('#frameworks_tab').simulate('click');
    expect(wrapper.state().active).toEqual('frameworks');
    wrapper.find('#other_tab').simulate('click');
    expect(wrapper.state().active).toEqual('other');
  });
});