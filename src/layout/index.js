import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { inscrement, addToNum } from '../store/modules/counterStore'
import { fetchChannlList } from '../store/modules/channelStore'
import { useEffect } from "react";

export default function Layout() {
    const { count } = useSelector(state => state.counter)
    const dispatch = useDispatch()

    const { channelList } = useSelector(state => state.channel)
    useEffect(() => {
        dispatch(fetchChannlList())
    }, [dispatch])
    return (
        <>
            <h1>layout : {count}</h1>
            <button onClick={() => dispatch(inscrement())}>count +1</button>
            <button onClick={() => dispatch(addToNum(10))}>count +10</button>
            <div>
                <ul>
                    {channelList.map(item => <li key={item.id}>{item.name}</li>)}
                </ul>
            </div>
            <div>
                <h2>router link</h2>
                <Link to='/jack'>to jack</Link> \
                <Link to='/queen'>to queen</Link> \
                <Link to='/article'>to article</Link> \
                <Link to='/login'>to login</Link>
            </div>
            <Outlet></Outlet>
        </>
    )
}