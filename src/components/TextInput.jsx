import React from 'react'

function TextInput({ type, placeholder, className }) {
  return (
    <input type={type} className={className} placeholder={placeholder} />
  );
}

export default TextInput;