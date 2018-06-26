import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import FlashMessage from './FlashMessage';

describe('FlashMessage', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <FlashMessage
        title=''
        link=''
        flashOpen
        toggleFlash={() => {}}
      />
    );
  });

  it('renders successfully', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});