import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Header from './Header';

describe('Header', () => {

  let wrapper, handleScroll;

  beforeEach(() => {
    handleScroll = jest.fn();
    wrapper = shallow(<Header handleScroll={handleScroll} />);
  });

  it('renders successfully', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('clicking on NavbarBrand calls handleScroll with `home` argument', () => {
    wrapper.find('NavbarBrand').simulate('click');
    expect(handleScroll).toHaveBeenLastCalledWith('home');
  });

  it('clicking on NavLink calls handleScroll function from props', () => {
    wrapper.find('#home_nav_link').simulate('click');
    expect(handleScroll).toHaveBeenLastCalledWith('home');
    wrapper.find('#about_nav_link').simulate('click');
    expect(handleScroll).toHaveBeenLastCalledWith('about');
    wrapper.find('#projects_nav_link').simulate('click');
    expect(handleScroll).toHaveBeenLastCalledWith('projects');
    wrapper.find('#skills_nav_link').simulate('click');
    expect(handleScroll).toHaveBeenLastCalledWith('skills');
    wrapper.find('#blog_nav_link').simulate('click');
    expect(handleScroll).toHaveBeenLastCalledWith('blog');
    wrapper.find('#contact_nav_link').simulate('click');
    expect(handleScroll).toHaveBeenLastCalledWith('contact');
  });
});