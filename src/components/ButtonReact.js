import React from 'react'
import Button from 'react-bootstrap/Button'

function ButtonReact({ dispatch, text }) {
    return (
        <React.Fragment>
            <Button variant="outline-secondary" onClick={dispatch}>{text}</Button>{''}
        </React.Fragment>
    )
}

export default ButtonReact