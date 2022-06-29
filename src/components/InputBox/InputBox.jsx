import React from "react"

import styles from './InputBox.module.css'

function InputBox({ inputValue, setInputValue }) {

    function changeInptValue(e) {
        setInputValue(e.target.value)
    }

    return <>
        <input onChange={changeInptValue} value={ inputValue } className={styles.outputBox} type="text" />
    </>
}

export default InputBox