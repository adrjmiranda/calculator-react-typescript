import { useState } from 'react';

import { message } from '../types/message';

export default function useCalculator(
  entry: string
): [
  string[],
  string[],
  string[],
  string[],
  string,
  message,
  (entry: string) => void
] {
  const [screenText, setScreenText] = useState<string>('');
  const [screenMessage, setScreenMessage] = useState<message>({
    text: '',
    type: 'success'
  });

  const digits: string[] = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '.'
  ];
  const operations: string[] = ['+', '-', '*', '/'];
  const extraFunctions: string[] = ['CE', 'C'];
  const equal: string[] = ['='];

  const isDigit = (text: string): boolean => {
    if (digits.includes(text)) {
      return true;
    }

    return false;
  };

  const isOperation = (text: string): boolean => {
    if (operations.includes(text)) {
      return true;
    }

    return false;
  };

  const isExtraFunction = (text: string): boolean => {
    if (extraFunctions.includes(text)) {
      return true;
    }

    return false;
  };

  const isEqual = (text: string): boolean => {
    if (equal.includes(text)) {
      return true;
    }

    return false;
  };

  const setEntry = (entry: string): void => {
    if (isDigit(entry) || isOperation(entry)) {
      setScreenText((prevState) => prevState + entry);
    } else {
      applyExtraFunction(entry);
      if (isEqual(entry)) {
        solveExpression(screenText);
      }
    }
  };

  const applyExtraFunction = (entry: string): void => {
    switch (entry) {
      case extraFunctions[0]:
        setScreenText((prevState) => prevState.slice(0, -1));
        break;
      case extraFunctions[1]:
        setScreenText('');
        break;
    }

    setScreenMessage({
      ...screenMessage,
      text: ''
    });
  };

  const solveExpression = (expression: string): void => {
    try {
      const result: number = eval(expression);
      setScreenText(result.toString());
      setScreenMessage({
        ...screenMessage,
        text: 'Solved',
        type: 'success'
      });
    } catch (error) {
      setScreenMessage({
        ...screenMessage,
        text: 'SyntaxError',
        type: 'error'
      });
    }
  };

  return [
    digits,
    operations,
    extraFunctions,
    equal,
    screenText,
    screenMessage,
    setEntry
  ];
}
