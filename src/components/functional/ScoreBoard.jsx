import React from "react";

const ScoreBoard = ({totalScore}) => {
  return (
    <div className="dice-score-board">
      <div className="text-center">
        <h3>총점수</h3>
        <div className="score">
          { totalScore }점
        </div>
      </div>
    </div>
  )
}

export default ScoreBoard;