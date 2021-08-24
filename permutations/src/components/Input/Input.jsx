function Input({ valueInput, setInputValue, onChangeValue }) {
    return (
      <input
        className="fieldInput"
        type="text"
        placeholder="Enter the string"
        onChange={onChangeValue}
        value={valueInput}
      />
    );
  }
  
  export default Input;