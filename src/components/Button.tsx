import { FunctionComponent } from 'react';

import styles from './Button.module.css';

interface ButtonProps {
  text: string;
  changeFunction: (text: string) => void;
}

const Button: FunctionComponent<ButtonProps> = ({ text, changeFunction }) => {
  return (
    <button
      onClick={() => changeFunction(text)}
      className={styles.btn}
      style={text === '0' || text === '=' ? { gridColumn: 'span 2' } : {}}
    >
      {text}
    </button>
  );
};

export default Button;
