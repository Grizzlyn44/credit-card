import DynamicInput from "../Core/DynamicInput/DynamicInput";

const CardHolder = (props) => {
  const { value, setValueHandler, inputRef } = props;

  const onChangeHandler = (e) => {
    const inputValue = e.target.value;
    // const formattedValue = formatNumber(inputValue);
    setValueHandler(inputValue);
  };

  return (
    <DynamicInput
      value={value}
      onChangeHandler={(e) => onChangeHandler(e)}
      heading={"Card Holder"}
      sm
      inputRef={inputRef}
    />
  );
  // const value = props.value?.toUpperCase();

  // const classNames = `card-holder clickable ${
  //   !value && value === "" ? "active" : ""
  // }`;

  // return (
  //   <div className={classNames}>
  //     <div className="heading">Card Holder</div>
  //     <div className="content">{value}</div>
  //   </div>
  // );
};

export default CardHolder;
