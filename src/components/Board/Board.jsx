import React from "react"
import styles from './Board.module.css'

import BoardButton from "../BoardButton/BoardButton"

function Board(props) {
    const arrOfBoardBtns = [ [], [], [] ]
    for (let i = 1, j = 0, index = 0; i <= 9; ++i, ++j) {
        arrOfBoardBtns[index].push( <BoardButton {...props} value={i} />)   
        if (i % 3 === 0) {
            index++
        }
    }
    return <div className={styles.boardContainer}>
        {arrOfBoardBtns.map(boardBtn => <div className="boardBtnLine">{ boardBtn }</div>)} 
    </div>
}

export default Board