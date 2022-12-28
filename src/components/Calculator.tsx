import { useEffect, useState } from 'react';

import Screen from './Screen';
import Button from './Button';

import styles from './Calculator.module.css';

const Calculator = () => {
  const [inputBtn, setInputBtn] = useState<string[]>([]);
  const [numericExpression, setNumericExpression] = useState<string>('');

  const inputSet = (text: string): void => {
    // setInputBtn([...inputBtn, text]);
    // setNumericExpression((previousValue) => inputBtn.join(''));
  };

  useEffect(() => {}, [inputBtn, numericExpression]);

  return (
    <div className={styles.calculator}>
      <Screen text={numericExpression} />
      <div className={styles.keys}>
        <Button text="7" changeFunction={inputSet} />
        <Button text="8" changeFunction={inputSet} />
        <Button text="9" changeFunction={inputSet} />
        <Button text="CE" changeFunction={inputSet} />
        <Button text="C" changeFunction={inputSet} />
        <Button text="4" changeFunction={inputSet} />
        <Button text="5" changeFunction={inputSet} />
        <Button text="6" changeFunction={inputSet} />
        <Button text="*" changeFunction={inputSet} />
        <Button text="/" changeFunction={inputSet} />
        <Button text="1" changeFunction={inputSet} />
        <Button text="2" changeFunction={inputSet} />
        <Button text="3" changeFunction={inputSet} />
        <Button text="+" changeFunction={inputSet} />
        <Button text="-" changeFunction={inputSet} />
        <Button text="0" changeFunction={inputSet} />
        <Button text="." changeFunction={inputSet} />
        <Button text="=" changeFunction={inputSet} />
      </div>
    </div>
  );
};

export default Calculator;
