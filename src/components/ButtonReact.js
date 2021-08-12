import React from 'react'
import Button from 'react-bootstrap/Button'

function ButtonReact({ dispatch, text, children }) {
    return (
        <React.Fragment>
            <Button variant="outline-secondary" onClick={dispatch}>{text}{children}</Button>{''}
        </React.Fragment>
    )
}

export default ButtonReact