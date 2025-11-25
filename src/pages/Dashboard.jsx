import { useStudents } from '../features/students/hooks/useStudents';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { students } = useStudents();
  const navigate = useNavigate();

  const totalStudents = students.length;
  const pendingApplications = Math.floor(totalStudents * 0.3);
  const approvedStudents = Math.floor(totalStudents * 0.6);
  const averageGPA = students.length > 0 
    ? (students.reduce((sum, student) => sum + (parseFloat(student.gpa) || 0), 0) / students.length).toFixed(2)
    : '0.00';

  const summaryCards = [
    { title: 'Total Students', value: totalStudents, icon: '👥', color: 'teal' },
    { title: 'Pending Applications', value: pendingApplications, icon: '⏳', color: 'yellow' },
    { title: 'Approved Students', value: approvedStudents, icon: '✅', color: 'green' },
    { title: 'Average GPA', value: averageGPA, icon: '📊', color: 'blue' },
  ];

  const recentStudents = students
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);

  const getColorClasses = (color) => {
    const colors = {
      teal: 'bg-teal-50 text-teal-600',
      yellow: 'bg-yellow-50 text-yellow-600',
      green: 'bg-green-50 text-green-600',
      blue: 'bg-blue-50 text-blue-600',
    };
    return colors[color] || colors.teal;
  };

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {summaryCards.map((card, index) => (
          <div key={index} className="bg-white rounded-xl p-4 lg:p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs lg:text-sm font-medium text-gray-600 mb-1">{card.title}</p>
                <p className="text-xl lg:text-2xl font-bold text-gray-900">{card.value}</p>
              </div>
              <div className={`w-10 lg:w-12 h-10 lg:h-12 rounded-lg flex items-center justify-center ${getColorClasses(card.color)}`}>
                <span className="text-lg lg:text-xl">{card.icon}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        {/* Recent Students */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-4 lg:p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-base lg:text-lg font-semibold text-gray-900">Recent Students</h2>
              <button 
                onClick={() => navigate('/admin/students')}
                className="text-sm text-teal-600 hover:text-teal-700 font-medium"
              >
                View all
              </button>
            </div>
          </div>
          <div className="p-4 lg:p-6">
            {recentStudents.length > 0 ? (
              <div className="space-y-4">
                {recentStudents.map((student) => (
                  <div key={student.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                        <span className="text-teal-600 font-medium text-sm">
                          {student.firstName[0]}{student.lastName[0]}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {student.firstName} {student.lastName}
                        </p>
                        <p className="text-sm text-gray-500">
                          {student.school} • Grade {student.grade}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">
                        {new Date(student.createdAt).toLocaleDateString()}
                      </p>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Active
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No students yet</h3>
                <p className="text-gray-500 mb-4">Get started by adding your first student.</p>
                <button 
                  onClick={() => navigate('/admin/students/new')}
                  className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Add Student
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-4 lg:p-6 border-b border-gray-200">
            <h2 className="text-base lg:text-lg font-semibold text-gray-900">Quick Actions</h2>
          </div>
          <div className="p-4 lg:p-6 space-y-2 lg:space-y-3">
            <button 
              onClick={() => navigate('/admin/students/new')}
              className="w-full flex items-center p-3 text-left bg-teal-50 hover:bg-teal-100 rounded-lg transition-colors"
            >
              <span className="mr-3 text-teal-600">➕</span>
              <span className="font-medium text-teal-700">Add New Student</span>
            </button>
            <button 
              onClick={() => navigate('/admin/applications')}
              className="w-full flex items-center p-3 text-left bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
            >
              <span className="mr-3 text-blue-600">📋</span>
              <span className="font-medium text-blue-700">Review Applications</span>
            </button>
            <button className="w-full flex items-center p-3 text-left bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
              <span className="mr-3 text-green-600">📊</span>
              <span className="font-medium text-green-700">Generate Report</span>
            </button>
            <button className="w-full flex items-center p-3 text-left bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
              <span className="mr-3 text-purple-600">📤</span>
              <span className="font-medium text-purple-700">Export Data</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;