// components/SignupHeader.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function SignupHeader() {
  return (
    <motion.div
      className="absolute left-1/2 top-[3.3rem] -translate-x-1/2 transform rounded-t-lg bg-gradient-to-r from-gray-500 to-primary px-4 py-2 shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/">
        <img src="./NexusFlow-removebg.png" className="w-32" />
      </Link>
    </motion.div>
  );
}

export default SignupHeader;
