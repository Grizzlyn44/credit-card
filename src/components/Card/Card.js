import React from "react";

import Logo from "./Logo";
import CardNumber from "./CardNumber";
import CardHolder from "./CardHolder";
import ExpDate from "./ExpDate";
import CCV from "./CCV";

const mockData = {
  cardNumber: "1234 1234 1234 8888",
  holderName: "Rajmo Nito",
  expData: "10/26",
  ccv: "666",
};

const Card = () => {
  const { holderName, expData, ccv } = mockData;

  const [cardNumber, setCardNumber] = React.useState("");

  return (
    <div className="card-container">
      <Logo />
      <CardNumber value={cardNumber} setCardNumber={setCardNumber} />
      <div className="card-details">
        <CardHolder value={holderName} />
        <ExpDate value={expData} />
        <CCV value={ccv} />
      </div>
    </div>
  );
};

export default Card;
