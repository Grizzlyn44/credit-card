import React from "react";

const formatNumber = (valueFromInput) => {
  const valueToUse = valueFromInput.trim();
  let stringFormatted = "";
  for (let x = 0; x < valueToUse.length; x++) {
    if ((x + 1) % 4 === 0 && x !== 0) {
      stringFormatted = stringFormatted + `${valueToUse[x]} `;
    } else {
      stringFormatted = stringFormatted + valueToUse[x];
    }
  }

  return stringFormatted;
};

const generateInputs = () => {
  let inputs = [];

  for (let x = 0; x < 16; x++) {
    inputs.push(<input className="c-n-i-s" />);
  }

  return inputs;
};

const CardNumber = (props) => {
  const value = props.value;
  const setCardNumber = props.setCardNumber;

  // const formattedString = formatNumber(value);

  const html = value?.split(" ").map((e, index) => (
    <span key={`digit-${index}`} className="f-digit">
      {e}
    </span>
  ));

  return (
    <div className="card-number">
      <div className="heading">Card Number</div>
      <div className="content">
        {generateInputs()}
        {/* <input
          value={value}
          className="c-n-i"
          onChange={(e) => {
            const formattedString = formatNumber(e.target.value);
            setCardNumber(formattedString);
            // console.log("change", e.target.value);
          }}
        /> */}
        {/* {html} */}
      </div>
    </div>
  );
};

export default CardNumber;
