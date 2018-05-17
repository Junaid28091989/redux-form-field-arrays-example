// import validate from './validate'; 
import React from 'react';
const validate = require('./validate');

// import renderer from 'react-test-renderer';
// test('values.clubName is false', () => {
//   expect(validate(values={})).toBe({"clubName":"Required","members":{"_error":"At least one member must be entered"}});
// });

describe('validate', () => {
  it('knows that 2 and 2 make 4', () => {
    expect({}).toBe({"clubName":"Required","members":{"_error":"At least one member must be entered"}});
  });
});