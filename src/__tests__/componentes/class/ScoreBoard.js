import React from "react";
import ScoreBoard from "../../../components/class/ScoreBoard";
import { mount } from "enzyme";


describe('ScoreBoard 테스트', () => {
  it('렌더링을 할수있다', () => {
    // Given
    // When
    const wrapper = mount(<ScoreBoard/>);

    // Then
    expect(wrapper.text()).toContain('총점수')
  });
  it('스냅샷 테스트', () => {
    // Given
    const totalScore = 90;

    // When
    const wrapper = mount(<ScoreBoard totalScore={totalScore}/>);

    // Then
    expect(wrapper).toMatchSnapshot()
  });

  it('props로 전달 받은 내용을 렌더링 한다', () => {
    // Given
    const totalScore = 200;

    // When
    const wrapper = mount(<ScoreBoard totalScore={totalScore}/>);

    // Then
    const score = wrapper.find('.score')
    expect(score.text()).toBe(`${totalScore}점`)
  });
});
