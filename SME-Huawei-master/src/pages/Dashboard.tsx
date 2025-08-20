import { useEffect, useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
} from 'recharts';
import {
  FaShoppingCart,
  FaUserFriends,
  FaWarehouse,
  FaTruckMoving,
} from 'react-icons/fa';
import { IconType } from 'react-icons';
import { motion } from 'framer-motion';

interface SalesData {
  name: string;
  value: number;
}

interface CategoryData {
  type: string;
  percentage: number;
  value: number;
  color: string;
}

type Timeframe = '7' | '30' | '90';
type ViewOption = 'daily' | 'weekly' | 'monthly';

interface DashboardStatProps {
  title: string;
  value: string;
  change: number;
  icon: IconType;
}

interface DashboardStats {
  totalOrders: { value: string; change: number };
  activeCustomers: { value: string; change: number };
  inventoryItems: { value: string; change: number };
  orderFulfillmentRate: { value: string; change: number };
}

const generateRandomSalesData = (days: number): SalesData[] => {
  const data: SalesData[] = [];
  for (let i = 1; i <= days; i++) {
    const randomValue = Math.floor(Math.random() * (35000 - 15000 + 1)) + 15000;
    data.push({ name: `Day ${i}`, value: randomValue });
  }
  return data;
};

const salesData: Record<ViewOption, Record<Timeframe, SalesData[]>> = {
  daily: {
    '7': generateRandomSalesData(7),
    '30': generateRandomSalesData(30),
    '90': generateRandomSalesData(90),
  },
  weekly: {
    '7': [],
    '30': [
      { name: 'Week 1', value: 15000 },
      { name: 'Week 2', value: 18000 },
      { name: 'Week 3', value: 22000 },
      { name: 'Week 4', value: 19000 },
    ],
    '90': [
      { name: 'Week 1', value: 15000 },
      { name: 'Week 2', value: 18000 },
      { name: 'Week 3', value: 22000 },
      { name: 'Week 4', value: 19000 },
      { name: 'Week 5', value: 21000 },
      { name: 'Week 6', value: 20000 },
      { name: 'Week 7', value: 23000 },
      { name: 'Week 8', value: 24000 },
      { name: 'Week 9', value: 25000 },
      { name: 'Week 10', value: 26000 },
      { name: 'Week 11', value: 27000 },
      { name: 'Week 12', value: 28000 },
    ],
  },
  monthly: {
    '7': [],
    '30': [],
    '90': [
      { name: 'Month 1', value: 50000 },
      { name: 'Month 2', value: 60000 },
      { name: 'Month 3', value: 70000 },
    ],
  },
};

const categoryBreakdown: Record<Timeframe, CategoryData[]> = {
  '7': [
    { type: 'Electronics', percentage: 35, value: 158000, color: '#3B82F6' },
    { type: 'Fashion', percentage: 28, value: 126000, color: '#10B981' },
    { type: 'Home & Living', percentage: 22, value: 99000, color: '#EF4444' },
    { type: 'Beauty', percentage: 15, value: 67000, color: '#F59E0B' },
  ],
  '30': [
    { type: 'Electronics', percentage: 40, value: 200000, color: '#3B82F6' },
    { type: 'Fashion', percentage: 30, value: 150000, color: '#10B981' },
    { type: 'Home & Living', percentage: 20, value: 80000, color: '#EF4444' },
    { type: 'Beauty', percentage: 10, value: 50000, color: '#F59E0B' },
  ],
  '90': [
    { type: 'Electronics', percentage: 30, value: 180000, color: '#3B82F6' },
    { type: 'Fashion', percentage: 30, value: 150000, color: '#10B981' },
    { type: 'Home & Living', percentage: 25, value: 120000, color: '#EF4444' },
    { type: 'Beauty', percentage: 15, value: 70000, color: '#F59E0B' },
  ],
};

const DashboardStat = ({
  title,
  value,
  change,
  icon: Icon,
}: DashboardStatProps) => {
  const isPositive = change >= 0;
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="transform rounded-lg bg-white p-6 shadow-lg transition duration-300 hover:scale-105"
    >
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-blue-50 p-3">
          <Icon className="text-3xl text-blue-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-600">{title}</h3>
          <p className="mt-1 text-2xl font-bold">{value}</p>
          <p
            className={`mt-1 text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}
          >
            {isPositive ? '▲' : '▼'} {Math.abs(change)}% from last week
          </p>
        </div>
      </div>
    </motion.div>
  );
};

function Dashboard() {
  const [timeframe, setTimeframe] = useState<Timeframe>('7');
  const [viewOption, setViewOption] = useState<ViewOption>('daily');

  const currentSalesData = salesData[viewOption][timeframe];
  const currentCategoryData = categoryBreakdown[timeframe];

  useEffect(() => {
    setViewOption('daily');
  }, [timeframe]);

  const dashboardStats: Record<Timeframe, DashboardStats> = {
    '7': {
      totalOrders: { value: '1,284', change: 12.5 },
      activeCustomers: { value: '892', change: 8.2 },
      inventoryItems: { value: '1,567', change: -2.4 },
      orderFulfillmentRate: { value: '95.8%', change: 1.1 },
    },
    '30': {
      totalOrders: { value: '3,000', change: 15.0 },
      activeCustomers: { value: '1,200', change: 5.0 },
      inventoryItems: { value: '1,800', change: 0.0 },
      orderFulfillmentRate: { value: '97.5%', change: 2.0 },
    },
    '90': {
      totalOrders: { value: '8,500', change: 10.0 },
      activeCustomers: { value: '1,500', change: 4.0 },
      inventoryItems: { value: '2,200', change: -1.0 },
      orderFulfillmentRate: { value: '96.0%', change: 3.5 },
    },
  };

  const RevenueOverView: Record<Timeframe, number> = {
    '7': 185005.24,
    '30': 229034.21,
    '90': 403192.13,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gray-50"
    >
      <div className="p-8">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              MAY-X Dashboard
            </h1>
          </div>
          <div className="inline-flex rounded-lg bg-white shadow-sm">
            {(['7', '30', '90'] as Timeframe[]).map((days) => (
              <button
                key={days}
                onClick={() => setTimeframe(days)}
                className={`px-4 py-2 text-sm font-medium ${
                  timeframe === days
                    ? 'bg-blue-600 text-white ring-2 ring-white ring-offset-2'
                    : 'text-gray-700 hover:bg-gray-50'
                } ${days === '7' ? 'rounded-l-lg' : ''} ${days === '90' ? 'rounded-r-lg' : ''}`}
              >
                {days} Days
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(dashboardStats[timeframe]).map(
            ([key, { value, change }]) => (
              <DashboardStat
                key={key}
                title={key.replace(/([A-Z])/g, ' $1').toUpperCase()}
                value={value}
                change={change}
                icon={
                  key === 'totalOrders'
                    ? FaShoppingCart
                    : key === 'activeCustomers'
                      ? FaUserFriends
                      : key === 'inventoryItems'
                        ? FaWarehouse
                        : FaTruckMoving
                }
              />
            ),
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="col-span-2 rounded-lg bg-white p-6 shadow-lg"
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Revenue Overview
                </h2>
                <p className="text-gray-600">
                  Total revenue: ${RevenueOverView[timeframe].toLocaleString()}
                </p>
              </div>
              <select
                value={viewOption}
                onChange={(e) => setViewOption(e.target.value as ViewOption)}
                className="cursor-pointer appearance-none rounded-lg border border-gray-300 bg-gray-100 p-2 text-gray-700 transition-colors duration-200 ease-in-out focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option className="bg-white text-gray-700" value="daily">
                  Daily
                </option>
                <option
                  value="weekly"
                  disabled={timeframe === '7'}
                  className="bg-white text-gray-700 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400"
                >
                  Weekly
                </option>
                <option
                  className="bg-white text-gray-700 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400"
                  value="monthly"
                  disabled={timeframe === '7' || timeframe === '30'}
                >
                  Monthly
                </option>
              </select>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={currentSalesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#3B82F6"
                    fill="#3B82F6"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 rounded-lg bg-white p-6 shadow-lg"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Category Breakdown
            </h2>
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={currentCategoryData}
                  dataKey="percentage"
                  nameKey="type"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  innerRadius={50}
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                  labelLine={false}
                  isAnimationActive={true}
                >
                  {currentCategoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: number) => `${value.toFixed(2)}%`}
                  itemStyle={{ color: '#3B82F6', fontWeight: 'bold' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Dashboard;
