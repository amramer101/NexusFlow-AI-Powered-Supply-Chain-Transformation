import { ReactNode } from 'react';
import { FaChartBar, FaTruck, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      className="group relative m-4 flex h-full w-full flex-col items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white text-4xl text-primary transition-all duration-300 group-hover:shadow-lg"
      >
        {icon}
      </motion.div>
      <h3 className="mb-4 text-2xl font-bold text-white">{title}</h3>
      <p className="text-center leading-relaxed text-gray-100">{description}</p>
    </motion.div>
  );
}

function OurServices() {
  const services = [
    {
      icon: <FaChartBar />,
      title: 'Inventory Optimization',
      description:
        'Transform your inventory management with AI-powered analytics. Get real-time insights, predict demand patterns, and maintain optimal stock levels to maximize profitability.',
    },
    {
      icon: <FaChartLine />,
      title: 'Smart Demand Forecasting',
      description:
        'Leverage advanced machine learning algorithms to accurately predict market demands. Make data-driven decisions and stay ahead of market trends with precision.',
    },
    {
      icon: <FaTruck />,
      title: 'Intelligent Logistics',
      description:
        'Revolutionize your logistics operations with smart route optimization, real-time tracking, and automated delivery management for maximum efficiency.',
    },
  ];

  return (
    <section className="overflow-hidden py-20" id="services">
      <div className="px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-6xl font-bold text-primary"
        >
          Our <span className="text-blue-600">Services</span>
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
          className="flex flex-wrap justify-center gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-[calc(33.333%-2rem)]"
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default OurServices;
