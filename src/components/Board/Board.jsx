import React from "react"
import styles from './Board.module.css'

import BoardButton from "../BoardButton/BoardButton"

function Board(props) {
    const arrOfBoardBtns = [ [], [], [], [] ]
    const arrOfOperations = [ '=', '+', '-', '*', '/', ')', '(' ] 
    for (let i = 1, numbers = 1, index = 0, symbIndx = 0; i <= 16; ++i) {
        if (i % 4 === 0) {
            arrOfBoardBtns[index].push(<BoardButton {...props} value={arrOfOperations[symbIndx]} />)
            index++
            symbIndx++
        } else if (i > 11) {
            arrOfBoardBtns[index].push(<BoardButton {...props} value={arrOfOperations[symbIndx]} />)
            symbIndx++
        } else {
            arrOfBoardBtns[index].push(<BoardButton {...props} value={numbers} />)
            numbers++   
        }
    }
    return <div className={styles.boardContainer}>
        {arrOfBoardBtns.map(boardBtn => <div className="boardBtnLine">{ boardBtn }</div>)} 
    </div>
}

export default Board