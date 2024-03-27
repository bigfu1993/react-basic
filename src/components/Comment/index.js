
import './index.css'
import { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'
function Item({ l, i, handleRemove }) {
    return (
        <li>
            {l.content}-
            [{l.ctime || "00"}]-
            {l.like || 0}-
            {i > 1 && <span onClick={(e) => handleRemove(e, l.rpid)}>删除</span>}
        </li>
    )
}
function Comment() {
    const iptRef = useRef(null)
    const [active, setActive] = useState('new')
    const [tab, setTab] = useState([{ value: 'new', label: '最新' }, { value: 'hot', label: '最热' }])
    const [content, setContent] = useState('')
    const [list, setList] = useState([])
    useEffect(() => {
        async function getList() {
            const res = await axios.get('http://localhost:3004/list')
            console.log(res.data)
            setList(res.data)
        }
        getList()
    }, [])
    function handleComment(e, msg) {
        console.log(iptRef.current)
        if (!msg || msg.length === 0) {
            alert('请输入评论内容')
            return
        }
        setList([...list, {
            "rpid": list.length + 1,
            "user": {
                "uid": "13258165",
                "avatar": "http://toutiao.itheima.net/resources/images/98.jpg",
                "uname": "周杰伦"
            },
            "content": content,
            "ctime": dayjs(new Date()).format('MM-DD hh:mm') || new Date().toLocaleString(),
            like: Math.floor(Math.random() * 100),
        }])
        setContent('')
        iptRef.current.focus()
    }
    function handleRemove(e, id) {
        setList(list.filter(l => l.id !== id))
    }
    function handleSort(e, active) {
        setActive(active)
        if (active === 'hot') {
            setList(list.sort((a, b) => b.like - a.like))
        }
        if (active === 'new') {
            setList(list.sort((a, b) => new Date(b.ctime).getTime() - new Date(a.ctime).getTime()))
        }
    }
    return (
        <>
            <div>
                评论：{list.length}
                {tab.map(t => <span
                    key={t.value}
                    className={t.value === active ? 'active' : ''}
                    onClick={(e) => handleSort(e, t.value)}
                >{t.label}</span>)}
            </div>
            <div>
                <input value={content} ref={iptRef} onChange={(e) => setContent(e.target.value)}></input>
                <button onClick={(e) => handleComment(e, content)}>发送</button>
            </div>
            <ul>
                {list.length && list.map((l, i) => <Item key={l.rpid} l={l} i={i}></Item>)}
            </ul>
        </>
    )
}

export default Comment