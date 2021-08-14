import {useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './App.css';

const App = () => {
  const [firstInput, setFirstInput] = useState(0);
  const [secondInput, setSecondInput] = useState(0);

  const onChangeValue = e => (e.target.id === '1') ? setFirstInput(e.target.value) : setSecondInput(e.target.value);   
  
  // const onCalculateSumOfRange = (a, b) => {
  //   let sumOfRange = 0;

  //   if(a < b) {
  //     for(let i = a; i <= b; i++) {
  //       sumOfRange += Number(i);
  //     }
  //   } else if(a > b) {
  //       for(let i = b; i <= a; i++) {
  //         sumOfRange += Number(i);
  //       }
  //   }
    
  //   return sumOfRange;
    
  // }

  const onCalculateSumOfRange = (a, b) => {
    const high = Math.max(a, b);
    const low = Math.min(a, b);

    return high * (high + 1) / 2 - (low - 1) * (low) / 2;
  }

  
  return (
    <div>
      <Input value={firstInput} onChangeValue={onChangeValue} id={'1'}/>
      <Input value={secondInput} onChangeValue={onChangeValue} id={'2'}/>
      <Button onCalculateSumOfRange={() => {console.log(onCalculateSumOfRange(firstInput, secondInput))}}/>
    </div>
  );
};

export default App;
