import Square from "./components/Square";
import './App.css';
import { useState } from "react";
import { useEffect } from "react";


function App() {

  const [groundState, setGroundState] = useState('');
  const [steps, setSteps] = useState(0);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    winnerChecking(groundState)
  }, [groundState])

  const onClickHandler = event => {
    const copyGameGround = [...groundState]
    if (!event.target.innerText) {
      copyGameGround[event.target.id] = steps % 2 === 0 ? 'X' : 'O';
      setSteps(steps + 1);
      setGroundState(copyGameGround);
    }
  }

  const restartGame = () => {
    setGroundState('');
    setSteps(0);
    setWinner(null);
  }

  const winnerChecking = (groundState) => {
    const winningConditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],
    ]

    winningConditions.forEach(condition => {
      const [a, b, c] = condition;

      if (groundState[a] && groundState[a] === groundState[b] && groundState[a] === groundState[c]) {
        setWinner(groundState[a]);
        // console.log(groundState[a]);
      }
    })
  }


  return (
    <div className="container">
      <div className="left-wrapper">
        <div className="left-text">
          Let's play the game
        </div>
        <div className="left-button" onClick={restartGame}>Start a New Game</div>
      </div>
      {
        !winner && steps < 9 && (<div className="right-wrapper">
          <div className="players">
            <div className={`player ${steps % 2 === 0 && "first-player"}`}>
              Player X
            </div>
            <div className={`player ${steps % 2 === 1 && "second-player"}`}>
              Player O
            </div>
          </div>
          <div className="games-ground" onClick={onClickHandler}>
            <Square id={0} className='border-RB' state={groundState[0]} />
            <Square id={1} className='border-RB' state={groundState[1]} />
            <Square id={2} className='border-B' state={groundState[2]} />
            <Square id={3} className='border-RB' state={groundState[3]} />
            <Square id={4} className='border-RB' state={groundState[4]} />
            <Square id={5} className='border-B' state={groundState[5]} />
            <Square id={6} className='border-R' state={groundState[6]} />
            <Square id={7} className='border-R' state={groundState[7]} />
            <Square id={8} state={groundState[8]} />
          </div>
        </div>)
      }
      {
        (winner || steps === 9) && (
          <div className="winner-wrapper">
            <img src={require('./img/win.jpg')} height={200} width={200} alt="" />
            <div className="winner-text">
              {steps === 9 && !winner ? 'Its a Draw' : `${winner} Wins!!`}
            </div>
          </div>)
      }
    </div>
  );
}

export default App;
