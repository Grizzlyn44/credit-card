import DynamicInput from "../Core/DynamicInput/DynamicInput";

const formatNumber = (valueFromInput) => {
  // Should be better :)
  const valueToUse = valueFromInput?.replace(/\s+/g, "");
  if (valueToUse.length > 3) return valueFromInput.slice(0, -1);
  return valueToUse;
};

const CCV = (props) => {
  const { value, setValueHandler, inputRef } = props;

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
      heading={"CCV"}
      sm
      containerClassName="ccv"
      inputRef={inputRef}
    />
  );
};

export default CCV;
