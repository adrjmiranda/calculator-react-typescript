import { FunctionComponent } from 'react';

import styles from './Screen.module.css';

interface ScreenProps {
  text: string;
}

const Screen: FunctionComponent<ScreenProps> = ({ text }) => {
  return <div className={styles.screen}>{text}</div>;
};

export default Screen;
