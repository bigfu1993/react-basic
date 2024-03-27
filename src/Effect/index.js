import { useEffect, useState } from 'react'

function init() {
    console.log('init fn')
}
function Son() {
    let timer
    function sonFn() {
        console.log('effect fn')
        timer = setInterval(() => {
            console.log('interval running')
        }, 1000);
    }
    // 初始化执行一次
    useEffect(() => {
        console.log('son effact is running')
        sonFn()
        return ()=>{
            console.log('interval stop')
            clearInterval(timer)
        }
    }, [])
    return (
        <div>son</div>
    )
}
function Effect() {
    const [str, setStr] = useState('abc')
    const [num, setNum] = useState(1)
    const [flag, setFlag] = useState(true)
    function effectFn() {
        console.log('effect fn')
    }
    // 初始化执行一次
    useEffect(() => {
        console.log('use effact is running')
        init()
        effectFn()
    }, [])
    // 视图更新
    useEffect(() => {
        console.log('view is change')
    })
    // 依赖项更新
    useEffect(() => {
        console.log('str is change')
    }, [str])
    return (<>
        <h1>use effect </h1>
        <div onClick={() => setNum(Math.random(8))}>点击更新组件视图:{num}</div>
        <div onClick={() => setStr(`${str}*`)}>点击更新str：{str}</div>
        <div onClick={() => setFlag(!flag)}>切换son组件:{flag&&<Son></Son>}</div>
    </>)
}

export default Effect