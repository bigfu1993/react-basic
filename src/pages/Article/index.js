import { Link, useSearchParams } from 'react-router-dom'
export default function Article() {
    const [params] = useSearchParams()
    const id = params.get('id')
    const name = params.get('name')
    return (
        <>
            <div>Article</div>
            <Link to="/login">to="login"</Link>
            <div>id:{id} | name:{name}</div>
        </>
    )
}