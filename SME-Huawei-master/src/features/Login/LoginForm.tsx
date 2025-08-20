// components/LoginForm.tsx
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

type FormData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    navigate('/datainput');
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.div>
        <div className="relative">
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Please enter a valid email address',
              },
            })}
            type="email"
            className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 pl-1 text-white placeholder-transparent focus:border-blue-600 focus:outline-none"
            placeholder=" "
            value="mustafa.ashraf.saad@gmail.com"
          />
          <label
            htmlFor="Email"
            className="absolute -top-3.5 left-1 text-sm text-teal-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600"
          >
            Email Address
          </label>
        </div>
        {errors.email && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-1 text-sm text-red-400"
          >
            {errors.email.message}
          </motion.p>
        )}
      </motion.div>

      <motion.div>
        <div className="relative">
          <input
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
            type={showPassword ? 'text' : 'password'}
            className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 pl-1 text-white placeholder-transparent focus:border-blue-600 focus:outline-none"
            placeholder=" "
            value="mustafapassword"
          />
          <label className="absolute -top-3.5 left-1 text-sm text-teal-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600">
            Password
          </label>
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        {errors.password && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-1 text-sm text-red-400"
          >
            {errors.password.message}
          </motion.p>
        )}
      </motion.div>

      <div className="flex items-center justify-between">
        <label className="flex items-center text-sm text-gray-200">
          <input
            type="checkbox"
            {...register('rememberMe')}
            className="mr-2 rounded border-gray-300 bg-white/10 text-blue-500 focus:ring-blue-500"
          />
          Remember me
        </label>
        <button
          type="button"
          className="text-sm text-blue-400 hover:text-blue-300 hover:underline"
        >
          Forgot password?
        </button>
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="relative w-full overflow-hidden rounded-lg bg-blue-600 p-3 font-semibold text-white transition-all hover:bg-blue-700 disabled:bg-blue-800"
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
          'Sign In'
        )}
      </motion.button>
    </motion.form>
  );
}

export default LoginForm;
