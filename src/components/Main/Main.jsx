import React from "react"
import { useState } from "react"

import calculateRPN from "../../logic/calculator"
import polishNotation from "../../logic/polish-notation"

import styles from './Main.module.css'

import Board from "../Board/Board"
import InputBox from "../InputBox/InputBox"
import Logs from './../Logs/Logs'

function Main() {

    let [inputValue, setInputValue] = useState('')
    let [result, setResult] = useState(null)

    function equalityClick(inputValue) {
        setResult(calculateRPN(polishNotation(inputValue)))
        setInputValue('')
    }

    return <div className={styles.mainContainer}>
        <InputBox setResult={setResult} result={result} equalityClick={equalityClick} inputValue={inputValue} setInputValue={setInputValue} />
        <div className={styles.flexBlock}>
            <Board inputValue={inputValue} equalityClick={equalityClick} setInputValue={setInputValue} />
            <Logs />
        </div> 
    </div>
}

export default Main