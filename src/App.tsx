import { createBrowserRouter, RouterProvider } from 'react-router'
import { UnityContent } from 'react-unity-webgl'

import Navigation from './components/navigation/Navigation'
import PageNotFound from './pages/PageNotFound'
import Landing from './pages/Landing'

import './styles/index.css'
import ProjectGame from './pages/ProjectGame'
import CardSupertitle from './components/CardSupertitle'
import Text from './components/Text'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Landing />,
        errorElement: <PageNotFound />,
    },
    {
        path: '/lkc-puzzle-room',
        element: (
            <ProjectGame
                title={'LKC Puzzle Room 🧩'}
                subtitle={
                    'Point-and-click Bible-based Escape Room game for kids.'
                }
                unityContent={
                    new UnityContent(
                        '/lkc-puzzle-room/Build/Build.json',
                        '/lkc-puzzle-room/Build/UnityLoader.js'
                    )
                }
                children={
                    <div>
                        <CardSupertitle>
                            Icons made by{' '}
                            <a
                                href="https://www.flaticon.com/authors/freepik"
                                title="Freepik"
                            >
                                Pixel perfect
                            </a>{' '}
                            from{' '}
                            <a
                                href="https://www.flaticon.com/"
                                title="Flaticon"
                            >
                                www.flaticon.com
                            </a>
                        </CardSupertitle>
                        <br />
                        <Text>
                            <p className="max-w-96">
                                <strong>LKC Puzzle Room</strong> A
                                point-and-click escape room game designed in
                                Spring 2021 to supplement a virtual kids' Bible
                                study during COVID-19 lockdown. Developed solo
                                in Unity over three months, the project reflects
                                my passion for programming, game design, escape
                                rooms, and human-computer interaction. It was a
                                hands-on exploration of interactive storytelling
                                and puzzle design during a time when connection
                                and play were more important than ever.
                            </p>
                        </Text>
                    </div>
                }
            />
        ),
    },
    {
        path: '/lkc-random-word-generator',
        element: (
            <ProjectGame
                title={'LKC Random Word Generator 🔤'}
                subtitle={
                    'Generates silly art prompts for kids from a bank of pre-determined adjectives and nouns.'
                }
                unityContent={
                    new UnityContent(
                        '/lkc-random-word-generator/Build/Build.json',
                        '/lkc-random-word-generator/Build/UnityLoader.js'
                    )
                }
                children={
                    <div>
                        <CardSupertitle>
                            Icons made by{' '}
                            <a
                                href="https://www.flaticon.com/authors/freepik"
                                title="Freepik"
                            >
                                Pixel perfect
                            </a>{' '}
                            from{' '}
                            <a
                                href="https://www.flaticon.com/"
                                title="Flaticon"
                            >
                                www.flaticon.com
                            </a>
                        </CardSupertitle>
                        <br />
                        <Text>
                            <p className="max-w-96">
                                <strong>LKC Random Word Generator</strong> A
                                playful educational tool built in Unity that
                                generates whimsical 2-3 word art prompts based
                                on user-selected numbers and letters. Designed
                                to teach kids about numbers, letters, and
                                spelling while encouraging creativity through
                                fun, randomized word combinations.
                            </p>
                        </Text>
                    </div>
                }
            />
        ),
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
