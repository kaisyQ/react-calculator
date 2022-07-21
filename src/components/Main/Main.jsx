import React from "react"
import { useState, useReducer } from "react"

import calculateRPN from "../../logic/calculator"
import polishNotation from "../../logic/polish-notation"

import logsReducer from "../../state/logs-reducer"
import { addLogAC } from "../../state/logs-reducer"

import styles from './Main.module.css'

import Board from "../Board/Board"
import InputBox from "../InputBox/InputBox"
import Logs from './../Logs/Logs'

function Main() {

    let [inputValue, setInputValue] = useState('')
    let [result, setResult] = useState(null)
    const [logs, dispatch] = useReducer(logsReducer, {logs: []});

    function equalityClick(inputValue) {
        const result = calculateRPN(polishNotation(inputValue))
        setResult(result)
        dispatch(addLogAC(`${inputValue}=${result}`))
        alert(`${inputValue}=${result}`)
        setInputValue('')
    }

    return <div className={styles.mainContainer}>
        <InputBox dispatch={dispatch} setResult={setResult} result={result} equalityClick={equalityClick} inputValue={inputValue} setInputValue={setInputValue} />
        <div className={styles.flexBlock}>
            <Board inputValue={inputValue} equalityClick={equalityClick} setInputValue={setInputValue} />
            <Logs logs={logs} dispatch={dispatch} />
        </div> 
    </div>
}

export default Main