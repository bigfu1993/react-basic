import { Link, useNavigate } from 'react-router-dom'
export default function Login() {
    const navigate = useNavigate()
    return (
        <>
            <div>Login</div>
            <Link to="/article?id=1&name=ls">to="article</Link>
            <div onClick={() => navigate('/article?id=2&name=zs')}>点击跳转</div>
        </>
    )
}