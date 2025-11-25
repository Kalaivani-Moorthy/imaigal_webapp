import { Link, useLocation } from 'react-router-dom';
import { BarChart3, Users, FileText, TrendingUp, Settings, LogOut, X } from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: BarChart3 },
    { name: 'Students', href: '/admin/students', icon: Users },
    { name: 'Applications', href: '/admin/applications', icon: FileText },
    { name: 'Reports', href: '/admin/reports', icon: TrendingUp },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-72 bg-gradient-to-b from-teal-600 to-teal-800 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="h-full flex flex-col">
          {/* Mobile close button */}
          <div className="lg:hidden flex justify-end p-4">
            <button
              onClick={onClose}
              className="p-2 text-white hover:bg-white/10 rounded-lg"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          {/* Profile Section */}
          <div className="px-6 lg:px-8 py-6 lg:py-8 text-center flex-shrink-0">
            <div className="w-16 lg:w-20 h-16 lg:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-2xl lg:text-3xl font-bold text-teal-600">A</span>
            </div>
            <h3 className="text-white font-bold text-lg lg:text-xl mb-2">Admin User</h3>
            <p className="text-teal-200 text-sm">admin@imaigal.org</p>
            <div className="mt-3 px-3 py-1 bg-white/10 rounded-full text-xs text-teal-100">
              Super Administrator
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 lg:px-6 py-4 space-y-2 lg:space-y-3 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => onClose && onClose()}
                  className={`flex items-center px-4 lg:px-6 py-3 lg:py-4 text-sm lg:text-base rounded-xl lg:rounded-2xl transition-all duration-300 relative group ${
                    isActive
                      ? 'bg-white text-teal-600 font-bold shadow-lg'
                      : 'text-white hover:bg-white/10 hover:translate-x-1'
                  }`}
                >
                  <div className={`w-8 lg:w-10 h-8 lg:h-10 rounded-lg lg:rounded-xl flex items-center justify-center mr-3 lg:mr-4 transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-md' 
                      : 'bg-white/10 group-hover:bg-white/20'
                  }`}>
                    <IconComponent size={18} className="lg:w-5 lg:h-5" />
                  </div>
                  <span className="font-medium">{item.name}</span>
                  {isActive && (
                    <div className="absolute right-3 lg:right-4 w-2 h-2 bg-teal-600 rounded-full"></div>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Logout */}
          <div className="p-4 lg:p-6 flex-shrink-0">
            <button className="w-full flex items-center px-4 lg:px-6 py-3 lg:py-4 text-sm lg:text-base font-medium text-white hover:bg-red-500/20 rounded-xl lg:rounded-2xl transition-all duration-300 group">
              <div className="w-8 lg:w-10 h-8 lg:h-10 rounded-lg lg:rounded-xl bg-red-500/20 flex items-center justify-center mr-3 lg:mr-4 group-hover:bg-red-500/30 transition-colors">
                <LogOut size={18} className="lg:w-5 lg:h-5 text-red-400" />
              </div>
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;