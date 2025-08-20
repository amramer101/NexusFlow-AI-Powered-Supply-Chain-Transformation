import { useState } from 'react';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import { FaEdit, FaTrash, FaPlus, FaEllipsisV, FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { documentData } from '../utils/Datas';
import { Paginator } from 'primereact/paginator';

const documentTypes = [
  'All',
  'Invoice',
  'Shipment',
  'Order',
  'Catalog',
] as const;

const statuses = ['All', 'Signed', 'Pending', 'Cancelled'] as const;

function Documents() {
  const [documents] = useState(documentData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [first, setFirst] = useState(0); // Pagination start index
  const [rows] = useState(7); // Rows per page

  const onPageChange = (e: any) => {
    setFirst(e.first);
  };

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch =
      doc.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = selectedType === 'All' || doc.type === selectedType;
    const matchesStatus =
      selectedStatus === 'All' || doc.status === selectedStatus;

    return matchesSearch && matchesType && matchesStatus;
  });

  const paginatedDocuments = filteredDocuments.slice(first, first + rows);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Signed':
        return 'bg-green-200 text-green-900';
      case 'Pending':
        return 'bg-yellow-200 text-yellow-900';
      case 'Cancelled':
        return 'bg-red-200 text-red-900';
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
          <h1 className="text-4xl font-bold text-gray-900">Documents</h1>
          <p className="mt-1 text-base text-gray-600">
            {filteredDocuments.length} total documents
          </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-blue-800">
          <FaPlus /> Add Document
        </button>
      </div>

      {/* Filters */}
      <div className="mb-6 flex items-center gap-4">
        <div className="relative flex-1">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search by document ID or name..."
            className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 text-sm font-semibold focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <FilterDropdown
          options={documentTypes}
          value={selectedType}
          onChange={setSelectedType}
          label="Type"
        />
        <FilterDropdown
          options={statuses}
          value={selectedStatus}
          onChange={setSelectedStatus}
          label="Status"
        />
      </div>

      {/* Documents Table */}
      <div className="rounded-lg bg-white shadow-md">
        <div className="grid grid-cols-[1fr,1fr,1fr,1fr,1fr,auto] gap-4 border-b border-gray-300 bg-gray-100 p-4 text-sm font-bold text-gray-700">
          <p className="font-bold text-primary">Document ID</p>
          <p className="font-bold text-primary">Name</p>
          <p className="font-bold text-primary">Company</p>
          <p className="font-bold text-primary">Status</p>
          <p className="font-bold text-primary">PDF</p>
          <p className="font-bold text-primary">Actions</p>
        </div>

        {paginatedDocuments.map((doc, index) => (
          <motion.div
            key={doc.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            className="grid grid-cols-[1fr,1fr,1fr,1fr,1fr,auto] gap-4 border-b border-gray-200 p-4 text-gray-700 hover:bg-gray-50"
          >
            <div className="font-bold text-primary">{doc.id}</div>
            <div className="font-bold text-primary">{doc.name}</div>
            <div className="font-bold text-primary">
              {doc.associatedCompany}
            </div>
            <div>
              <span
                className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${getStatusColor(doc.status)}`}
              >
                {doc.status}
              </span>
            </div>
            <a
              className="inline-flex w-24 -translate-x-3 items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold text-white shadow-md transition duration-200 hover:bg-blue-700"
              target="_blank"
              href={doc.downloadLink}
            >
              View PDF
            </a>
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

        {filteredDocuments.length === 0 && (
          <div className="mt-8 flex flex-col items-center justify-center rounded-lg bg-white p-8 text-center">
            <h3 className="text-lg font-semibold text-gray-900">
              No documents found
            </h3>
            <p className="mt-1 text-gray-500">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </div>

      {/* Pagination */}
      <Paginator
        first={first}
        rows={rows}
        totalRecords={filteredDocuments.length}
        onPageChange={onPageChange}
        className="mt-4 p-2 text-base"
        template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
        leftContent={
          <span className="text-base">
            Page {Math.floor(first / rows) + 1} of{' '}
            {Math.ceil(filteredDocuments.length / rows)}
          </span>
        }
      />
    </div>
  );
}

export default Documents;
