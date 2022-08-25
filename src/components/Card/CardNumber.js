const CardNumber = (props) => {
  const value = props.value;
  // const html = value
  //   ?.split(" ")
  //   .map((e) => <span className="f-digit">{e}</span>);
  return (
    <div className="card-number">
      <div className="heading">Card Number</div>
      <div className="content">
        <span className="f-digit">{value}</span>
        {/* <span className="f-digit">1234</span>
        <span className="f-digit">1234</span>
        <span className="f-digit">1234</span>
        <span className="f-digit">1234</span> */}
      </div>
    </div>
  );
};

export default CardNumber;
