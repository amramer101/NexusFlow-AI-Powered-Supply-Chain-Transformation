// components/SocialLogin.tsx
import { FaGoogle, FaApple } from 'react-icons/fa';
import { motion } from 'framer-motion';

function SocialLogin() {
  const socialButtons = [
    { Icon: FaGoogle, label: 'Google', bgColor: 'hover:bg-red-600' },
    { Icon: FaApple, label: 'Apple', bgColor: 'hover:bg-gray-800' },
  ];

  return (
    <motion.div
      className="mt-8 space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      <div className="relative flex items-center">
        <div className="flex-grow border-t border-gray-600" />
        <span className="mx-4 flex-shrink text-sm text-gray-400">
          Or continue with
        </span>
        <div className="flex-grow border-t border-gray-600" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {socialButtons.map(({ Icon, label, bgColor }) => (
          <motion.button
            key={label}
            className={`flex items-center justify-center gap-2 rounded-lg border border-gray-600 bg-white/5 p-2 text-sm text-white backdrop-blur-sm transition-all hover:border-transparent ${bgColor}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Icon className="text-xl" />
            {label}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

export default SocialLogin;
