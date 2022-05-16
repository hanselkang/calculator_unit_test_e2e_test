import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should return 5 when add 1 to 4', () => {
    const button1 = container.getByTestId('number1');
    const buttonAdd = container.getByTestId('operator-add');
    const button4 = container.getByTestId('number4');
    const operatorEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(buttonAdd);
    fireEvent.click(button4);
    fireEvent.click(operatorEquals);
    expect(runningTotal.textContent).toEqual('5');
  })

  it('should return 3 when subtract 4 from 7', () => {
    const button7 = container.getByTestId('number7');
    const buttonSub = container.getByTestId('operator-subtract');
    const button4 = container.getByTestId('number4');
    const operatorEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(buttonSub);
    fireEvent.click(button4);
    fireEvent.click(operatorEquals);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should return 18 when multiply 3 by 6', () => {
    const button3 = container.getByTestId('number3');
    const buttonMulti = container.getByTestId('operator-multiply');
    const button5 = container.getByTestId('number5');
    const operatorEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(buttonMulti);
    fireEvent.click(button5);
    fireEvent.click(operatorEquals);
    expect(runningTotal.textContent).toEqual('15');
  })

  it('should return 3 when devide 21 by 7', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const buttonDivide = container.getByTestId('operator-divide');
    const operatorEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(buttonDivide);
    fireEvent.click(button7); 
    fireEvent.click(operatorEquals);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should concatenate multiple number button clicks', () => {
    const button4 = container.getByTestId('number4');
    const button5 = container.getByTestId('number5');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    fireEvent.click(button5);
    expect(runningTotal.textContent).toEqual('45');
  })

  it('should return 18 when chain multiple 3 * 2 * 5', () => {
    const button3 = container.getByTestId('number3');
    const buttonMulti = container.getByTestId('operator-multiply');
    const button2 = container.getByTestId('number2');
    const button5 = container.getByTestId('number5');
    const operatorEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(buttonMulti); 
    fireEvent.click(button2);
    fireEvent.click(buttonMulti); 
    fireEvent.click(button5);
    fireEvent.click(operatorEquals);
    expect(runningTotal.textContent).toEqual('30');
  })

  it('should clear the running total without affecting the calculation', () => {
    const button3 = container.getByTestId('number3');
    const buttonMulti = container.getByTestId('operator-multiply');
    const button2 = container.getByTestId('number2');
    const operatorEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(buttonMulti);
    fireEvent.click(button2);
    fireEvent.click(operatorEquals);
    fireEvent.click(clear); 
    expect(runningTotal.textContent).toEqual('0');
    fireEvent.click(buttonMulti);
    fireEvent.click(button2);
    fireEvent.click(operatorEquals);
    expect(runningTotal.textContent).toEqual('12');
  })

})

