import { useState } from "react";

const SelectOrType = (props) => {
  const [selectValue, setSelectValue] = useState("BMW");
  const [inputControl, setInputControl] = useState("none");
  const [inputValue, setInputValue] = useState("");
  const [customOption, setCustomOption] = useState("Other");

  function selectHandler(e) {
    setSelectValue(e.target.value);
    if (e.target.value === customOption) {
      setInputControl("block");
    } else {
      setInputControl("none");
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    setInputControl("none");
    setCustomOption(inputValue);
    setSelectValue(inputValue);
  }
  return (
    <form onSubmit={submitHandler}>
      <select value={selectValue} onChange={selectHandler}>
        {props.items.map((el) => (
          <option>{el}</option>
        ))}
        <option>{customOption}</option>
      </select>
      <div style={{ display: inputControl }}>
        <input
          type={"text"}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button type="submit">Custom Option</button>
      </div>
    </form>
  );
};

export default SelectOrType;
