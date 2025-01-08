import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";
import Contacts from "./Contacts";

import type { CustomFlowbiteTheme } from "flowbite-react";

interface NavItem {
  id: number,
  name: string
}

const SideNavigation = () => {
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

  const customTheme: CustomFlowbiteTheme["sidebar"] = {
    root: {
      base: "h-full",
      collapsed: {
        on: "w-16",
        off: "w-64"
      },
      inner: "hidden md:block fixed top-0 left-0 z-[10] h-full w-1/5 overflow-y-auto overflow-x-hidden rounded-none px-3 py-4 bg-zinc-900"
    },
    item: {
      base: "flex items-start justify-start-lg p-2 text-base font-normal text-white hover:bg-zinc-100 focus:text-zinc-900 dark:text-white dark:hover:bg-zinc-700",
      active: "bg-gray-100 dark:bg-gray-700",
      collapsed: {
        insideCollapse: "group w-full pl-8 transition duration-75",
        noIcon: "font-bold"
      },
      content: {
        base: "flex-1 whitespace-nowrap px-3"
      },
      icon: {
        base: "h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
        active: "text-gray-700 dark:text-gray-100"
      },
      label: "",
      listItem: ""
    },
    items: {
      base: ""
    },
    itemGroup: {
      base: "mt-4 space-y-2 border-t border-slate-400 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700"
    },
    logo: {
      base: "mb-5 flex items-center pl-2.5",
      collapsed: {
        on: "hidden",
        off: "self-center whitespace-nowrap text-xl font-semibold dark:text-white"
      },
      img: "mr-3 h-6 sm:h-7"
    }
  };

  return (
    <Sidebar theme={customTheme} aria-label="sidebar">
      <div className="flex flex-col space-y-4">
        <Sidebar.Items>
          <Sidebar.ItemGroup className="h-16"></Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            {navItems.map((navItem: NavItem) => (
              <Sidebar.Item href="#" icon={HiInbox}>{navItem.name}</Sidebar.Item>
            ))}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
        <Contacts />
      </div>
    </Sidebar>
  );
};

export default SideNavigation;
