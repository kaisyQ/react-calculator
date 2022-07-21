import React from "react"
import styles from './Log.module.css'

function Log({log}) {
    return <div className={styles.log}>{log}</div>
}

export default Log