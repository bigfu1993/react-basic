import { useState } from 'react'
import './index.css'
function Comment() {
    const [active, setActive] = useState('new')
    const [tab, setTab] = useState([{ value: 'new', label: '最新' }, { value: 'hot', label: '最热' }])
    const [msg, setMsg] = useState('')
    const [list, setList] = useState([{ id: 0, msg: '这是一条评论', ctime: '', agree: 0 }])
    function handleComment(e, msg) {
        if (!msg || msg.length == 0) {
            alert('请输入评论内容')
            return
        }
        setList([...list, { id: list.length + 1, msg, ctime: new Date().toLocaleString(), agree: Math.floor(Math.random() * 100) }])
        setMsg('')
    }
    function handleRemove(e, id) {
        setList(list.filter(l => l.id !== id))
    }
    function handleSort(e, active) {
        setActive(active)
        if (active == 'hot') {
            setList(list.sort((a, b) => b.agree - a.agree))
        }
        if (active == 'new') {
            setList(list.sort((a, b) => new Date(b.ctime).getTime() - new Date(a.ctime).getTime()))
        }
    }
    return (
        <>
            <div>
                评论：{list.length}
                {tab.map(t => <span
                    key={t.value}
                    className={t.value == active ? 'active' : ''}
                    onClick={(e) => handleSort(e, t.value)}
                >{t.label}</span>)}
            </div>
            <div>
                <input value={msg} onChange={(e) => setMsg(e.target.value)}></input>
                <button onClick={(e) => handleComment(e, msg)}>发送</button>
            </div>
            <ul>
                {list.map((l, i) =>
                    <li key={l.id}>
                        {l.msg}-
                        [{l.ctime || "00"}]-
                        {l.agree || 0}-
                        {i > 1 && <span onClick={(e) => handleRemove(e, l.id)}>删除</span>}
                    </li>
                )}
            </ul>
        </>
    )
}

export default Comment