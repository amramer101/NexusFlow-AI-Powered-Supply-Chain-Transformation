import { useState } from 'react';
import {
  FaUserPlus,
  FaEdit,
  FaTrash,
  FaSearch,
  FaEllipsisV,
} from 'react-icons/fa';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import { motion } from 'framer-motion';
import { customerData } from '../utils/Datas';
import { Paginator } from 'primereact/paginator';

type CustomerStatus = 'Low Cost' | 'Fast Delivery' | 'High Returning';
type FilterStatus = CustomerStatus | 'All';

const statuses: FilterStatus[] = [
  'All',
  'Low Cost',
  'Fast Delivery',
  'High Returning',
];

function Customers() {
  const [customers] = useState(customerData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<FilterStatus>('All');

  // Pagination states
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(7);

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      selectedStatus === 'All' || customer.badge === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  const totalRecords = filteredCustomers.length;
  const paginatedCustomers = filteredCustomers.slice(first, first + rows);

  const handlePageChange = (event: { first: number; rows: number }) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  const getStatusColor = (status: FilterStatus): string => {
    switch (status) {
      case 'Low Cost':
        return 'bg-green-200 text-green-900';
      case 'Fast Delivery':
        return 'bg-yellow-200 text-yellow-900';
      case 'High Returning':
        return 'bg-blue-200 text-blue-900';
      default:
        return 'bg-gray-200 text-gray-900';
    }
  };

  const FilterDropdown = ({
    options,
    value,
    onChange,
    label,
  }: {
    options: readonly FilterStatus[];
    value: FilterStatus;
    onChange: (value: FilterStatus) => void;
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
              {() => (
                <button
                  className="w-full px-4 py-2 text-left text-sm font-semibold text-gray-800"
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
            <h1 className="text-4xl font-bold text-gray-900">Suppliers</h1>
            <p className="mt-1 text-base text-gray-600">
              {customers.length} total suppliers
            </p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-blue-800">
            <FaUserPlus /> Add Supplier
          </button>
        </div>

        {/* Filters */}
        <div className="mb-6 flex items-center gap-4">
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search by customer ID, name, or email..."
              className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 text-sm font-semibold focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <FilterDropdown
            options={statuses}
            value={selectedStatus}
            onChange={setSelectedStatus}
            label="Status"
          />
        </div>

        {/* Customers Table */}
        <div className="rounded-lg bg-white shadow-md">
          <div className="grid grid-cols-[1fr,1fr,1fr,1fr,1fr,auto] gap-4 border-b border-gray-300 bg-gray-100 p-4 text-sm font-bold text-primary">
            <p className="font-bold text-primary">Company Name</p>
            <p className="font-bold text-primary">Industry</p>
            <p className="-translate-x-5 font-bold text-primary">Email</p>
            <p className="translate-x-8 font-bold text-primary">Badges</p>
            <p className="font-bold text-primary">Total Orders</p>
            <p className="font-bold text-primary">Actions</p>
          </div>

          {paginatedCustomers.map((customer, index) => (
            <motion.div
              key={customer.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              className="grid grid-cols-[1fr,1fr,1fr,1fr,1fr,auto] gap-4 border-b border-gray-200 p-4 text-primary hover:bg-gray-50"
            >
              <div className="font-bold text-primary">
                {customer.companyName}
              </div>
              <div className="font-bold text-primary">
                {customer.customerType}
              </div>
              <div className="-translate-x-6 font-bold text-primary">
                {customer.email}
              </div>
              <div>
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${getStatusColor(customer.badge as CustomerStatus)} translate-x-4 translate-y-1`}
                >
                  {customer.badge}
                </span>
              </div>
              <div className="font-bold text-gray-800">
                {customer.totalOrders}
              </div>
              <div className="flex items-center justify-end">
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
              </div>
            </motion.div>
          ))}
        </div>
        {filteredCustomers.length === 0 && (
          <div className="mt-8 flex flex-col items-center justify-center rounded-lg bg-white p-8 text-center">
            <h3 className="text-lg font-semibold text-gray-900">
              No customers found
            </h3>
            <p className="mt-1 text-gray-500">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}

        {/* Pagination */}

        <div className="mt-6">
          <Paginator
            first={first}
            rows={rows}
            totalRecords={totalRecords}
            onPageChange={handlePageChange}
            className="mt-4 p-2 text-base"
            template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
            leftContent={
              <span className="text-base">
                Page {Math.floor(first / rows) + 1} of{' '}
                {Math.ceil(filteredCustomers.length / rows)}
              </span>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Customers;
