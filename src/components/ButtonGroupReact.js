import React from 'react'
import { ButtonGroup } from 'react-bootstrap'

function ButtonGroupReact({ label = '', styles, children }) {
    return (
        <React.Fragment>
            <ButtonGroup aria-label={label} style={styles}>
                {
                    children
                }
            </ButtonGroup>
        </React.Fragment>
    )
}

export default ButtonGroupReact
