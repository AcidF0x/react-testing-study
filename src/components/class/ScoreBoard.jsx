import React from "react";

class ScoreBoard extends React.Component {
  render() {
    return (
      <div className="dice-score-board">
        <div className="text-center">
          <h3>총점수</h3>
          <div className="score">
            {this.props.totalScore}점
          </div>
        </div>
      </div>
    )
  }
}

export default ScoreBoard;