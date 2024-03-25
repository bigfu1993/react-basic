import { useState } from 'react'
import './index.css'
function Button() {
    const [count, setCount] = useState(0)
    return <button className="foo" onClick={() => setCount(count + 1)}>count:{count}</button>
}
export default Button