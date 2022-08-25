const CardHolder = (props) => {
  const value = props.value?.toUpperCase();
  return (
    <div className="card-holder clickable">
      <div className="heading">Card Holder</div>
      <div className="content">{value}</div>
    </div>
  );
};

export default CardHolder;
