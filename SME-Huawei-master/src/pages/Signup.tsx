import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SignupForm from '../features/Signup/SignupForm';
import SocialSignup from '../features/Signup/SocialSignup';

// Signup Page
function Signup() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800">
      <motion.div
        className="flex min-h-screen flex-col items-center justify-center px-4 py-20 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="z-50 rounded-t-lg bg-white/10 px-6 py-3 backdrop-blur-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/">
            <img src="./NexusFlow-removebg.png" className="w-32" />
          </Link>
        </motion.div>
        <div className="w-full max-w-md space-y-8 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
          <div className="text-center">
            <motion.h2
              className="text-3xl font-bold tracking-tight text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Create Account
            </motion.h2>
            <motion.p
              className="mt-2 text-sm text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Please enter your details to sign up
            </motion.p>
          </div>

          <SignupForm />
          <SocialSignup />

          <motion.p
            className="text-center text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Already have an account?{' '}
            <Link
              to="/login"
              className="font-medium text-blue-400 hover:text-blue-300 hover:underline"
            >
              Log in
            </Link>
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}

export default Signup;
