import { FunctionComponent } from 'react';

interface FeedbackScreenProps {
  text: string;
  type: 'error' | 'success';
}

import styles from './FeedbackScreen.module.css';

const FeedbackScreen: FunctionComponent<FeedbackScreenProps> = ({
  text,
  type
}) => {
  return (
    <div className={`${styles.feedbackScreen} ${styles[type]}`}>{text}</div>
  );
};

export default FeedbackScreen;
