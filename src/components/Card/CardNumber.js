import React from "react";
import DynamicInput from "../Core/DynamicInput/DynamicInput";

const CardNumber = (props) => {
  const { value, setValueHandler, inputRef, moveNext } = props;

  const formatNumber = (valueFromInput) => {
    // Should be better :)
    const valueToUse = valueFromInput?.replace(/\s+/g, "");
    if (valueToUse?.length > 15) moveNext();
    if (valueToUse?.length > 16) {
      moveNext();
      return valueFromInput.slice(0, -1);
    }
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

  const onChangeHandler = (e) => {
    const inputValue = e.target.value;
    const isNumber = !isNaN(inputValue[inputValue.length - 1]);
    if (!isNumber && inputValue !== "") return;
    const formattedValue = formatNumber(inputValue);
    setValueHandler(formattedValue);
  };

  return (
    <DynamicInput
      value={value}
      onChangeHandler={(e) => onChangeHandler(e)}
      heading={"Card Number"}
      inputRef={inputRef}
    />
  );
};

export default CardNumber;
