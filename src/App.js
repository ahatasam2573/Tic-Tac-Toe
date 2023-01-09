import Square from "./components/Square";
import './App.css';

function App() {
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
        <div className="games-ground">
          <Square id={0} className='border-RB' />
          <Square id={1} className='border-RB' />
          <Square id={2} className='border-B' />
          <Square id={3} className='border-RB' />
          <Square id={4} className='border-RB' />
          <Square id={5} className='border-B' />
          <Square id={6} className='border-R' />
          <Square id={7} className='border-R' />
          <Square id={8} />
        </div>
      </div>
    </div>
  );
}

export default App;
