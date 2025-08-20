import { motion } from 'framer-motion';
import Logo from '../../ui/Logo';

function LoginHeader() {
  return (
    <motion.div
      className="absolute left-1/2 top-20 -translate-x-1/2 transform rounded-xl bg-white/10 px-6 py-3 backdrop-blur-md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Logo />
    </motion.div>
  );
}

export default LoginHeader;
