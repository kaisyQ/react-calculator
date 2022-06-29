import React from "react"

import styles from './OutputBox.module.css'

const WITHOUT_RES_STR = 'Here will be the result'
const WITH_RES_STR = 'The result is : '

function ResultSpanComponent({ result }) {
    if (result) {
        return <div>
            <span>{ WITH_RES_STR + result.toString() } </span>
        </div>
    } else {
        return <div>
           <span>{ WITHOUT_RES_STR }</span> 
        </div>
    }
}

function OutputBox({ result }) {
    return <>
        <div className={styles.outputBox}>
            <ResultSpanComponent result={result} /> 
            <button>Clear all</button> 
        </div>
    </>
}



export default OutputBox