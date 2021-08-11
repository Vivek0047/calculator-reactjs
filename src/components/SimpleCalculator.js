import React, { useEffect, useReducer, useRef } from 'react'
import Button from './Button'
import { evaluate } from 'mathjs'
import '../main.css'
const initialState = {
    query: '',
    result: '',
    sign: '-'
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
            val = evaluate(state.result)
            return { ...state, query: '' + val }
        case '+/-':
            if (state.query === '' & state.sign === '-') {
                return { ...state, query: state.sign }
            }
            break;
        case 'reset':
            return initialState
        default:
            return state
    }

}

function SimpleCalculator() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const inputRef = useRef(null)

    useEffect(() => {
        console.log(state)
        inputRef.current.focus()
    }, [state.query])

    return (
        <div>
            <div>
                <input ref={inputRef} type="number" value={state.query} onKeyDown={e => { e.preventDefault() }} onChange={e => dispatch({ type: 'query', value: e.target.value })} />
            </div>
            <div>
                <Button dispatch={e => dispatch({ type: 'query', value: '7' })} text="7"></Button>
                <Button dispatch={e => dispatch({ type: 'query', value: '8' })} text="8"></Button>
                <Button dispatch={e => dispatch({ type: 'query', value: '9' })} text="9"></Button>
                <Button dispatch={() => dispatch({ type: 'x' })} text="x"></Button>
            </div>
            <div>
                <Button dispatch={e => dispatch({ type: 'query', value: '4' })} text="4"></Button>
                <Button dispatch={e => dispatch({ type: 'query', value: '5' })} text="5"></Button>
                <Button dispatch={e => dispatch({ type: 'query', value: '6' })} text="6"></Button>
                <Button dispatch={() => dispatch({ type: '-' })} text="-"></Button>
            </div>
            <div>
                <Button dispatch={e => dispatch({ type: 'query', value: '1' })} text="1"></Button>
                <Button dispatch={e => dispatch({ type: 'query', value: '2' })} text="2"></Button>
                <Button dispatch={e => dispatch({ type: 'query', value: '3' })} text="3"></Button>
                <Button dispatch={() => dispatch({ type: '+' })} text="+"></Button>
            </div>
            <div>
                <Button dispatch={e => dispatch({ type: '+/-', value: '+/-' })} text="+/-"></Button>
                <Button dispatch={e => dispatch({ type: 'query', value: '0' })} text="0"></Button>
                <Button dispatch={e => dispatch({ type: 'query', value: '.' })} text="."></Button>
                <Button dispatch={() => dispatch({ type: '=' })} text="="></Button>
            </div>
            <div>
                <Button dispatch={() => dispatch({ type: 'reset' })} text='AC'></Button>
            </div>
        </div>
    )
}

export default SimpleCalculator
