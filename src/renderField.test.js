import React from 'react';
import renderField from './renderField';


import renderer from 'react-test-renderer';

import {Field} from 'redux-form';


describe('Field component renders the todo correctly', () => {
  it('renderField renders correctly', () => {
       

    const rendered = renderer.create(
        <Field
        name="clubName"
        type="text"
        component={renderField}
        label="Club Name"
        />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
