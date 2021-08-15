import {useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import SumRage from '../SumRage/SumRage';
import './App.css';

const App = () => {
  const [firstInput, setFirstInput] = useState(0);
  const [secondInput, setSecondInput] = useState(0);
  const [count, onSetCount] = useState(0);

  const onChangeValue = e => (e.target.id === '1') ? setFirstInput(e.target.value) : setSecondInput(e.target.value);   

  const onCalculateSumOfRange = (a, b) => {
    const high = Math.max(a, b);
    const low = Math.min(a, b);

    return high * (high + 1) / 2 - (low - 1) * (low) / 2;
  }

  const omShowResult = () => {
    const newResult = onCalculateSumOfRange(firstInput, secondInput);
    
    onSetCount(count - count + newResult);
  }

  return (
    <div className="wrapper">
      <h1>Set a range, click on the button and you will get the sum of the numbers in it.</h1>
      <Input value={firstInput} onChangeValue={onChangeValue} id={'1'}/>
      <Input value={secondInput} onChangeValue={onChangeValue} id={'2'}/>
      <Button onCalculateSumOfRange={omShowResult}/>
      <SumRage sum={count}/>
    </div>
  );
};

export default App;
