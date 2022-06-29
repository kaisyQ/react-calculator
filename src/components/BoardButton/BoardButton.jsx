import React from "react"
import styles from './BoardButton.module.css'

const EQUALITY = '='

function BoardButton({ value, setInputValue, equalityClick, inputValue }) {
    function handleClick(e) {
        if (e.target.innerText === EQUALITY) {
            equalityClick(inputValue)
        } else {
            setInputValue(inputValue + e.target.innerText)
        }
    }

    return <>
        <div onClick={handleClick} className={styles.item}>{ value }</div>
    </>
}

export default BoardButton