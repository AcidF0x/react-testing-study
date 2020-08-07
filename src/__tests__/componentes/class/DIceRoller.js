import React from "react";
import { shallow } from "enzyme";
import DiceRoller from "../../../components/class/DiceRoller";

describe('ScoreBoard 테스트', () => {
  it('스냅샷 테스트', () => {
    // Given

    // When
    const wrapper = shallow(<DiceRoller/>);

    // Then
    expect(wrapper).toMatchSnapshot()
  });
  it('총점수가 100점 미만이면 총점수를 변경한다', () => {
    // Given
    const number = 40
    const wrapper = shallow(<DiceRoller/>);

    // When
    wrapper.instance().updateTotalScore(number)

    // Then
    expect(wrapper.state().totalScore).toBe(number)
  });

  it('총점수가 100점 이상 이면 점수를 0으로 만든다', () => {
    // Given
    const number = 100
    const wrapper = shallow(<DiceRoller/>);

    // When
    wrapper.instance().updateTotalScore(number)

    // Then
    expect(wrapper.state().totalScore).toBe(0)
  });

  it('총점수가 100점 이상 이면 점수를 0으로 만든다', () => {
    // Given
    window.alert = jest.fn();
    const number = 100
    const wrapper = shallow(<DiceRoller/>);

    // When
    wrapper.instance().updateTotalScore(number)

    // Then
    expect(window.alert).toHaveBeenCalledWith('100점이 넘어 게임이 초기화 됩니다')
  });
});
