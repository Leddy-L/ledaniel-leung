import { Button } from 'flowbite-react'
import { HiHome } from 'react-icons/hi'

import Title from '../components/Title'
import Subtitle from '../components/Subtitle'

const PageNotFound = () => {
    return (
        <div className="flex flex-col space-y-8">
            <Title>404 Not Found 🔭</Title>
            <Subtitle>You look lost... 🐈 let me help you! 🐈‍⬛</Subtitle>
            <Button pill color="dark" href="/" target="_self">
                Go Home
                <HiHome className="ml-2 h-5 w-5" />
            </Button>
        </div>
    )
}
export default PageNotFound
