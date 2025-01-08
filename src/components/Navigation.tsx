import { Avatar } from "flowbite-react";
import { Navbar } from "flowbite-react";
import SideNavigation from "./SideNavigation";
import logo from "../img/logo240.png"; // prop should be passed into img of Avatar
import { useState } from "react";

function Navigation() {
  const [showSideNavigation, setShowSideNavigation] = useState(true);

  const handleSideNavigationClose = () => {
    setShowSideNavigation(false);
  }

  return (
    <div>
      <Navbar fluid className="fixed top-0 min-w-full bg-zinc-900 h-20 shadow-xl p-4 z-50">
        <Navbar.Brand href="#">
          <Avatar alt="avatar of LeDaniel" rounded>
            <div className="space-y-1 text-zinc-300 text-sm font-medium">
              <div>LeDaniel Leung</div>
              <div className="text-xs text-zinc-400">Software Engineer</div>
            </div>
          </Avatar>
        </Navbar.Brand>
        <Navbar.Toggle className="md:hidden" id="navToggle" onClick={() => setShowSideNavigation(!showSideNavigation)}/>
      </Navbar>
      <SideNavigation showSideNavigation={showSideNavigation} handleSideNavigationClose={handleSideNavigationClose}/>
    </div>
  );
}

export default Navigation;
