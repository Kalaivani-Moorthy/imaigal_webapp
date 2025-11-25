import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { BellIcon, MoonIcon, SunIcon, Menu, X } from 'lucide-react';

const DashboardLayout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content */}
      <div className="flex-1 lg:ml-72">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                {/* Mobile menu button */}
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg mr-3"
                >
                  <Menu className="w-6 h-6" />
                </button>
                
                <img src="/src/assets/if_logo.png" alt="IF Logo" className="w-8 h-8 sm:w-12 sm:h-12 mr-3" />
                <div className="hidden sm:block">
                  <h1 className="text-lg sm:text-2xl font-bold text-gray-800">Welcome back, Admin</h1>
                  <p className="text-gray-600 text-xs sm:text-sm mt-1 hidden md:block">Here's what's happening with your foundation today</p>
                </div>
              </div>

              <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
                {/* Search - Hidden on mobile */}
                <div className="relative hidden md:block">
                  <input
                    className="w-48 lg:w-80 pl-10 pr-4 py-2 lg:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 shadow-sm text-sm"
                    placeholder="Search students, applications..."
                    type="search"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-4 w-4 lg:h-5 lg:w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>

                {/* Notifications */}
                <button className="p-2 lg:p-3 text-gray-600 hover:bg-gray-100 rounded-xl relative transition-colors">
                  <BellIcon className="w-5 h-5 lg:w-6 lg:h-6" />
                  <span className="absolute top-1 right-1 lg:top-2 lg:right-2 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                {/* Dark Mode Toggle - Hidden on small screens */}
                <button 
                  onClick={() => setDarkMode(!darkMode)}
                  className="hidden sm:block p-2 lg:p-3 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
                >
                  {darkMode ? <SunIcon className="w-5 h-5 lg:w-6 lg:h-6" /> : <MoonIcon className="w-5 h-5 lg:w-6 lg:h-6" />}
                </button>

                {/* Profile Avatar */}
                <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-full flex items-center justify-center shadow-md bg-teal-600">
                  <span className="text-white font-medium text-sm lg:text-base">A</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;