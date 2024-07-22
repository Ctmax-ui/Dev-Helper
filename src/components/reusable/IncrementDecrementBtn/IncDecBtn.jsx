const IncDecBtn = ({ value, onIncrement, onDecrement, textLable }) => {
    return (
      <div className="inc-dec-btn">
        <input type="button" value={"+"} onClick={onIncrement} />
        <label>{value} {textLable}</label>
        <input type="button" value={"-"} onClick={onDecrement} />
      </div>
    );
  };
  
  export default IncDecBtn;