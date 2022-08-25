const ExpDate = (props) => {
  const value = props.value;
  return (
    <div className="exp-date">
      <div className="heading">Exp. Date</div>
      <div className="content">{value}</div>
    </div>
  );
};

export default ExpDate;
