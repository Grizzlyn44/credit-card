const CCV = (props) => {
  const value = props.value;
  return (
    <div className="ccv clickable">
      <div className="heading">CCV</div>
      <div className="content">{value}</div>
    </div>
  );
};

export default CCV;
