import React from "react";
import Dice from "../../services/Dice";

class DiceRoller extends React.Component {
  state = {
    currentDice: null
  }

  rollDice = () => {
    const currentNumber = Dice.roll();
    this.setState({
      currentDice: currentNumber
    })
    this.props.diceRolled(currentNumber)
  }

  render() {
    return (
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
          <button onClick={this.rollDice}>던지기</button>
        </div>
      </div>
    )
  }
}

export default DiceRoller;
