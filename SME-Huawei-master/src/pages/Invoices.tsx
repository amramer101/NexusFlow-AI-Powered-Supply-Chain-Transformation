import { useState } from 'react';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import {
  FaEdit,
  FaTrash,
  FaPlus,
  FaSearch,
  FaEllipsisV,
  FaChevronDown,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { invoiceData } from '../utils/Datas';
import { Paginator } from 'primereact/paginator';

function Invoices() {
  const [invoices] = useState(invoiceData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 7;

  const statuses = ['All', 'Paid', 'Unpaid', 'Overdue', 'Partially Paid'];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid':
        return 'bg-green-200 text-green-900';
      case 'Unpaid':
        return 'bg-blue-200 text-blue-900';
      case 'Partially Paid':
        return 'bg-yellow-200 text-yellow-900';
      case 'Overdue':
        return 'bg-red-200 text-red-900';
      default:
        return 'bg-gray-200 text-gray-900';
    }
  };

  const filteredInvoices = invoices.filter(
    (invoice) =>
      (searchTerm === '' ||
        invoice.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        invoice.customer.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedStatus === 'All' || invoice.status === selectedStatus),
  );

  const paginatedInvoices = filteredInvoices.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage,
  );

  const onPageChange = (event: any) => {
    setCurrentPage(event.page);
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
        <FaChevronDown className="text-gray-500" />
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
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Invoices</h1>
          <p className="mt-1 text-base text-gray-600">
            {filteredInvoices.length} total invoices
          </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-blue-800">
          <FaPlus /> Add Invoice
        </button>
      </div>

      {/* Filters */}
      <div className="relative z-10 mb-6 flex items-center gap-4">
        <div className="relative flex-1">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search by invoice ID or customer name..."
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

      {/* Invoices Table */}
      <div className="rounded-lg bg-white shadow-md">
        <div className="grid grid-cols-[1fr,1fr,1fr,1fr,1fr,auto] gap-4 border-b border-gray-300 bg-gray-100 p-4 text-sm font-bold text-gray-700">
          <div className="font-bold text-primary">Invoice ID</div>
          <div className="font-bold text-primary">Status</div>
          <div className="font-bold text-primary">Company</div>
          <div className="font-bold text-primary">Date</div>
          <div className="font-bold text-primary">Amount</div>
          <div className="font-bold text-primary">Actions</div>
        </div>

        {paginatedInvoices.map((invoice, index) => (
          <motion.div
            key={invoice.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            className="grid grid-cols-[1fr,1fr,1fr,1fr,1fr,auto] border-b border-gray-200 p-4 text-gray-700 hover:bg-gray-50"
          >
            <div className="font-bold text-primary">{invoice.id}</div>
            <div>
              <span
                className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${getStatusColor(invoice.status)}`}
              >
                {invoice.status}
              </span>
            </div>
            <div className="font-bold text-primary">{invoice.customer}</div>
            <div className="flex items-center gap-2 text-sm font-bold text-primary">
              <FaMapMarkerAlt className="text-primary" />
              {invoice.date} → {invoice.dueDate}
            </div>
            <div className="font-bold text-green-600">{invoice.amount}</div>
            <div className="flex items-center justify-end">
              <Menu as="div" className="relative">
                <MenuButton className="rounded-full p-2 text-gray-600 hover:bg-gray-100">
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
                  <MenuItems className="absolute right-0 z-[60] mt-2 w-32 rounded-lg bg-white py-1 shadow-lg">
                    <MenuItem>
                      {({ active }) => (
                        <button
                          className={`flex w-full items-center gap-2 px-4 py-2 text-left text-sm font-semibold text-gray-800 ${active ? 'bg-gray-100' : ''}`}
                        >
                          <FaEdit className="text-blue-700" /> Edit
                        </button>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <button
                          className={`flex w-full items-center gap-2 px-4 py-2 text-left text-sm font-semibold text-gray-800 ${active ? 'bg-gray-100' : ''}`}
                        >
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

        {filteredInvoices.length === 0 && (
          <div className="mt-8 flex flex-col items-center justify-center rounded-lg bg-white p-8 text-center">
            <h3 className="text-lg font-semibold text-gray-900">
              No invoices found
            </h3>
            <p className="mt-1 text-gray-500">
              Try adjusting your search criteria.
            </p>
          </div>
        )}
      </div>

      {/* Paginator */}
      <div className="mt-4">
        <Paginator
          first={currentPage * itemsPerPage}
          rows={itemsPerPage}
          totalRecords={filteredInvoices.length}
          onPageChange={onPageChange}
          className="mt-4 p-2 text-base"
          template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
          leftContent={
            <span className="text-base">
              Page {Math.floor((currentPage * itemsPerPage) / itemsPerPage) + 1}
              of {Math.ceil(filteredInvoices.length / itemsPerPage)}
            </span>
          }
        />
      </div>
    </div>
  );
}

export default Invoices;
