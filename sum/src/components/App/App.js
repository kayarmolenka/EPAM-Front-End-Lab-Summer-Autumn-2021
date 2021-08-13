import {useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './App.css';

const App = () => {
  const [inputList, setInputList] = useState([]);

  const onAddField = () => {
    setInputList(inputList.concat(<Input key={inputList.length} onReceiveValue={onReceiveValue}/>))
  }

  const onReceiveValue = e => {
    sum(e.target)
  }

  return (
    <div>
      <Button onAddField={onAddField}/>
      {inputList}
    </div>
  );
};

export default App;

function sum(...arr) {

  console.dir(...arr)
}