import Board from './components/Board/Board.js'
import './App.css';
import { useState } from 'react';
import ScoreBoard from './components/ScoreBoard/ScoreBoard.js';
function App() {
  const [board,setBoard]=useState(Array(9).fill(null));
  const [XisPlaying,setXisPlaying]=useState(true)
  const [xScore,setxScore]=useState(0)
  const [yScore,setyScore]=useState(0)
  const [tie, setTie] = useState(0);
  const [gameover,setGameover]=useState(false);
  const WIN_CONDITIONS = [
    // Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonals
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  const HanleBoxClick=(Boxid)=>{
    const updateBoard=board.map((value,id)=>{
      if(Boxid===id)
      {
        return XisPlaying===true ?'X' :'O';
      }
      else{
        return value;
      }
    })
    console.log(updateBoard[0])
    setXisPlaying(!XisPlaying)
    setBoard(updateBoard);
   const winner= checkWinner(updateBoard)
   if(winner==="X")
   {
    setxScore(xScore+1);
    setGameover(true)
   }
   else if(winner==="O"){
    setyScore(yScore+1);
    setGameover(true)
   }
   let filled=true;
   updateBoard.map((item)=>{
    if(item===null){
      filled=false
    }
   })
   if (filled && winner !== "X" && winner !== "O") {
    filled = true;
    setTie(tie + 1);
    alert("Your match is drawn.")
    reset();
    return filled;
  }
  }
  const checkWinner = (updateBoard) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];
      if (updateBoard[x] && updateBoard[x] === updateBoard[y] && updateBoard[y] === updateBoard[z]) {
         console.log("Winner");
        return updateBoard[x]; // Returns 'X' or 'O' if a player wins
      }
    }
    return null; // Returns null if there is no winner yet
  }
  const reset=()=>{
    setGameover(false)
    setBoard(Array(9).fill(null));
  }
  const restartGame=()=>{
    setGameover(false)
    setBoard(Array(9).fill(null));
    setxScore(0)
    setyScore(0)
  }
  return (
    <div className="App">
      <ScoreBoard xScore={xScore} yScore={yScore} tie={tie}/>
      <Board board={board} onClick={ gameover===true ? reset : HanleBoxClick}/> 
       <button className='btn' onClick={restartGame}>restartGame</button>
    </div>
  );
}

export default App;
