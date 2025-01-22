import { useState } from "react";
const handleClick = (count, setCount, addAmount) => {
    setCount(count + addAmount);
};

function Counter1() {
    const [count, setCount] = useState(0);

    return (
        <div>
            Count: {count}
            <div>
                <button onClick={() => handleClick(count, setCount, 1)}>Add 1</button>
            </div>
        </div>
    );
}
function Counter2() {
    const [count, setCount] = useState(0);
    return (
        <div>
            Count: {count}
            <div>
                <button onClick={() => handleClick(count, setCount, 2)}>Add 2</button>
            </div>
        </div>
    );
}
export { Counter1, Counter2 };
