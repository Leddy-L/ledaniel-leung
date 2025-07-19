import Unity, { UnityContent } from 'react-unity-webgl'

import Title from '../components/Title'
import Subtitle from '../components/Subtitle'

interface ProjectGameProps {
    title: string
    subtitle: string
    unityContent: UnityContent
    children?: any
}

const ProjectGame = (props: ProjectGameProps) => {
    return (
        <div className="flex flex-col space-y-8">
            <Title>{props.title}</Title>
            <Subtitle>{props.subtitle}</Subtitle>
            <div className="lg:h-[512px] xl:h-[768px] max-w-[1024px]">
                <Unity unityContent={props.unityContent} />
            </div>
            {props.children}
        </div>
    )
}

export default ProjectGame
