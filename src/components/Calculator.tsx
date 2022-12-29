import useCalculator from '../hooks/useCalculator';

import Screen from './Screen';
import Button from './Button';
import FeedbackScreen from './FeedbackScreen';

import styles from './Calculator.module.css';

const Calculator = () => {
  const [
    digits,
    operations,
    extraFunctions,
    equal,
    screenText,
    screenMessage,
    setEntry
  ] = useCalculator('');

  return (
    <div className={styles.calculator}>
      <FeedbackScreen text={screenMessage.text} type={screenMessage.type} />
      <Screen text={screenText} />
      <div className={styles.keys}>
        <Button text={digits[7]} changeFunction={setEntry} />
        <Button text={digits[8]} changeFunction={setEntry} />
        <Button text={digits[9]} changeFunction={setEntry} />
        <Button text={extraFunctions[0]} changeFunction={setEntry} />
        <Button text={extraFunctions[1]} changeFunction={setEntry} />
        <Button text={digits[4]} changeFunction={setEntry} />
        <Button text={digits[5]} changeFunction={setEntry} />
        <Button text={digits[6]} changeFunction={setEntry} />
        <Button text={operations[2]} changeFunction={setEntry} />
        <Button text={operations[3]} changeFunction={setEntry} />
        <Button text={digits[1]} changeFunction={setEntry} />
        <Button text={digits[2]} changeFunction={setEntry} />
        <Button text={digits[3]} changeFunction={setEntry} />
        <Button text={operations[0]} changeFunction={setEntry} />
        <Button text={operations[1]} changeFunction={setEntry} />
        <Button text={digits[0]} changeFunction={setEntry} />
        <Button text={digits[10]} changeFunction={setEntry} />
        <Button text={equal[0]} changeFunction={setEntry} />
      </div>
    </div>
  );
};

export default Calculator;
