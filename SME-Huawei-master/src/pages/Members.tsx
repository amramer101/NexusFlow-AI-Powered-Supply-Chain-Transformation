import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaEdit, FaTrash, FaSearch, FaEllipsisV } from 'react-icons/fa';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import { Paginator } from 'primereact/paginator'; // Import Paginator
import { memberData } from '../utils/Datas';

const roles = ['All', 'Admin', 'Member', 'Moderator'] as const;

const getRoleColor = (role: string) => {
  switch (role) {
    case 'Admin':
      return 'bg-red-200 text-red-900'; // Admins - Red
    case 'Member':
      return 'bg-green-200 text-green-900'; // Members - Green
    case 'Moderator':
      return 'bg-blue-200 text-blue-900'; // Moderators - Blue
    default:
      return 'bg-gray-200 text-gray-900'; // Default - Gray for 'All' or unknown roles
  }
};

function Members() {
  const [members] = useState(memberData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('All');
  const [first, setFirst] = useState(0); // Tracks the first index of the current page
  const [rows] = useState(7); // Number of members to display per page

  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRole = selectedRole === 'All' || member.role === selectedRole;

    return matchesSearch && matchesRole;
  });

  const handlePageChange = (event: any) => {
    setFirst(event.first);
  };

  const FilterDropdown = ({
    options,
    value,
    onChange,
    label,
  }: {
    options: readonly string[];
    value: string;
    onChange: (value: string) => void;
    label: string;
  }) => (
    <Menu as="div" className="relative">
      <MenuButton className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50">
        {label}: {value}
      </MenuButton>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <MenuItems className="absolute right-0 z-50 mt-2 w-40 rounded-lg bg-white py-1 shadow-lg">
          {options.map((option) => (
            <MenuItem key={option}>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-gray-100' : ''
                  } w-full px-4 py-2 text-left text-sm font-semibold text-gray-800`}
                  onClick={() => onChange(option)}
                >
                  {option}
                </button>
              )}
            </MenuItem>
          ))}
        </MenuItems>
      </Transition>
    </Menu>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Members</h1>
            <p className="mt-1 text-base text-gray-600">
              {filteredMembers.length} total members
            </p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-blue-800">
            <FaPlus /> Add Member
          </button>
        </div>

        {/* Filters */}
        <div className="mb-6 flex items-center gap-4">
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search by name or email..."
              className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 text-sm font-semibold focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <FilterDropdown
            options={roles}
            value={selectedRole}
            onChange={setSelectedRole}
            label="Role"
          />
        </div>

        {/* Members Table */}
        <div className="rounded-lg bg-white shadow-md">
          <div className="grid grid-cols-[1fr,1fr,1fr,1fr,1fr,auto] gap-4 border-b border-gray-300 bg-gray-100 p-4 text-sm font-bold text-gray-700">
            <div className="font-bold text-primary">Name</div>
            <div className="font-bold text-primary">Department</div>
            <div className="font-bold text-primary">Role</div>
            <div className="font-bold text-primary">Location</div>
            <div className="font-bold text-primary">Email</div>
            <div className="font-bold text-primary">Actions</div>
          </div>

          {filteredMembers.slice(first, first + rows).map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              className="grid grid-cols-[1fr,1fr,1fr,1fr,1fr,auto] gap-4 border-b border-gray-200 p-4 text-gray-700 hover:bg-gray-50"
            >
              <p className="text-base font-bold text-primary">{member.name}</p>
              <p className="text-base font-bold text-primary">
                {member.department}
              </p>
              <div>
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${getRoleColor(member.role)}`}
                >
                  {member.role}
                </span>
              </div>
              <p className="test-base font-bold text-primary">
                {member.location}
              </p>
              <p className="test-base font-bold text-primary">{member.email}</p>
              <p className="flex items-center justify-end">
                <Menu as="div" className="relative">
                  <MenuButton className="rounded-full p-2 text-primary hover:bg-gray-100">
                    <FaEllipsisV />
                  </MenuButton>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <MenuItems className="absolute right-7 z-[999] mt-2 inline-block w-32 rounded-lg bg-white py-1 shadow-lg">
                      <MenuItem>
                        {() => (
                          <button className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm font-semibold text-gray-800">
                            <FaEdit className="text-blue-700" /> Edit
                          </button>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {() => (
                          <button className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm font-semibold text-gray-800">
                            <FaTrash className="text-red-700" /> Delete
                          </button>
                        )}
                      </MenuItem>
                    </MenuItems>
                  </Transition>
                </Menu>
              </p>
            </motion.div>
          ))}

          {filteredMembers.length === 0 && (
            <div className="mt-8 flex flex-col items-center justify-center rounded-lg bg-white p-8 text-center">
              <h3 className="text-lg font-semibold text-gray-900">
                No members found
              </h3>
              <p className="mt-1 text-gray-500">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="mt-6">
          <Paginator
            first={first}
            rows={rows}
            totalRecords={filteredMembers.length}
            onPageChange={handlePageChange}
            className="mt-4 p-2 text-base"
            template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
            leftContent={
              <span className="text-base">
                Page {Math.floor(first / rows) + 1} of
                {Math.ceil(filteredMembers.length / rows)}
              </span>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Members;
