import { useState } from 'react';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import {
  FaSearch,
  FaCalendar,
  FaEdit,
  FaTrash,
  FaBox,
  FaMapMarkerAlt,
  FaChevronDown,
  FaPlus,
  FaEllipsisV,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Shipment, shipmentData, ShipmentStatus } from '../utils/Datas';
import { Paginator } from 'primereact/paginator';

const carriers = [
  'All',
  'Air Freight',
  'Sea Freight',
  'Road Freight',
  'Rail Freight',
] as const;
const statuses = [
  'All',
  'In Transit',
  'Delivered',
  'Pending',
  'Cancelled',
] as const;

function Shipments() {
  const [shipments] = useState<Shipment[]>(shipmentData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCarrier, setSelectedCarrier] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [first, setFirst] = useState(0); // Start index of pagination
  const [rows] = useState(6); // Number of rows per page

  const getStatusColor = (status: ShipmentStatus): string => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-200 text-green-900';
      case 'In Transit':
        return 'bg-blue-200 text-blue-900';
      case 'Pending':
        return 'bg-yellow-200 text-yellow-900';
      case 'Cancelled':
        return 'bg-red-200 text-red-900';
      default:
        return 'bg-gray-200 text-gray-900';
    }
  };

  const filteredShipments = shipments.filter((shipment) => {
    const matchesSearch =
      shipment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shipment.tracking.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCarrier =
      selectedCarrier === 'All' || shipment.mode === selectedCarrier;
    const matchesStatus =
      selectedStatus === 'All' || shipment.status === selectedStatus;
    return matchesSearch && matchesCarrier && matchesStatus;
  });

  const currentShipments = filteredShipments.slice(first, first + rows);

  const onPageChange = (e: any) => {
    setFirst(e.first);
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
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Shipments</h1>
            <p className="mt-1 text-base text-gray-600">
              {shipments.length} total shipments ·{' '}
              {filteredShipments.length - currentShipments.length} still in
              progress
            </p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-blue-800">
            <FaPlus /> Add Shipment
          </button>
        </div>

        {/* Filters */}
        <div className="relative z-10 mb-6 flex items-center gap-4">
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search by shipment ID or tracking number..."
              className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 text-sm font-semibold focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {/* Filter Dropdown */}
          <FilterDropdown
            options={carriers}
            value={selectedCarrier}
            onChange={setSelectedCarrier}
            label="Mode"
          />
          <FilterDropdown
            options={statuses}
            value={selectedStatus}
            onChange={setSelectedStatus}
            label="Status"
          />
        </div>

        {/* Shipments Table */}
        <div className="rounded-lg bg-white shadow-md">
          <div className="grid grid-cols-[1fr,1fr,1fr,1fr,1fr,auto] gap-4 border-b border-gray-300 bg-gray-100 p-4 text-sm font-bold text-gray-700">
            <div className="font-bold text-primary">Shipment ID</div>
            <div className="font-bold text-primary">Status</div>
            <div className="-translate-x-10 font-bold text-primary">Route</div>
            <div className="font-bold text-primary">Expected Delivery</div>
            <div className="font-bold text-primary">Mode</div>
            <div className="font-bold text-primary">Actions</div>
          </div>

          {currentShipments.map((shipment, index) => (
            <motion.div
              key={shipment.id}
              className="grid grid-cols-[1fr,1fr,1fr,1fr,1fr,auto] gap-4 border-b border-gray-200 p-4 text-gray-700 hover:bg-gray-50"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
            >
              <div>
                <div className="text-lg font-bold text-primary">
                  {shipment.id}
                </div>
                <div className="text-xs text-primary">{shipment.tracking}</div>
              </div>
              <div>
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${getStatusColor(shipment.status)}`}
                >
                  {shipment.status}
                </span>
              </div>
              <div className="flex -translate-x-10 items-center gap-2 text-sm font-bold text-primary">
                <FaMapMarkerAlt className="text-primary" />
                {shipment.origin} → {shipment.destination}
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-primary">
                <FaCalendar className="text-primary" />
                {shipment.date}
              </div>
              <div className="flex items-center text-sm font-bold text-primary">
                {shipment.mode}
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

        {filteredShipments.length === 0 && (
          <div className="mt-8 flex flex-col items-center justify-center rounded-lg bg-white p-8 text-center">
            <FaBox className="mb-4 text-4xl text-gray-400" />
            <h3 className="text-lg font-semibold text-gray-900">
              No shipments found
            </h3>
            <p className="mt-1 text-gray-500">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}

        {/* Pagination */}
        <Paginator
          first={first}
          rows={rows}
          totalRecords={filteredShipments.length}
          onPageChange={onPageChange}
          className="mt-4 p-2 text-base"
          template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
          leftContent={
            <span className="text-base">
              Page {Math.floor(first / rows) + 1} of{' '}
              {Math.ceil(filteredShipments.length / rows)}
            </span>
          }
        />
      </div>
    </div>
  );
}

export default Shipments;
