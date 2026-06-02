import { userState, useState} from "react"

function Counter() {
    const [count, setCount] = useState(0)

    const  increase =  () => {
        setCount(count+1 )
    }
    const  decrease =  () => {
        setCount(count-1 )

    
    } 
    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick={increase}>Click</button>
            <button onClick={decrease}>Click</button>
        </div>
    )
}

export default Counter