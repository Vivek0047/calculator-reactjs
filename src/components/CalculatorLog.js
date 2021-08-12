import React from 'react'

function CalculatorLog({ logs, styles = null, classes = null }) {
    console.log(logs)
    return (
        <div className={classes ? classes : "col-md-6"} style={styles ? styles : {}}>
            {
                logs.map((log, index) => <p key={index}>{log}</p>)
            }
        </div>
    )
}

export default CalculatorLog
