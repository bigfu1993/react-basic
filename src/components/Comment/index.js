import { useState } from 'react'
function Comment() {
    const [msg, setMsg] = useState('')
    const [list, setList] = useState([{ id: 0, msg: '这是一条评论', ctime: '', agree: 0 }])
    function handleComment(e, msg) {
        setList([...list, { id: list.length + 1, msg, ctime: new Date().toLocaleString() }])
        setMsg('')
    }
    function handleRemove(e, id) {
        setList(list.filter(l => l.id !== id))
    }
    return (
        <>
            <div>评论：{list.length}</div>
            <div>
                <input value={msg} onChange={(e) => setMsg(e.target.value)}></input>
                <button onClick={(e) => handleComment(e, msg)}>发送</button>
            </div>
            <ul>
                {list.map(l =>
                    <li key={l.id}>
                        {l.msg}-
                        [{l.ctime || "00"}]-
                        {l.agree || 0}-
                        <span onClick={(e) => handleRemove(e, l.id)}>删除</span>
                    </li>
                )}
            </ul>
        </>
    )
}

export default Comment