import React from 'react';
import './Board.css';
import Box from '../Box/Box.js';

function Board({ board,onClick,id }) {
  return (
    <div className='Board'>
        {board.map((item,id) => (
            <Box value={item} key={id} onClick={()=>item===null && onClick(id)} />
        ))}
    </div>
  );
}

export default Board;
