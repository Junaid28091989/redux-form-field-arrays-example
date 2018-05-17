import React from 'react';
import RenderField from './renderField';

import {Field} from 'redux-form';

const renderHobbies = ({ fields, meta: { error } }) => (
  <ul>
    
    <li>
      <button type="button" onClick={() => fields.push()}>Add Hobby</button>
    </li>
    
    {fields.map((hobby, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Hobby"
          onClick={() => fields.remove(index)}
        />
        <Field
          name={hobby}
          type="text"
          component={RenderField}
          label={`Hobby #${index + 1}`}
        />
      </li>
    ))}
    {error && <li className="error">{error}</li>}
  </ul>
);

export default renderHobbies;