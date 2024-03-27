import { useState } from 'react'
export default function useToggle() {
    const [flag, setFlag] = useState(true)
    function handleToggle() {
        setFlag(!flag)
    }
    // return { flag, handleToggle }
    return [flag, handleToggle]
}