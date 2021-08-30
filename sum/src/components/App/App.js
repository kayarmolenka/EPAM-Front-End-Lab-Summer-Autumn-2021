import {useState, useCallback } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Modal from '../Modal/Modal';
import SumRage from '../SumRage/SumRage';
import './App.css';

const App = () => {
  const [firstInput, setFirstInput] = useState(0);
  const [secondInput, setSecondInput] = useState(0);
  const [count, onSetCount] = useState(0);
  const [modalActive, setModalActive] = useState(false);
  const [bug, changeBug] = useState('good');
  const cache = {};

  const onChangeValue = useCallback((e) => {
    return (e.target.id === '1') ? setFirstInput(e.target.value) : setSecondInput(e.target.value)
  },[])   

  const onCalculateSumOfRange = useCallback((a, b) => {
    const high = Math.max(a, b);
    const low = Math.min(a, b);
   
    if(cache[`${a}-${b}`]) {
        return cache[[`${a}-${b}`]];
    } else {
        let res = high * (high + 1) / 2 - (low - 1) * (low) / 2;
        cache[`${a}-${b}`] = res;
        return res;
    }
  }, [cache])

  const omShowResult = () => {
    const newResult = onCalculateSumOfRange(firstInput, secondInput);

    if(newResult) {
      if(newResult > Number.MAX_SAFE_INTEGER) {
        setModalActive(true);
        changeBug('result is greater than MAX_SAFE_INTEGER');
      } else {
        onSetCount(count - count + newResult);
      } 
    } else {
      onSetCount(count);
      setModalActive(true);
      changeBug('argument is not a number');
    } 
  }

  return (
    <div className="wrapper">
      <h1>Set a range, click on the button and you will get the sum of the numbers in it.</h1>
      <Input value={firstInput} onChangeValue={onChangeValue} id='1'/>
      <Input value={secondInput} onChangeValue={onChangeValue} id='2'/>
      <Button onCalculateSumOfRange={omShowResult}/>
      <SumRage sum={count}/>
      <Modal active={modalActive} setModalActive={setModalActive} bug={bug}/>
    </div>
  );
};

export default App;
