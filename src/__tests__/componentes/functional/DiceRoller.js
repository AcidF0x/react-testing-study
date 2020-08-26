import React from "react";
import DiceRoller from "../../../components/functional/DiceRoller";
import { shallow } from "enzyme";
import Dice from "../../../services/Dice";
import DiceBoard from "../../../components/functional/DiceBoard";
window.alert = jest.fn();

describe('DiceRoller 테스트', () => {
  it('렌더링 테스트', () => {
    // Given

    // When
    const wrapper = shallow(<DiceRoller/>);

    // Then
    expect(wrapper).toMatchSnapshot();
  })
  it('총점수가 100점 미만이면 총점수를 변경한다', () => {
    // Given
    const mockDiceNumber = 5;
    const wrapper = shallow(<DiceRoller/>);
    const diceBoard = wrapper.find('DiceBoard')

    // When
    diceBoard.prop('diceRolled')(mockDiceNumber)

    // Then
    const scoreBoard = wrapper.find('ScoreBoard')
    expect(scoreBoard.props().totalScore).toBe(mockDiceNumber)
  })
  it('100점 이상 이면 점수를 0으로 만든다', () => {
    // Given
    const mockDiceNumber = 100;
    const wrapper = shallow(<DiceRoller/>);
    const diceBoard = wrapper.find('DiceBoard')

    // When
    diceBoard.prop('diceRolled')(mockDiceNumber)

    // Then
    const scoreBoard = wrapper.find('ScoreBoard')
    expect(scoreBoard.props().totalScore).toBe(0)
  })
  it('100점 이상 이면 alert 발생시킨다.', () => {
    // Given
    const mockDiceNumber = 100;
    const wrapper = shallow(<DiceRoller/>);
    const diceBoard = wrapper.find('DiceBoard');

    // When
    diceBoard.prop('diceRolled')(mockDiceNumber);

    // Then
    expect(window.alert).toHaveBeenCalledWith('100점이 넘어 게임이 초기화 됩니다');
  })
});