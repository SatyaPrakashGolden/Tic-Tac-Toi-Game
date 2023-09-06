import React from 'react'
import '../Box/Box.css';
function Box({ value, id, onClick }) {
    return (
        <>
            <button className={`box Box ${value === 'X' ? 'x' : 'o'}`} key={id} onClick={onClick}>
                {value}
            </button>

        </>
    )
}

export default Box