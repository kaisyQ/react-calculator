import React from "react"
import styles from './Logs.module.css'

import Log from './Log/Log'

function Logs({arrOfLogs}) {
    return <div className={styles.logsContainer}>
        {'here will be you logs' || arrOfLogs.map((log, index) => <Log id={index} log={log}/>)} 
    </div>
}

export default Logs