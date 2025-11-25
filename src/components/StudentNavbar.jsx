import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Info, Image, Bell, Users, GraduationCap, Mail, ChevronDown, Search, FileText } from 'lucide-react';
import logo from '../assets/if_logo.png';

// Add custom CSS for slide-in animation
const slideInStyle = `
  @keyframes slideIn {
    from { transform: scaleX(0); }
    to { transform: scaleX(1); }
  }
`;

// Inject the CSS
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = slideInStyle;
  document.head.appendChild(style);
}

const StudentNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [studentDropdownOpen, setStudentDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Track active section
      const sections = ['home', 'about', 'gallery', 'membership', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
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
        window.location.href = `/imaigal_webapp/student/home${item.href}`;
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm border-gray-200 shadow-sm' : 'bg-white/90 backdrop-blur-sm border-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="IF Logo" className="h-8 w-auto" />
            <span className="text-lg font-semibold text-gray-900">Imaigal</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => {
              const isActive = (item.isSection && activeSection === item.href.slice(1)) || 
                             location.pathname === item.href || 
                             (item.dropdown && item.dropdown.some(sub => location.pathname === sub.href));
              return (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        className={`text-sm font-medium transition-all duration-200 flex items-center py-2 px-1 relative ${
                          isActive 
                            ? 'text-teal-600' 
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                        onClick={() => setStudentDropdownOpen(!studentDropdownOpen)}
                      >
                        {item.name}
                        <ChevronDown size={14} className="ml-1" />
                        {isActive && (
                          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-600 rounded-full animate-[slideIn_0.3s_ease-out]" style={{transformOrigin: 'left'}}></div>
                        )}
                      </button>
                      {studentDropdownOpen && (
                        <div className="absolute top-full right-0 mt-3 w-48 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                          {item.dropdown.map((subItem) => {
                            const SubIcon = subItem.icon;
                            return (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600 transition-colors rounded-lg mx-2"
                                onClick={() => setStudentDropdownOpen(false)}
                              >
                                <SubIcon size={14} />
                                <span className="ml-2">{subItem.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ) : item.isSection ? (
                    <button
                      onClick={() => handleNavigation(item)}
                      className={`text-sm font-medium transition-all duration-200 py-2 px-1 relative ${
                        isActive 
                          ? 'text-teal-600' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {item.name}
                      {isActive && (
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-600 rounded-full animate-[slideIn_0.3s_ease-out]" style={{transformOrigin: 'left'}}></div>
                      )}
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={`text-sm font-medium transition-all duration-200 py-2 px-1 relative ${
                        isActive 
                          ? 'text-teal-600' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {item.name}
                      {isActive && (
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-600 rounded-full animate-[slideIn_0.3s_ease-out]" style={{transformOrigin: 'left'}}></div>
                      )}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right side actions */}
          <div className="hidden md:flex items-center">
            <button 
              onClick={() => handleNavigation({ href: '#contact', isSection: true })}
              className="px-5 py-2 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-700 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Get Support
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-1 text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-1">
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