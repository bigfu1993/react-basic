
// function Boolean() {
//     const flag = false;
//     return flag ? <div onClick={() => flag = !flag}>true : div</div>
//         : <span onClick={() => flag = !flag}>false : span</span>
// }
function Boolean() {
    const size = 11
    function handleClick(e,size){
        console.log(e,size)
    }
    if (size > 10) {
        return <div onClick={(e)=>handleClick(e,size)}> size大于10 </div>
    } else if (size < 0) {
        return <div> size小于0 </div>
    }else{
        return <div>size在0-10</div>
    }
}
export default Boolean