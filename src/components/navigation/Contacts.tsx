import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { ListGroup } from 'flowbite-react'

interface Contact {
    id: number
    link: string
    icon: IconDefinition
}

const Contacts = () => {
    const contacts = [
        {
            id: 0,
            link: 'https://www.linkedin.com/in/ledaniel-leung',
            icon: faLinkedinIn,
        },
        {
            id: 1,
            link: 'https://github.com/Asianu',
            icon: faGithub,
        },
        {
            id: 2,
            link: 'mailto: ledaniel.leung@gmail.com',
            icon: faEnvelope,
        },
    ]

    return (
        <ListGroup className="flex space-x-5 bg-zinc-900 text-zinc-400 border-none rounded-none">
            {contacts.map((contact: Contact) => (
                <a href={contact.link} key={contact.id} target="_blank">
                    <FontAwesomeIcon
                        className="text-2xl hover:text-zinc-200"
                        icon={contact.icon}
                    />
                </a>
            ))}
        </ListGroup>
    )
}

export default Contacts
