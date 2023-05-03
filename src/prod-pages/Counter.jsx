import { useReducer } from "react";

const reducer = (state, action) => {
    return {
        ...state,
        count: state.count+1
    }
}

function Counter({initialCount}) {
    //const [count, changeCount] = useState(initialCount);
    //const [valueToAdd, setValueToAdd] = useState(0);
    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0
    })
    const incrementCount = () => {
       dispatch();
    }

    const decrementCount = () => {
        //changeCount(count - 1);
    }

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
        //setValueToAdd(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //changeCount(count + valueToAdd);
    }

    const reset = () => {
        
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
                <button className="buttonClass">Add it!</button>
                <button className="buttonClass" onClick={reset}>Reset</button>

            </form>
        </div>
    );
}

export default Counter;