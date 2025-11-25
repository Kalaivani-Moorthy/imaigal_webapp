import { Link } from 'react-router-dom';

const PortalSelector = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl font-bold text-teal-600">IF</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Imaigal Foundation
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose your portal to get started
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Link to="/student/apply" className="group">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl text-teal-600">🎓</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Student Portal</h2>
                <p className="text-gray-600 text-sm mb-6">
                  Apply for scholarships and track your application status
                </p>
                <div className="bg-teal-50 rounded-lg px-4 py-2 text-teal-700 text-sm font-medium">
                  Enter Portal →
                </div>
              </div>
            </div>
          </Link>

          <Link to="/admin" className="group">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl text-blue-600">⚙️</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Admin Portal</h2>
                <p className="text-gray-600 text-sm mb-6">
                  Manage students and review applications
                </p>
                <div className="bg-blue-50 rounded-lg px-4 py-2 text-blue-700 text-sm font-medium">
                  Enter Portal →
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortalSelector;