import { Avatar } from "flowbite-react";
import { Navbar } from "flowbite-react";
import logo from "../img/logo240.png"; // prop should be passed into img of Avatar

function Navigation() {

  return (
      <Navbar fluid className="fixed top-0 min-w-full bg-slate-900 max-h-20 shadow-md p-4 z-50">
        <Navbar.Brand href="#">
          <Avatar alt="avatar of LeDaniel" rounded>
            <div className="space-y-1 text-slate-300 text-sm font-medium">
              <div>LeDaniel Leung</div>
              <div className="text-xs text-slate-400">Software Engineer</div>
            </div>
          </Avatar>
        </Navbar.Brand>
        <Navbar.Toggle className="md:hidden" id="navToggle" />
      </Navbar>
  );
}

export default Navigation;
