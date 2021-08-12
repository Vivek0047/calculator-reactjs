import React, { useEffect, useReducer, useRef, useContext } from 'react'
import ButtonReact from './ButtonReact'
import ButtonGroupReact from './ButtonGroupReact'
import { evaluate } from 'mathjs'
import '../main.css'
import CalculatorLog from './CalculatorLog'

const initialState = {
    query: '',
    result: '',
    sign: '-',
    signClickCounter: 2,
    logs: []
}

const reducer = (state, action) => {
    let val = 0

    switch (action.type) {
        case 'query':
            if (state.result.includes('.') & action.value === '.') {
                return { ...state }
            }
            return { ...state, result: state.result + action.value, query: state.query + action.value }
        case '+':
            return { ...state, result: state.query + '+', query: '' }
        case '-':
            return { ...state, result: state.query + '-', query: '' }
        case 'x':
            return { ...state, result: state.query + '*', query: '' }
        case '=':
            let log = []
            val = evaluate(state.result)
            log.push(state.result)
            log.push('=' + val)
            return { ...state, query: '' + val, result: '', logs: state.logs.concat(log) }
        case '+/-':
            if ((state.query === '' || state.query === '-') & (state.signClickCounter % 2) !== 0) {
                return { ...state, query: '', signClickCounter: state.signClickCounter + 1 }
            } else if ((state.query === '' || state.query === '+') & (state.signClickCounter % 2) === 0) {
                return { ...state, query: '-', signClickCounter: state.signClickCounter + 1 }
            }
            else {
                return { ...state }
            }
        case 'reset':
            return initialState
        default:
            return state
    }

}

function SimpleCalculator() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const inputRef = useRef(null)

    useEffect((state) => {
        console.log(state)
        inputRef.current.focus()
    }, [state.query])

    return (
        <div className="row">
            <div className="col-md-6">
                <div style={{ padding: "20px" }}>
                    <div>
                        <input style={{ width: "72%" }} ref={inputRef} type="number" value={state.query} onKeyDown={e => { e.preventDefault() }} onChange={e => dispatch({ type: 'query', value: e.target.value })} />
                    </div>
                    <div style={{ padding: "15px" }}>
                        <div>
                            <ButtonGroupReact label="top-numbers" styles={{ width: "75%", marginBottom: "5px" }}>
                                <ButtonReact dispatch={e => dispatch({ type: 'query', value: '7' })} text="7"></ButtonReact>
                                <ButtonReact dispatch={e => dispatch({ type: 'query', value: '8' })} text="8"></ButtonReact>
                                <ButtonReact dispatch={e => dispatch({ type: 'query', value: '9' })} text="9"></ButtonReact>
                                <ButtonReact dispatch={() => dispatch({ type: 'x' })} text="x"></ButtonReact>
                            </ButtonGroupReact>
                        </div>
                        <div>
                            <ButtonGroupReact label="top-numbers" styles={{ width: "75%", marginBottom: "5px" }}>
                                <ButtonReact dispatch={e => dispatch({ type: 'query', value: '4' })} text="4"></ButtonReact>
                                <ButtonReact dispatch={e => dispatch({ type: 'query', value: '5' })} text="5"></ButtonReact>
                                <ButtonReact dispatch={e => dispatch({ type: 'query', value: '6' })} text="6"></ButtonReact>
                                <ButtonReact dispatch={() => dispatch({ type: '-' })} text="-"></ButtonReact>
                            </ButtonGroupReact>
                        </div>
                        <div>
                            <ButtonGroupReact label="top-numbers" styles={{ width: "75%", marginBottom: "5px" }}>
                                <ButtonReact dispatch={e => dispatch({ type: 'query', value: '1' })} text="1"></ButtonReact>
                                <ButtonReact dispatch={e => dispatch({ type: 'query', value: '2' })} text="2"></ButtonReact>
                                <ButtonReact dispatch={e => dispatch({ type: 'query', value: '3' })} text="3"></ButtonReact>
                                <ButtonReact dispatch={() => dispatch({ type: '+' })} text="+"></ButtonReact>
                            </ButtonGroupReact>
                        </div>
                        <div>
                            <ButtonGroupReact label="top-numbers" styles={{ width: "75%", marginBottom: "5px" }}>
                                <ButtonReact dispatch={e => dispatch({ type: '+/-', value: '+/-' })} text="+/-"></ButtonReact>
                                <ButtonReact dispatch={e => dispatch({ type: 'query', value: '0' })} text="0"></ButtonReact>
                                <ButtonReact dispatch={e => dispatch({ type: 'query', value: '.' })} text="."></ButtonReact>
                                <ButtonReact dispatch={() => dispatch({ type: '=' })} text="="></ButtonReact>
                            </ButtonGroupReact>
                        </div>
                        <div>
                            <ButtonReact dispatch={() => dispatch({ type: 'reset' })} text='AC'></ButtonReact>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <CalculatorLog logs={state.logs} />
            </div>
        </div>
    )
}

export default SimpleCalculator
