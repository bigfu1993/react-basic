import { useState } from "react"

function Father() {
    let fatherProps = 'abc'
    let [sonData, setSonData] = useState('')
    function fatherFn(data) {
        console.log(`console@fatherFn:` + data)
        setSonData(data)
    }
    return (
        <>
            <div>father div</div>
            <Son
                fatherProps={fatherProps}
                name={'name'}
                age={18}
                obj={{ sex: 1 }}
                list={[1, 2, 3]}
                child={<em>em div</em>}
                fatherFn={fatherFn}
            ><h2>children props h2</h2></Son>
            <Son2 sonData={sonData}></Son2>
        </>
    )
}
function Son(props) {
    console.log(props)
    let { fatherProps, child } = props
    return (
        <>
            <div
                onClick={() => props.fatherFn(Math.floor(Math.random() * 100))}>
                son div : divreceive props : {fatherProps}|{child}
            </div>
            {props.children}
        </>
    )
}
function Son2({ sonData }) {
    return (
        <>
            <div >son2 div:{sonData}</div>

        </>
    )
}
function Props() {
    return (
        <Father></Father>
    )
}
export default Props