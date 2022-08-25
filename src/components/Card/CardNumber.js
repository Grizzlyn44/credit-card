import React from "react";

const formatNumber = (valueFromInput) => {
  // Should be better :)
  const valueToUse = valueFromInput?.replace(/\s+/g, "");
  if (valueToUse.length > 16) return valueFromInput.slice(0, -1);
  let stringFormatted = "";
  for (let x = 0; x < valueToUse.length; x++) {
    if (x % 4 === 0 && x !== 0) {
      stringFormatted = stringFormatted + ` ${valueToUse[x]}`;
    } else {
      stringFormatted = stringFormatted + valueToUse[x];
    }
  }

  return stringFormatted;
};

const CardNumber = (props) => {
  const value = props.value;
  const setCardNumber = props.setCardNumber;

  const classNames = `card-number clickable ${
    !value && value === "" ? "active" : ""
  }`;

  return (
    <div className={classNames}>
      <div className="heading">Card Number</div>
      <div className="content">
        <input
          value={value}
          className="c-n-i"
          onChange={(e) => {
            const inputValue = e.target.value;
            const formattedValue = formatNumber(inputValue);
            setCardNumber(formattedValue);
          }}
        />
      </div>
    </div>
  );
};

export default CardNumber;
