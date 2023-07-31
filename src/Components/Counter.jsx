import React, { useState } from 'react'

export default function Counter() {

    const [count,setCount] = useState(0)
    const increaseVal = () => setCount(count + 1)
    const decreaseVal = () => setCount(count - 1)


    return (
        <>
            <div className="container text-center">
                <h1 className="">{count}</h1>
                <div>
                    <button className="btn btn-dark mx-2" onClick={decreaseVal}>-</button>
                    <button className="btn btn-dark mx-2" onClick={increaseVal}>+</button>
                </div>
            </div>
        </>
    )
}
