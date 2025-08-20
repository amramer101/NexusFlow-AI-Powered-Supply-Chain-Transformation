import { Link, useLocation } from 'react-router-dom';
import {
  FiBarChart2,
  FiPackage,
  FiTruck,
  FiUsers,
  FiFileText,
  FiCreditCard,
  FiSettings,
  FiLogOut,
} from 'react-icons/fi';
import Logo from './Logo';

const menuItems = [
  { icon: FiBarChart2, text: 'Dashboard', link: '/dashboard' },
  { icon: FiPackage, text: 'Inventory', link: '/inventory' },
  { icon: FiTruck, text: 'Shipments', link: '/shipments' },
  { icon: FiUsers, text: 'Suppliers', link: '/suppliers' },
  { icon: FiFileText, text: 'Documents', link: '/documents' },
  { icon: FiCreditCard, text: 'Invoices', link: '/invoices' },
  { icon: FiUsers, text: 'Members', link: '/members' },
];

function NavigationMenu({ className = '' }: { className?: string }) {
  const location = useLocation();

  return (
    <nav className={`space-y-4 ${className}`}>
      {menuItems.map((item) => {
        const isActive = location.pathname === item.link;
        return (
          <Link
            key={item.text}
            to={item.link}
            className={`flex items-center rounded-md px-3 py-2 text-base font-medium text-white transition-colors ${
              isActive ? 'bg-secondary' : 'hover:bg-secondary'
            }`}
          >
            <item.icon className="mr-3 h-4 w-4" />
            {item.text}
          </Link>
        );
      })}
    </nav>
  );
}

function Sidebar({ className = '' }: { className: string }) {
  const location = useLocation();
  const isSettingsActive = location.pathname === '/settings';

  return (
    <div
      className={`flex h-full w-64 flex-col border-r ${className} bg-primary`}
    >
      <div className="m-5 flex h-16 items-center justify-center">
        <Logo />
      </div>

      <div className="flex-1 overflow-auto border-t border-gray-600 px-3 py-4">
        <NavigationMenu />
      </div>

      <div className="flex flex-col gap-3 border-t border-gray-600 p-3 text-base text-white">
        <Link
          to="/settings"
          className={`flex items-center rounded-md px-3 py-2 font-medium transition-colors ${
            isSettingsActive
              ? 'bg-secondary text-white'
              : 'hover:bg-secondary hover:text-white'
          }`}
        >
          <FiSettings className="mr-3 h-4 w-4" />
          Settings
        </Link>
        <button
          className="hover:text- flex w-full items-center justify-start rounded-md px-3 py-2 font-medium hover:bg-secondary"
          onClick={() => console.log('Logout clicked')}
        >
          <FiLogOut className="mr-3 h-4 w-4" />
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
