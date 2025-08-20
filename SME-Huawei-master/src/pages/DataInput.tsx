import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type DataInputForm = {
  businessName: string;
  industryType: string;
  size: number;
  email: string;
  phoneNumber: string;
  inventoryCsv: FileList;
  salesDataCsv: FileList;
  shipmentDataCsv?: FileList;
  customerDataCsv?: FileList;
  financialDataCsv?: FileList;
};

export default function DataInput() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const {
    register,
    handleSubmit,
    setValue, // This is to set default values
  } = useForm<DataInputForm>();

  const navigate = useNavigate();

  // Set default values on load
  setValue('industryType', 'Retail');
  setValue('email', 'MAYX@gmail.com');
  setValue('phoneNumber', '010640904174');

  const onSubmit = async (data: DataInputForm) => {
    setIsSubmitting(true);
    const formData = new FormData();

    // Append text fields
    formData.append('businessName', data.businessName);
    formData.append('industryType', data.industryType);
    formData.append('size', data.size.toString());
    formData.append('email', data.email);
    formData.append('phoneNumber', data.phoneNumber);

    // Append files
    formData.append('inventoryCsv', data.inventoryCsv[0]);
    formData.append('salesDataCsv', data.salesDataCsv[0]);
    if (data.shipmentDataCsv)
      formData.append('shipmentDataCsv', data.shipmentDataCsv[0]);
    if (data.customerDataCsv)
      formData.append('customerDataCsv', data.customerDataCsv[0]);
    if (data.financialDataCsv)
      formData.append('financialDataCsv', data.financialDataCsv[0]);

    // Simulate API submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSuccessMessage(
      'Data Sent Successfully. Creating Dashboard will take around 2-5 Days, Hang Tight!',
    );

    // Wait for 3 seconds before redirecting
    setTimeout(() => {
      navigate('/dashboard');
    }, 3000);

    setIsSubmitting(false);
  };

  return (
    <motion.div
      className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {successMessage ? (
        <motion.p
          className="text-center text-xl text-green-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {successMessage}
        </motion.p>
      ) : (
        <div className="w-full max-w-xl rounded-lg border-white/10 bg-gray-800 bg-white/5 p-8 shadow-lg">
          <h2 className="mb-6 text-center text-2xl font-bold text-white">
            Data Input
          </h2>
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Business Name and Industry Type */}
            <div className="flex space-x-4">
              {/* Business Name */}
              <div className="relative flex-1">
                <input
                  {...register('businessName')}
                  type="text"
                  id="businessName"
                  placeholder=" "
                  className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 pl-1 text-white placeholder-transparent focus:border-blue-600 focus:outline-none"
                />
                <label
                  htmlFor="businessName"
                  className="absolute -top-3.5 left-1 text-sm text-teal-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600"
                >
                  Business Name
                </label>
              </div>

              {/* Industry Type */}
              <div className="relative flex-1">
                <input
                  {...register('industryType')}
                  type="text"
                  id="industryType"
                  placeholder=" "
                  className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 pl-1 text-white placeholder-transparent focus:border-blue-600 focus:outline-none"
                />
                <label
                  htmlFor="industryType"
                  className="absolute -top-3.5 left-1 text-sm text-teal-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600"
                >
                  Industry Type
                </label>
              </div>
            </div>

            {/* Size */}
            <div className="relative">
              <input
                {...register('size')}
                type="number"
                id="size"
                placeholder=" "
                className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 pl-1 text-white placeholder-transparent focus:border-blue-600 focus:outline-none"
              />
              <label
                htmlFor="size"
                className="absolute -top-3.5 left-1 text-sm text-teal-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600"
              >
                Size (Number of Employees)
              </label>
            </div>

            {/* Email and Phone Number */}
            <div className="flex space-x-4">
              {/* Email */}
              <div className="relative flex-1">
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  placeholder=" "
                  className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 pl-1 text-white placeholder-transparent focus:border-blue-600 focus:outline-none"
                />
                <label
                  htmlFor="email"
                  className="absolute -top-3.5 left-1 text-sm text-teal-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600"
                >
                  Email
                </label>
              </div>

              {/* Phone Number */}
              <div className="relative flex-1">
                <input
                  {...register('phoneNumber')}
                  type="text"
                  id="phoneNumber"
                  placeholder=" "
                  className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 pl-1 text-white placeholder-transparent focus:border-blue-600 focus:outline-none"
                />
                <label
                  htmlFor="phoneNumber"
                  className="absolute -top-3.5 left-1 text-sm text-teal-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600"
                >
                  Phone Number
                </label>
              </div>
            </div>

            {/* CSV Uploads */}
            {[
              'inventoryCsv',
              'salesDataCsv',
              'shipmentDataCsv',
              'customerDataCsv',
              'financialDataCsv',
            ].map((field) => (
              <div className="relative" key={field}>
                <input
                  {...register(field as keyof DataInputForm)}
                  type="file"
                  id={field}
                  accept=".csv"
                  className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 pl-1 text-white placeholder-transparent focus:border-blue-600 focus:outline-none"
                />
                <label
                  htmlFor={field}
                  className="absolute -top-3.5 left-1 text-sm text-teal-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600"
                >
                  {field
                    .replace('Csv', ' ')
                    .replace(/([A-Z])/g, ' $1')
                    .replace(/^./, (str) => str.toUpperCase())}{' '}
                  CSV
                  {field === 'customerDataCsv' ||
                  field === 'financialDataCsv' ? (
                    <span className="text-red-500"> (optional)</span>
                  ) : (
                    ''
                  )}
                </label>
              </div>
            ))}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="relative w-full rounded-lg bg-blue-600 p-3 font-semibold text-white transition-all hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-800"
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <motion.div
                  className="flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                </motion.div>
              ) : (
                'Submit'
              )}
            </motion.button>
          </motion.form>
        </div>
      )}
    </motion.div>
  );
}
