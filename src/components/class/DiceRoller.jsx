import React from "react";
import Dice from "../../services/Dice";

class DiceRoller extends React.Component {
  state = {
    totalScore: 0,
    currentDice: null
  }
  resetGame = () => {
    this.setState({
      totalScore: 0,
      currentDice: null
    })
  }
  rollDice = () => {
    const currentNumber = Dice.roll()
    this.setState({
      totalScore: this.state.totalScore + currentNumber,
      currentDice: currentNumber
    })

    if (this.state.totalScore > 100) {
      this.resetGame()
      alert('100점이 넘어 게임이 초기화 됩니다')
    }
  }
  render() {
    return (
      <>
        <h1 className="text-center">주사위 던지기</h1>
        <div className="dice-warp">
          <div className="dice-score-board">
            <div className="text-center">
              <h3>총점수</h3>
              <div className="score">
                { this.state.totalScore }
              </div>
            </div>
          </div>
          <div className="dice-right-panel">
            <div className="dice-result">
              {
                this.state.currentDice !== null &&
                <h4>
                  { this.state.currentDice }이/가 나왔습니다 !!
                </h4>
              }
            </div>
            <div className="dice-desc">
              <button onClick={ this.rollDice }>던지기</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default DiceRoller;