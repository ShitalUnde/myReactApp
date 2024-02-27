import React, { useState } from "react";
import PropTypes from "prop-types";
// import { useNavigate } from "react-router-dom";

export default function TextForm(props) {
  // const navigate = useNavigate()
 const [text, setText]= useState('');


 const testTransformation = (action)=> {
  console.log(action);
  let result = null
 
  if(action === 'uppercase'){
    result = text.toUpperCase();
  } else if(action === 'lowercase'){
    result = text.toLowerCase();
  } else if(action === 'clear'){
    result = '';
  }
  setText(result)
 }

const changeText = (event) => {
  setText(event.target.value)
}


  return (
    <>
    <div className="container my-3">
    <h1> {props.heading} </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="textForm"
          placeholder="Please enter the data"
          rows="5"
          onChange={changeText}
          value={text}
        ></textarea>
      </div>

      <button disabled = {text.length <= 0} onClick={() => testTransformation('uppercase')} className="btn btn-primary mx-2">Convert to Uppercase</button>
      <button disabled = {text.length <= 0} onClick={() => testTransformation('lowercase')} className="btn btn-primary mx-2">Convert to Lowercase</button>
      <button disabled = {text.length <= 0} onClick={() => testTransformation('clear')} className="btn btn-primary mx-2">Clear Text</button>

        {/* <button onClick={()=> navigate('/contact-us', {replace: true})} className="btn btn-primary  mx-2"> Contact Us</button> */}
    </div>

     <div className="container my-3">
     <h1> Your Text Summary </h1>
      <p>  {text.split(' ').length} words & {text.length} character</p>
      <p> {text.split(' ').length * 0.008} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
     </div>
     </>
  );
}


TextForm.propTypes = {
  heading : PropTypes.string.isRequired
}