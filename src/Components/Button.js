import React from "react";
import './Button.css'

function Button(props) {
  const buttonStyle = {
    backgroundColor: props.bgColor || '#161D2F' // set the background color of the surrounding div, or default to transparent if bgColor is not provided
  };
  return (
    <div className="ButtonSection">
      <button style={buttonStyle}>{props.children} {props.name}</button>
    </div>
  );
}

export default Button;
