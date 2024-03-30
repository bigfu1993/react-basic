
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from '../layout'
import Article from '../pages/Article'
import Login from '../pages/Login'
import Queen from '../pages/Queen'
import Jack from '../pages/Jack'
import Notfound from '../pages/Notfound'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                // path: 'queen',
                index: true,
                element: <Queen></Queen>
            },
            {
                path: 'queen',
                element: <Queen></Queen>
            },
            {
                path: 'jack',
                element: <Jack></Jack>
            },
        ]
    },
    {
        path: 'login/:id/:name?',
        element: <Login></Login>
    },
    {
        path: 'article',
        element: <Article></Article>
    },
    {
        path:'*',
        element:<Notfound></Notfound>
    }
])
export default router