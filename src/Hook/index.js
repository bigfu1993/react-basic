import { useState } from 'react'
import useToggle from './useToggle'

function Hook() {
    // const [flag, setFlag] = useState(true)
    // function handleToggle() {
    //     setFlag(!flag)
    // }
    // const { flag, handleToggle } = useToggle()
    const [flag, handleToggle] = useToggle()
    return (
        <div>
            <button onClick={() => handleToggle()}>toggle</button>
            {flag && <div>view</div>}
        </div>
    )
}
export default Hook