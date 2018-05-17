import React from 'react';


const RenderField = ({ input, label, type, meta: { touched, error } }) =>{
  console.log("input --->", JSON.stringify(input) , label, type);
  if(touched){
   
      console.log("input --->1", touched);
    
  }
  return(
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label}/>
      { touched && error && <span>{error}</span>}
    </div>
  </div>
 )
} 

export default RenderField;