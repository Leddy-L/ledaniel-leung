import { createBrowserRouter, RouterProvider } from 'react-router'

import Navigation from './components/navigation/Navigation'
import PageNotFound from './pages/PageNotFound'
import Landing from './pages/Landing'
import LKCPuzzleRoom from './pages/LKCPuzzleRoom'
import LKCRandomWordGenerator from './pages/LKCRandomWordGenerator'

import './styles/index.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Landing />,
        errorElement: <PageNotFound />,
    },
    {
        path: '/lkc-puzzle-room',
        element: <LKCPuzzleRoom />,
    },
    {
        path: '/lkc-random-word-generator',
        element: <LKCRandomWordGenerator />,
    },
])

function App() {
    return (
        <div className="bg-zinc-900 text-zinc-200">
            <Navigation />
            <div className="p-10 mt-16 w-full md:w-4/5 md:ml-[20%]">
                <RouterProvider router={router} />
            </div>
        </div>
    )
}

export default App
