import React from "react"
import { useState } from "react"

import styles from './Main.module.css'

import Board from "../Board/Board"
import InputBox from "../InputBox/InputBox"
import OutputBox from "../OutputBox/OutputBox"

function Main() {

    let [inputValue, setInputValue] = useState('')
    let [result, setResult] = useState(null)

    function equalityClick(inputValue) {
        setResult(inputValue)
        setInputValue('')
    }

    return <div className={styles.mainContainer}>
        <InputBox inputValue={inputValue} setInputValue={setInputValue} />
        <div className={styles.flexBlock}>
            <Board inputValue={inputValue} equalityClick={equalityClick} setInputValue={setInputValue} />
            <OutputBox result={result}/>
        </div> 
    </div>
}

export default Main