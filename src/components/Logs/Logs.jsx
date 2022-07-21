import React from "react"
import styles from './Logs.module.css'

import Log from './Log/Log'

function Logs({logs}) {
    return <div className={styles.logsContainer}>
        {   logs ?  
                <div>{logs.logs.map((log, index) => <Log key={index} log={log}/>)}</div> 
                : 
                <span>'here will be you logs'</span>
        } 
    </div>
}

export default Logs