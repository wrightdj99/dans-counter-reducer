import { useState } from "react";

function Counter() {
    const [count, changeCount] = useState(0);

    const incrementCount = () => {
        changeCount(count + 1);
    }

    const decrementCount = () => {
        changeCount(count - 1);
    }

    return(
        <div>
            <h1>Hello, I'm the Counter!</h1>
            <h2>Count: {count}</h2>
            <button onClick={incrementCount} className="buttonClass">Add</button>
            <button onClick={decrementCount} className="buttonClass">Subtract</button>
        </div>
    );
}

export default Counter;