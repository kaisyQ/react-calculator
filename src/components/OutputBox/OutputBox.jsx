import React from "react"
import styles from './OutputBox.module.css'

function OutputBox({ outputValue }) {
    return <>
        <input value={ outputValue } className={styles.outputBox} type="text" />
    </>
}

export default OutputBox