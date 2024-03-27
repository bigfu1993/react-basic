
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Article from '../pages/Article'
import Login from '../pages/Login'
const router = createBrowserRouter([
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: 'article',
        element: <Article></Article>
    },
])
export default router