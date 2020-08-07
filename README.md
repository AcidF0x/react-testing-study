
DiceRoller.jsx
 - DiceBoard.jsx
 - ScoreBoard.jsx
 

 ScoreBoard 테스팅
 1. 렌더링 테스트
 2. props로 전달 받은 내용을 렌더링 한다
 
 DiceBoard 테스팅
 1. 렌더링 테스트
 2. 던지기를 클릭 했을때
  - Dice.Roll을 실행 한다.
  - 결과 값을 state에 저장 한다.
  - diceRolled 실행 한다.
  - 결과 값을 렌더링 한다
  
  DiceRoller 테스팅
  1. 렌더링 테스트
  2. updateTotalScore 테스트
    - 총점수가 100점 미만이면 총점수를 변경한다
    - 100점 이상 이면 점수를 0으로 만든다
    - 100점 이상 이면 alert 발생시킨다.
    