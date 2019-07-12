import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  switch (operation) {
    case '+':
      return Big(numberOne).plus(numberTwo).toString();
    case '-':
      return Big(numberOne).minus(numberTwo).toString();
    case 'x':
      return Big(numberOne).times(numberTwo).toString();
    case '÷':
      return Big(numberOne).div(numberTwo).toString();
    case '%':
      return Big(numberOne).mod(numberTwo).toString();
    default:
      return 0;
  }
}
