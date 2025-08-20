import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import Logo from '../../ui/Logo';

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { title: 'Company', links: ['About Us', 'Careers', 'Press', 'Blog'] },
    {
      title: 'Solutions',
      links: [
        'Inventory Management',
        'Demand Forecasting',
        'Logistics Optimization',
        'Supply Chain Analytics',
      ],
    },
    {
      title: 'Resources',
      links: ['Documentation', 'Tutorials', 'Case Studies', 'FAQs'],
    },
    {
      title: 'Legal',
      links: [
        'Terms of Service',
        'Privacy Policy',
        'Cookie Policy',
        'GDPR Compliance',
      ],
    },
  ];

  const socialIcons = [
    { Icon: FaFacebookF, href: '#', label: 'Facebook' },
    { Icon: FaTwitter, href: '#', label: 'Twitter' },
    { Icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
    { Icon: FaInstagram, href: '#', label: 'Instagram' },
  ];

  const contactInfo = [
    { Icon: FaPhone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    {
      Icon: FaEnvelope,
      text: 'contact@logismart.com',
      href: 'mailto:contact@logismart.com',
    },
    { Icon: FaMapMarkerAlt, text: 'Toronto, Ontario, Canada' },
  ];

  return (
    <footer className="bg-primary pt-16 text-white">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">
          {/* Logo and Contact Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="mb-6 text-sm text-gray-300">
              Empowering businesses with intelligent supply chain solutions.
              Transform your logistics operations with AI-driven insights and
              optimization.
            </p>
            <ul className="space-y-3">
              {contactInfo.map(({ Icon, text, href }, index) => (
                <li
                  key={index}
                  className="flex items-center text-sm text-gray-300"
                >
                  <Icon className="mr-3 h-4 w-4" />
                  {href ? (
                    <a
                      href={href}
                      className="hover:text-blue-400 hover:underline"
                    >
                      {text}
                    </a>
                  ) : (
                    text
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Links Sections */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h4 className="mb-4 font-semibold tracking-wider">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-sm text-gray-300 transition-colors duration-200 hover:text-blue-400 hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 border-t border-gray-700 py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <h5 className="mb-2 text-lg font-semibold">Stay Updated</h5>
              <p className="text-sm text-gray-300">
                Subscribe to our newsletter for the latest updates
              </p>
            </div>
            <div className="flex w-full max-w-md items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg bg-gray-700 px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between border-t border-gray-700 py-8 md:flex-row">
          <div className="mb-4 flex space-x-4 md:mb-0">
            {socialIcons.map(({ Icon, href, label }, index) => (
              <a
                key={index}
                href={href}
                aria-label={label}
                className="rounded-full bg-gray-700 p-2 text-gray-300 transition-all duration-200 hover:-translate-y-1 hover:bg-blue-600 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="text-center text-sm text-gray-300">
            © {currentYear} LogiSmart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
