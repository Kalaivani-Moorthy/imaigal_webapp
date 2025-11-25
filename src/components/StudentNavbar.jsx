import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Info, Image, Bell, Users, GraduationCap, Mail, ChevronDown, Search, FileText } from 'lucide-react';
import logo from '../assets/if_logo.png';

const StudentNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [studentDropdownOpen, setStudentDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '#home', icon: Home, isSection: true },
    { name: 'About', href: '#about', icon: Info, isSection: true },
    { name: 'Gallery', href: '#gallery', icon: Image, isSection: true },
    { name: 'Membership', href: '#membership', icon: Users, isSection: true },
    { 
      name: 'Student', 
      href: '#', 
      icon: GraduationCap,
      dropdown: [
        { name: 'Apply Now', href: '/student/apply', icon: FileText },
        { name: 'Application Status', href: '/student/status', icon: Search }
      ]
    },
    { name: 'Contact', href: '#contact', icon: Mail, isSection: true },
  ];

  const handleNavigation = (item) => {
    if (item.isSection) {
      // First try to find the section on current page
      const element = document.querySelector(item.href);
      if (element) {
        // Section exists on current page, scroll to it
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Section doesn't exist, navigate to home page with hash
        window.location.href = `/student/home${item.href}`;
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-gray-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="IF Logo" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href || (item.dropdown && item.dropdown.some(sub => location.pathname === sub.href));
              const IconComponent = item.icon;
              return (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        className={`flex items-center text-sm font-medium transition-colors ${
                          isActive ? 'text-teal-600' : 'text-gray-800 hover:text-teal-600'
                        }`}
                        onClick={() => setStudentDropdownOpen(!studentDropdownOpen)}
                      >
                        <IconComponent size={18} />
                        <span className="ml-2">{item.name}</span>
                        <ChevronDown size={16} className="ml-1" />
                      </button>
                      {studentDropdownOpen && (
                        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                          {item.dropdown.map((subItem) => {
                            const SubIcon = subItem.icon;
                            return (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600 transition-colors"
                                onClick={() => setStudentDropdownOpen(false)}
                              >
                                <SubIcon size={16} />
                                <span className="ml-3">{subItem.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ) : item.isSection ? (
                    <button
                      onClick={() => handleNavigation(item)}
                      className={`flex items-center text-sm font-medium transition-colors ${
                        isActive ? 'text-teal-600' : 'text-gray-800 hover:text-teal-600'
                      }`}
                    >
                      <IconComponent size={18} />
                      <span className="ml-2">{item.name}</span>
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={`flex items-center text-sm font-medium transition-colors ${
                        isActive ? 'text-teal-600' : 'text-gray-800 hover:text-teal-600'
                      }`}
                    >
                      <IconComponent size={18} />
                      <span className="ml-2">{item.name}</span>
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-teal-600 transition-colors">
              <Search size={20} />
            </button>
            <button 
              onClick={() => handleNavigation({ href: '#contact', isSection: true })}
              className="px-4 py-2 rounded-lg text-sm font-medium bg-teal-600 text-white hover:bg-teal-700 transition-colors"
            >
              Get Support
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-teal-600 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-2">
            {navigation.map((item) => {
              const IconComponent = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <div key={item.name}>
                  {item.isSection ? (
                    <button
                      onClick={() => {
                        handleNavigation(item);
                        setMobileMenuOpen(false);
                      }}
                      className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors w-full text-left ${
                        isActive
                          ? 'text-teal-600 bg-teal-50'
                          : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'
                      }`}
                    >
                      <IconComponent size={18} />
                      <span className="ml-3">{item.name}</span>
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-teal-600 bg-teal-50'
                          : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <IconComponent size={18} />
                      <span className="ml-3">{item.name}</span>
                    </Link>
                  )}
                  {item.dropdown && (
                    <div className="ml-6 mt-2 space-y-1">
                      {item.dropdown.map((subItem) => {
                        const SubIcon = subItem.icon;
                        return (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-teal-600 hover:bg-gray-50 rounded-lg transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <SubIcon size={16} />
                            <span className="ml-2">{subItem.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </header>

  );
};

export default StudentNavbar;