import { Avatar } from 'flowbite-react'
import { Navbar } from 'flowbite-react'
import Contacts from './Contacts'
import SideNavigation from './SideNavigation'
import avatar from '../../img/cat.jpg'
import { useState } from 'react'

function Navigation() {
    const [showSideNavigation, setShowSideNavigation] = useState(false)

    const handleSideNavigationClose = () => {
        setShowSideNavigation(false)
    }

    return (
        <div>
            <Navbar
                fluid
                className="fixed top-0 min-w-full bg-zinc-900 h-16 border-b border-zinc-600 shadow-xl p-3 z-50"
            >
                <Navbar.Brand href="#">
                    <Avatar
                        alt="avatar of LeDaniel"
                        img={avatar}
                        placeholderInitials="LL"
                        size="md"
                        rounded
                    >
                        <div className="text-zinc-200">
                            <div className="font-bold md:text">
                                LeDaniel Leung
                            </div>
                            <div className="text-xs text-zinc-400">
                                Software Engineer
                            </div>
                        </div>
                    </Avatar>
                </Navbar.Brand>
                <div className="flex space-x-4 md:pr-4">
                    <div className="pt-2 md:pt-1 invisible md:visible">
                        <Contacts />
                    </div>
                    <Navbar.Toggle
                        className="md:hidden"
                        id="navToggle"
                        onClick={() =>
                            setShowSideNavigation(!showSideNavigation)
                        }
                    />
                </div>
            </Navbar>
            <SideNavigation
                showSideNavigation={showSideNavigation}
                handleSideNavigationClose={handleSideNavigationClose}
            />
        </div>
    )
}

export default Navigation
