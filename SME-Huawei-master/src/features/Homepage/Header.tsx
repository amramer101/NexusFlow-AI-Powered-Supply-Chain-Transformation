import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import Button from '../../ui/Button';

const scrollToSection = (id: string, offset: number = -50) => {
  const section = document.querySelector(id);
  if (section) {
    const sectionTop =
      section.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth',
    });
  }
};

type NavItemProps = {
  href: string;
  text: string;
  isActive?: boolean;
};

function NavItem({ href, text, isActive }: NavItemProps) {
  return (
    <button
      onClick={() => scrollToSection(href, -100)}
      className={`relative px-3 py-2 text-sm font-medium transition-colors ${
        isActive ? 'text-secondary after:w-full' : 'text-white after:w-0'
      } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-secondary after:transition-all after:duration-300 hover:text-secondary`}
    >
      {text}
    </button>
  );
}

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { href: '#about', text: 'About' },
    { href: '#services', text: 'Services' },
    { href: '#pricing', text: 'Pricing' },
    { href: '#team', text: 'Team' },
    { href: '#contact', text: 'Contact Us' },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#">
              <img src="./NexusFlow.png" className="w-32" />
            </a>
          </div>

          <div className="hidden flex-grow justify-center md:flex">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <NavItem
                  key={item.text}
                  {...item}
                  isActive={activeSection === item.href.substring(1)}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <div className="hidden md:block">
              <Link to="/signup">
                <Button label="Get Started" />
              </Link>
            </div>

            <button
              className="ml-4 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <IoClose className="h-6 w-6 text-white" />
              ) : (
                <FaBars className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="mt-4 border-t border-white/10 pt-4 md:hidden">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.text} className="block">
                  <NavItem
                    {...item}
                    isActive={activeSection === item.href.substring(1)}
                  />
                </div>
              ))}
              <div className="pt-4">
                <Link to="/signup" className="block">
                  <Button
                    label="Contact Us"
                    variant="secondary"
                    size="lg"
                    className="w-full"
                  />
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
