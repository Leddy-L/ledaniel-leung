import { Drawer, HR, List } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";
import Contacts from "./Contacts";

interface NavItem {
  id: number,
  name: string,
  link?: string
}

const SideNavigation = ({ showSideNavigation, handleSideNavigationClose }: { showSideNavigation: boolean, handleSideNavigationClose: () => void }) => {
  const navItems = [
    {
      id: 0,
      name: "About"
    },
    {
      id: 1,
      name: "Experience"
    },
    {
      id: 2,
      name: "Projects"
    },
    {
      id: 3,
      name: "Education"
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
    <Drawer open={showSideNavigation} onClose={handleSideNavigationClose} backdrop={!isViewportLargerThanMedium()} aria-label="sidebar" className="bg-zinc-900 shadow-xl md:-translate-x-0 md:w-1/5" >
      <Drawer.Items className="flex flex-col space-y-4">
        <HR />
          {navItems.map((navItem: NavItem) => (
            <a href={navItem.link ? navItem.link : "#"} target="_blank">{navItem.name}</a>
          ))}
        <Contacts />
      </Drawer.Items>
    </Drawer>
  );
};

export default SideNavigation;
