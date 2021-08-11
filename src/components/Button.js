import React from 'react'

function Button({ dispatch, text }) {
    return (
        <React.Fragment>
            <button className="button" onClick={dispatch}>{text}</button>
        </React.Fragment>
    )
}

export default Button