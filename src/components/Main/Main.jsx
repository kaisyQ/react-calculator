import React from "react"
import { useState } from "react"

import styles from './Main.module.css'

import Board from "../Board/Board"
import OutputBox from "../OutputBox/OutputBox"

function Main() {

    let [outputValue, setOutputValue] = useState('')
    return <div className={styles.mainContainer}>
        <OutputBox outputValue={outputValue}/> 
        <Board outputValue={outputValue} setOutputValue={setOutputValue} />
    </div>
}

export default Main