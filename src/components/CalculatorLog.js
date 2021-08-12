import React from 'react'

function CalculatorLog({ logs }) {
    console.log(logs)
    return (
        <div>
            {
                logs.map((log, index) => <p key={index}>{log}</p>)
            }
        </div>
    )
}

export default CalculatorLog
