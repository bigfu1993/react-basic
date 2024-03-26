function Father() {
    let fatherProps = 'abc'
    return (
        <>
            <div>father div</div>
            <Son fatherProps={fatherProps}></Son>
        </>
    )
}
function Son(props) {
    console.log(props)
    return (
        <>
            <div>son div</div>
            <div>receive props : {props.fatherProps}</div>
        </>
    )
}
function Props() {
    return (
        <Father></Father>
    )
}
export default Props