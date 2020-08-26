import React from "react";
import DiceBoard from "../../../components/functional/DiceBoard";
import { mount } from "enzyme";
import Dice from "../../../services/Dice";

jest.mock('../../../services/Dice');

describe('DiceBoard 테스트', () => {
  it('렌더링을 할수있다', () => {
    // Given
    // When
    const wrapper = mount(<DiceBoard/>);

    // Then
    expect(wrapper).toMatchSnapshot();
  });

  it('Dice.Roll을 실행 한다.', () => {
    // Given
    const diceRolled = jest.fn();
    const wrapper = mount(<DiceBoard diceRolled={diceRolled}/>);
    const button = wrapper.find('button')

    // When
    button.simulate('click')

    // Then
    expect(Dice.roll).toHaveBeenCalled()
  });

  it('결과 값을 렌더링 한다', () => {
    // Given
    const mockDiceNumber = 2;
    Dice.roll.mockReturnValueOnce(mockDiceNumber);

    const diceRolled = jest.fn();
    const wrapper = mount(<DiceBoard diceRolled={diceRolled}/>);
    const button = wrapper.find('button')

    // When
    button.simulate('click')

    // Then
    const result = wrapper.find('h4')

    expect(result.text()).toBe(mockDiceNumber + '이/가 나왔습니다 !!')
  })

  it('diceRolled를 실행한다', () => {
    // Given
    const mockDiceNumber = 2;
    Dice.roll.mockReturnValueOnce(mockDiceNumber);
    const diceRolled = jest.fn();
    const wrapper = mount(<DiceBoard diceRolled={diceRolled}/>);
    const button = wrapper.find('button')

    // When
    button.simulate('click')

    // Then
    expect(diceRolled).toHaveBeenCalledWith(mockDiceNumber)
  })
});