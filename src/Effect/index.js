import { useEffect } from 'react'

function init(){
    console.log('init fn')
}

function Effect() {
    useEffect(() => {
        console.log('use effact is running')
        init()
    }, [])
    return (<>
        <h1>use effect</h1>
    </>)
}

export default Effect