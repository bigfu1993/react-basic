import { Outlet, Link } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux'
import {inscrement} from '../store/modules/counterStore'

export default function Layout() {
    const { count } = useSelector(state => state.counter)
    const dispatch = useDispatch()
    return (
        <>
            <h1>layout : {count}</h1>
            <button onClick={()=>dispatch(inscrement())}>count +1</button>
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