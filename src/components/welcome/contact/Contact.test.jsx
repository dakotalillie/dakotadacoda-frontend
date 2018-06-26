import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Contact from './Contact';

describe('Contact', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Contact />);
  });

  it('renders successfully', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('updates state upon typing in input', () => {
    wrapper.find('#name').simulate('change', {
      target: {
        name: 'name', value: 'Dakota'
      }
    });
    expect(wrapper.state().formValues.name).toEqual('Dakota');
  });

  it('determines button class from state', () => {
    let button = wrapper.find('.button_div Button');
    expect(button.props().className).toEqual('submit_button');

    wrapper.setState({ status: 'loading' });
    button = wrapper.find('.button_div Button');
    expect(button.props().className).toEqual('submit_button disabled loading');

    wrapper.setState({ status: 'success' });
    button = wrapper.find('.button_div Button');
    expect(button.props().className).toEqual('submit_button disabled');
  });

  it('determines button contents from state', () => {
    let button = wrapper.find('.button_div Button');
    expect(button.children().text()).toEqual('Send');

    wrapper.setState({ status: 'loading' });
    button = wrapper.find('.button_div Button');
    expect(button.children().text()).toEqual('<Loader />');
    
    wrapper.setState({ status: 'success' });
    button = wrapper.find('.button_div Button');
    expect(button.children().text()).toEqual('<FontAwesomeIcon /> Sent!');
  });

  describe('form submission', () => {

    beforeEach(() => {
      wrapper.instance().sendEmail = jest.fn();
      wrapper.update();
      wrapper.find('Form').simulate('submit', { preventDefault: () => { } });
    });

    it('sets state to `loading`', () => {
      expect(wrapper.state().status).toEqual('loading');
    });

    it('calls sendEmail', () => {
      expect(wrapper.instance().sendEmail).toHaveBeenCalled();
    });
  });

  it('sets state upon a successful response', () => {
    wrapper.instance().handleResponse({ status: 200 });
    expect(wrapper.state().status).toEqual('success');
  });

  it('sets state upon an unsuccessful response', () => {
    wrapper.instance().handleResponse({ status: 400 });
    expect(wrapper.state().status).toEqual('error');
  });

  it('displays error message after unsuccessful response', () => {
    expect(wrapper.find('.error_text').exists()).toBe(false);
    wrapper.setState({ status: 'error' });
    expect(wrapper.find('.error_text').exists()).toBe(true);
  });
});