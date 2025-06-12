import { Drawer } from "flowbite-react";
import Contacts from "./Contacts";

interface NavItem {
  id: number,
  name: string,
  emoji: string,
  link?: string
}

const SideNavigation = ({ showSideNavigation, handleSideNavigationClose }: { showSideNavigation: boolean, handleSideNavigationClose: () => void }) => {
  const navItems = [
    {
      id: 0,
      name: "About",
      emoji: "✨"
    },
    {
      id: 1,
      name: "Experience",
      emoji: "🏋️‍♂️"
    },
    {
      id: 2,
      name: "Projects",
      emoji: "💡"
    },
    {
      id: 3,
      name: "Education",
      emoji: "🎓"
    }
  ];

  const isViewportLargerThanMedium = () => {
    // tailwindcss breakpoints:
    /*  sm: 640px
      *  md: 768px
      *  lg: 1024px
      *  xl: 1280px
      *  2xl: 1536px
      */
    return window.innerWidth > 768;
  }

  return (
    <Drawer open={showSideNavigation} onClose={handleSideNavigationClose} backdrop={!isViewportLargerThanMedium()} aria-label="sidebar" className="bg-zinc-900 shadow-xl md:-translate-x-0 border-r border-zinc-600" >
      <Drawer.Items className="flex flex-col mt-14 text-zinc-400 pb-4">
        {navItems.map((navItem: NavItem) => (
          <a href={navItem.link ? navItem.link : "#"} target="_blank" className="hover:text-zinc-200">
            <div className="flex justify-between px-2 py-1 hover:bg-slate-800">
              <p>{navItem.name}</p>
              <p>{navItem.emoji}</p>
            </div>
          </a>
        ))}
      </Drawer.Items>
      <div className="flex justify-center pt-4 border-t border-zinc-600 md:invisible">
        <Contacts />
      </div>
    </Drawer>
  );
};

export default SideNavigation;
