import React from "react";

import Logo from "./Logo";
import CardNumber from "./CardNumber";
import CardHolder from "./CardHolder";
import ExpDate from "./ExpDate";
import CCV from "./CCV";

const Card = () => {
  const [cardNumber, setCardNumber] = React.useState("");
  const [holderName, setHolderName] = React.useState("Samuel Al Hasme");
  const [expDate, setExpDate] = React.useState("");
  const [ccv, setCcv] = React.useState("");

  const cardNumberInputRef = React.useRef(null);
  const cardHolderInputRef = React.useRef(null);
  const expDateInputRef = React.useRef(null);
  const ccvInputRef = React.useRef(null);

  const isCardNumberValid = () => {
    const value = cardNumber?.replace(/\s+/g, "");
    if (value === "") return false;
    if (value.length !== 16) return false;

    return true;
  };

  const isCardHolderValid = () => {
    const value = holderName?.replace(/\s+/g, "");
    if (value === "") return false;

    return true;
  };

  const isExpDateValid = () => {
    const value = expDate?.replace(/\s+/g, "")?.replace("/", "");
    if (value === "") return false;
    if (value.length !== 4) return false;

    return true;
  };

  const isCcvValid = () => {
    const value = ccv?.replace(/\s+/g, "");
    if (value === "") return false;
    if (value.length !== 3) return false;

    return true;
  };

  const isValid =
    isCardNumberValid() &&
    isCardHolderValid() &&
    isExpDateValid() &&
    isCcvValid();

  return (
    <div className={`card-container ${isValid ? "ok" : ""}`}>
      <Logo />
      <CardNumber
        value={cardNumber}
        setValueHandler={setCardNumber}
        inputRef={cardNumberInputRef}
        moveNext={() => cardHolderInputRef?.current?.focus()}
      />
      <div className="card-details">
        <CardHolder
          value={holderName}
          setValueHandler={setHolderName}
          inputRef={cardHolderInputRef}
        />
        <ExpDate
          value={expDate}
          setValueHandler={setExpDate}
          inputRef={expDateInputRef}
          moveNext={() => ccvInputRef?.current?.focus()}
        />
        <CCV value={ccv} setValueHandler={setCcv} inputRef={ccvInputRef} />
      </div>
    </div>
  );
};

export default Card;
