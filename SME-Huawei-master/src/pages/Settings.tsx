import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaBell, FaLock, FaPaintBrush } from 'react-icons/fa';

function Settings() {
  const [selectedSection, setSelectedSection] = useState('account');

  const renderSection = () => {
    switch (selectedSection) {
      case 'account':
        return (
          <div>
            <h2 className="mb-4 text-xl font-semibold">Account Settings</h2>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-gray-600">Username</label>
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-300 p-2"
                  placeholder="Enter your username"
                />
              </div>
              <div>
                <label className="block text-gray-600">Email</label>
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-300 p-2"
                  placeholder="Enter your email"
                />
              </div>
            </div>
          </div>
        );
      case 'notifications':
        return (
          <div>
            <h2 className="mb-4 text-xl font-semibold">
              Notification Settings
            </h2>
            <div className="flex flex-col gap-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" />
                <span>Email Notifications</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" />
                <span>Push Notifications</span>
              </label>
            </div>
          </div>
        );
      case 'appearance':
        return (
          <div>
            <h2 className="mb-4 text-xl font-semibold">Appearance Settings</h2>
            <div className="flex flex-col gap-4">
              <label className="block text-gray-600">Theme</label>
              <select className="w-full rounded-lg border-gray-300 p-2">
                <option>Light</option>
                <option>Dark</option>
                <option>System Default</option>
              </select>
            </div>
          </div>
        );
      case 'security':
        return (
          <div>
            <h2 className="mb-4 text-xl font-semibold">Security Settings</h2>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-gray-600">Password</label>
                <input
                  type="password"
                  className="w-full rounded-lg border-gray-300 p-2"
                  placeholder="Enter your password"
                />
              </div>
              <div>
                <label className="block text-gray-600">
                  Two-Factor Authentication
                </label>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Enable 2FA</span>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex items-center justify-between"
      >
        <h1 className="text-3xl font-bold">Settings</h1>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.25fr,1fr]">
        {/* Sidebar for Settings Navigation */}
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <ul className="flex flex-col gap-4">
            <li>
              <button
                className={`flex items-center gap-2 text-lg ${selectedSection === 'account' ? 'font-bold text-blue-500' : 'text-gray-700'}`}
                onClick={() => setSelectedSection('account')}
              >
                <FaUser /> Account
              </button>
            </li>
            <li>
              <button
                className={`flex items-center gap-2 text-lg ${selectedSection === 'notifications' ? 'font-bold text-blue-500' : 'text-gray-700'}`}
                onClick={() => setSelectedSection('notifications')}
              >
                <FaBell /> Notifications
              </button>
            </li>
            <li>
              <button
                className={`flex items-center gap-2 text-lg ${selectedSection === 'appearance' ? 'font-bold text-blue-500' : 'text-gray-700'}`}
                onClick={() => setSelectedSection('appearance')}
              >
                <FaPaintBrush /> Appearance
              </button>
            </li>
            <li>
              <button
                className={`flex items-center gap-2 text-lg ${selectedSection === 'security' ? 'font-bold text-blue-500' : 'text-gray-700'}`}
                onClick={() => setSelectedSection('security')}
              >
                <FaLock /> Security
              </button>
            </li>
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="rounded-lg bg-white p-6 shadow-lg">
          {renderSection()}
        </div>
      </div>
    </div>
  );
}

export default Settings;
