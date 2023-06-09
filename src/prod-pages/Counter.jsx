import { useReducer } from "react";

const reducer = (state, action) => {
    switch(action.type){
        case 'increment':
            return{
                ...state,
                count: state.count + 1
            };
        case 'decrement':
            return{
                ...state,
                count: state.count - 1
            };
        case 'reset':
            return{
                ...state,
                count: 0,
                valueToAdd: 0
            };
        case 'change-value-to-add':
            return{
                ...state,
                valueToAdd: action.payload
            };
        case 'alter-adding-num':
            return{
                ...state,
                count: state.count + action.payload
            };
        default:
            return state;
    }
}

function Counter({initialCount}) {
    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0
    })
    const incrementCount = () => {
       dispatch({
            type: 'increment',

       });
    }

    const decrementCount = () => {
        dispatch({
            type: 'decrement',
        });
    }

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
        dispatch({
            type: 'change-value-to-add',
            payload: value
        });
    }

    const handleSubmit = (event) => {
        const value = state.valueToAdd;
        event.preventDefault();
        dispatch({
            type: 'alter-adding-num',
            payload: value
        });
    }

    const reset = () => {
        dispatch({
            type: 'reset'
        });
    }

    return(
        <div>
            <h1>Hello, I'm the Counter!</h1>
            <h2>Count: {state.count}</h2>
            <button onClick={incrementCount} className="buttonClass">Add</button>
            <button onClick={decrementCount} className="buttonClass">Subtract</button>
            <form onSubmit={handleSubmit} className="App">
                <h2>Add a lot!</h2><br/>
                <input type="number" value={state.valueToAdd || ""} onChange={handleChange} className="inputClass"></input><br/><br/>
                <button className="buttonClass" onClick={handleSubmit}>Add it!</button>
                <button className="buttonClass" onClick={reset}>Reset</button>

            </form>
        </div>
    );
}

export default Counter;