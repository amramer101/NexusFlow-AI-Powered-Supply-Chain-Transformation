import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Dialog, DialogPanel } from '@headlessui/react';
import { FiMenu } from 'react-icons/fi';
import Sidebar from './Sidebar';
import AppHeader from './AppHeader';

function AppLayoutReal() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="bg-background flex h-screen overflow-hidden">
      {/* Mobile Sidebar Trigger */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="fixed left-4 top-4 z-40 rounded-md bg-transparent p-2 hover:bg-gray-200 md:hidden"
      >
        <FiMenu className="h-5 w-5" />
      </button>

      <Dialog
        as="div"
        className="relative z-10"
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      >
        <DialogPanel className="absolute inset-0 z-50 w-64 bg-white p-0 md:hidden">
          <Sidebar className="border-r-0" />
        </DialogPanel>
      </Dialog>

      {/* Desktop Sidebar */}
      <Sidebar className="hidden md:flex" />

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        <AppHeader />
        <main className="flex-1 overflow-y-hidden p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayoutReal;
