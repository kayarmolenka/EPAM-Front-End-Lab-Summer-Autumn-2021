import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Modal from "../Modal/Modal";
import permutations from "../../permutations";
import "./App.css";

function App() {
  const [valueInput, setInputValue] = useState("");
  const [active, setActive] = useState(false);
  const [contentModal, setContentModal] = useState("");

  const onStartProgram = () => {
    setActive(true);
  
    const receivedData = permutations(valueInput).map((el, ind) => {
      return (
        <ul>
          <li key={ind}>{el}</li>
        </ul>
      );
    });

    setContentModal(receivedData);
  };

  const onChangeValue = (e) => setInputValue(e.target.value);

  return (
    <div className="App">
      <h1>Enter the string in the field below, then press the button and you will get all possible combinations of the string.</h1>
      <Input
        valueInput={valueInput}
        onChangeValue={onChangeValue}
        setActive={setActive}
      />
      <Button onStartProgram={onStartProgram} />
      <Modal
        active={active}
        contentModal={contentModal}
        setActive={setActive}
        setInputValue={setInputValue}
      />
    </div>
  );
}

export default App;