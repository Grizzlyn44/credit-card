import DynamicInput from "../Core/DynamicInput/DynamicInput";

const ExpDate = (props) => {
  const { value, setValueHandler, inputRef, moveNext } = props;

  const formatNumber = (valueFromInput) => {
    // Should be better :)
    const valueToUse = valueFromInput?.replace(/\s+/g, "")?.replace("/", "");
    if (valueToUse?.length > 3) moveNext();
    if (valueToUse?.length > 4) return valueFromInput.slice(0, -1);
    let stringFormatted = "";
    for (let x = 0; x < valueToUse.length; x++) {
      if (x % 2 === 0 && x !== 0) {
        stringFormatted = stringFormatted + ` / ${valueToUse[x]}`;
      } else {
        stringFormatted = stringFormatted + valueToUse[x];
      }
    }

    return stringFormatted;
  };

  const onChangeHandler = (e) => {
    const inputValue = e.target.value;
    const addedChar = inputValue[inputValue.length - 1];
    const isNumber = !isNaN(addedChar);
    if (!isNumber && inputValue !== "" && addedChar !== "/") return;
    const formattedValue = formatNumber(inputValue);
    setValueHandler(formattedValue);
  };

  return (
    <DynamicInput
      value={value}
      // onChangeHandler={(e) => setValueHandler(e.target.value)}
      onChangeHandler={(e) => onChangeHandler(e)}
      heading={"Exp. Date"}
      sm
      containerClassName="exp-date"
      inputRef={inputRef}
    />
  );
};

export default ExpDate;
