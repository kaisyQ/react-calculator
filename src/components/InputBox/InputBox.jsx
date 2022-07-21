import React from "react"
import styles from './InputBox.module.css'

function InputBox({ equalityClick, inputValue, setInputValue, result, setResult }) {

    function changeInptValue(e) {
        setInputValue(e.target.value)
    }
    function onEqltClick(e) {
        equalityClick(inputValue)
    }
    function onClrAllBtn() {
        setResult(null)
    }
    return <div className={styles.inptBoxContainer}>
        <input onChange={changeInptValue} value={ inputValue } className={styles.outputBox} type="text" />
        <div className={styles.Eqlt} onClick={onEqltClick}>=</div>
        <div className={styles.Eqlt}>{result || '?'}</div>
        <button onClick={onClrAllBtn}>Clear all</button>
    </div>
}

export default InputBox