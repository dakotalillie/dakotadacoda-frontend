import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Contact from './Contact';

describe('Contact', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Contact />);
    wrapper.instance().sendEmail = jest.fn();
    wrapper.update();
  });

  it('renders successfully', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('user fills in some fields', () => {
    beforeEach(() => {
      wrapper.find('#name').simulate('change', {
        target: { name: 'name', value: 'Dakota' }
      });
      wrapper.find('#email').simulate('change', {
        target: { name: 'email', value: 'dakota@email.com' }
      });
    });

    it('updates state', () => {
      expect(wrapper.state().formValues.name).toEqual('Dakota');
      expect(wrapper.state().formValues.email).toEqual('dakota@email.com');
    });

    describe('user submits form with empty fields', () => {

      beforeEach(() => {
        wrapper.find('Form').simulate('submit', { preventDefault: () => { } });
      });

      it('updates state', () => {
        expect(wrapper.state().formErrors._subject).toBe(true);
        expect(wrapper.state().formErrors.message).toBe(true);
        expect(wrapper.state().status).toEqual('error');
      });

      it('determines input className from state', () => {
        expect(wrapper.find('#subject').props().className).toEqual('error');
        expect(wrapper.find('#message').props().className).toEqual('error');
      });

      it('clears error after focusing on input', () => {
        wrapper.find('#subject').simulate('focus', { target: { name: '_subject' }});
        expect(wrapper.state().formErrors._subject).toBe(false);
        expect(wrapper.state().status).toBeNull();
      });

    });

    describe('user fills in rest of fields and submits form', () => {

      beforeEach(() => {
        wrapper.find('#subject').simulate('change', {
          target: { name: '_subject', value: 'Foo Bar' }
        });
        wrapper.find('#message').simulate('change', {
          target: { name: 'message', value: 'Hello World' }
        });
        wrapper.find('Form').simulate('submit', { preventDefault: () => { } });
      });    
  
      it('sets status to `loading`', () => {
        expect(wrapper.state().status).toEqual('loading');
      });
  
      it('calls sendEmail', () => {
        expect(wrapper.instance().sendEmail).toHaveBeenCalled();
      });

      it('changes submit button className', () => {
        const button = wrapper.find('.button_div Button');
        expect(button.props().className).toEqual('submit_button disabled loading');
      });

      it('changes submit button contents', () => {
        const button = wrapper.find('.button_div Button');
        expect(button.children().text()).toEqual('<Loader />');
      });

      describe('submission is successful', () => {

        beforeEach(() => {
          wrapper.instance().handleResponse({ status: 200 });
          wrapper.update();
        });

        it('sets status to `success`', () => {   
          expect(wrapper.state().status).toEqual('success');
        });

        it('changes submit button className', () => {
          const button = wrapper.find('.button_div Button');
          expect(button.props().className).toEqual('submit_button disabled');
        });
  
        it('changes submit button contents', () => {
          const button = wrapper.find('.button_div Button');
          expect(button.children().text()).toEqual('<FontAwesomeIcon /> Sent!');
        });
      });

      describe('submission is unsuccessful', () => {

        beforeEach(() => {
          wrapper.instance().handleResponse({ status: 400 });
          wrapper.update();
        });

        it('sets status to `error`', () => {
          expect(wrapper.state().status).toEqual('error');
        });
      
        it('displays error message ', () => {
          expect(wrapper.find('.error_text').exists()).toBe(true);
        });

        it('resets submit button className', () => {
          const button = wrapper.find('.button_div Button');
          expect(button.props().className).toEqual('submit_button');
        });
  
        it('resets submit button contents', () => {
          const button = wrapper.find('.button_div Button');
          expect(button.children().text()).toEqual('Send');
        });
      });
    });
  });
});