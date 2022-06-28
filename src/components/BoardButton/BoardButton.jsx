import React from "react"
import styles from './BoardButton.module.css'

function BoardButton({ value, setOutputValue, outputValue }) {
    function handleClick(e) {
        setOutputValue(outputValue + e.target.innerText)
    }

    return <>
        <div onClick={handleClick} className={styles.item} >{ value }</div>
    </>
}

export default BoardButton