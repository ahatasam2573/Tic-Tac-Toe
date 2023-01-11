import Square from "./components/Square";
import './App.css';
import { useState } from "react";

const initialGameGround = ["", "", "", "", "", "", "", "", ""];

function App() {

  const [groundState, setGroundState] = useState(initialGameGround);
  const [steps, setSteps] = useState(0);
  const onClickHandler = event => {
    const copyGameGround = [...groundState]
    if (!event.target.innerText) {
      copyGameGround[event.target.id] = steps % 2 === 0 ? 'X' : 'O';
      setSteps(steps + 1);
      setGroundState(copyGameGround);
    }
  }
  return (
    <div className="container">
      <div className="left-wrapper">
        <div className="left-text">
          Let's play the game
        </div>
        <div className="left-button">Start a New Game</div>
      </div>
      <div className="right-wrapper">
        <div className="players">
          <div className="player first-player">
            Player X
          </div>
          <div className="player second-player">
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
      </div>
    </div>
  );
}

export default App;
