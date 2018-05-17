import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import validate from './validate';

import RenderField from './renderField';
// import renderHobbies from './renderHobbies';

import renderMembers from './renderMembers';

const FieldArraysForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="Team Name"
        type="text"
        component={RenderField}
        label="Team name"
      />
      <FieldArray name="members" component={renderMembers} />
      <div>
        <button type="submit" disabled={submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'fieldArrays', // a unique identifier for this form
  validate,
})(FieldArraysForm);
