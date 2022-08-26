import React from "react";

const DynamicInput = (props) => {
  const {
    value,
    onChangeHandler,
    heading,
    inputRef,
    containerClassName = "",
    sm = false,
  } = props;

  // const value = props.value;
  // const setCardNumber = props.setCardNumber;
  // const inputRef = React.useRef(null);

  const isInputActive = !!value && value !== "";

  const showFilledClassName = isInputActive;
  const showIdleClassName = !value && value === "" && !isInputActive;

  const containerClassNames = `
  dynamic-input 
  ${sm ? "sm" : ""} 
  ${containerClassName} 
  clickable 
    ${showIdleClassName ? "idle" : ""} 
    `;

  const inputClassNames = `
    c-n-i-n 
    ${showFilledClassName ? "filled" : ""} 
    `;

  return (
    <div
      className={containerClassNames}
      onClick={(e) => {
        inputRef?.current?.focus();
      }}
    >
      <div className="inner">
        <input
          ref={inputRef}
          value={value}
          className={inputClassNames}
          onChange={(e) => {
            onChangeHandler(e);
          }}
        />
        <span className="heading">{heading}</span>
      </div>
    </div>
  );
};

export default DynamicInput;
