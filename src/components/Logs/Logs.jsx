import React from "react"
import styles from './Logs.module.css'

import Log from './Log/Log'

function Logs({ logs }) {
    function onClPntdLogs(e) {

    }
    console.log(logs)
    return <>
        <div className={styles.logsContainer}>
            {   logs.length !== 0 ?  
                    <div>{logs.map((log, index) => <Log key={index} log={log}/>)}</div> 
                    : 
                    <span>here will be your logs</span>
            }
        </div>
        <button onClick={onClPntdLogs}>
            Clear pointed logs
        </button>
    </>
}

export default Logs