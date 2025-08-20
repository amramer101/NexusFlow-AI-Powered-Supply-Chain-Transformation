import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import { FiBell, FiSearch } from 'react-icons/fi';

function AppHeader() {
  return (
    <header className="flex h-16 items-center border-b px-6">
      <div className="flex flex-1 items-center space-x-4">
        <div className="relative w-96">
          <FiSearch className="text-muted-foreground absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-md border py-2 pl-10 pr-4"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {/* Notification Menu */}
        <Menu as="div" className="relative">
          <MenuButton className="rounded-full bg-transparent p-2 transition-all duration-300 hover:bg-gray-200">
            <FiBell className="h-5 w-5" />
          </MenuButton>
          <Transition
            as="div"
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <MenuItems className="absolute right-0 z-[999] mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <MenuItem>
                {() => (
                  <button className="block w-full bg-gray-100 px-4 py-2 text-left text-sm">
                    New notification
                  </button>
                )}
              </MenuItem>
              <MenuItem>
                {() => (
                  <button className="block w-full bg-gray-100 px-4 py-2 text-left text-sm">
                    View all
                  </button>
                )}
              </MenuItem>
            </MenuItems>
          </Transition>
        </Menu>

        {/* Profile Menu */}
        <Menu as="div" className="relative">
          <MenuButton className="flex items-center space-x-2 rounded-md bg-transparent p-2 transition-all duration-300 hover:bg-gray-200">
            <img src="./mustafa.png" className="h-8 w-8 rounded-full" />
            <span className="font-bold">Mustafa Ashraf</span>
          </MenuButton>
          <Transition
            as="div"
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <MenuItems className="absolute right-0 z-[999] w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <MenuItem>
                {() => (
                  <button className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100">
                    Profile
                  </button>
                )}
              </MenuItem>
              <MenuItem>
                {() => (
                  <button className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100">
                    Settings
                  </button>
                )}
              </MenuItem>
              <MenuItem>
                {() => (
                  <button className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100">
                    Logout
                  </button>
                )}
              </MenuItem>
            </MenuItems>
          </Transition>
        </Menu>
      </div>
    </header>
  );
}

export default AppHeader;
