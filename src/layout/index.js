import { Outlet,Link } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <h1>layout</h1>
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