import { useState } from 'react';
import { Search, Mail, CheckCircle, Clock, AlertCircle, FileText, GraduationCap } from 'lucide-react';
import Button from '../components/Button';

const StudentStatus = () => {
  const [email, setEmail] = useState('');
  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSearched(true);
    
    // Sample data for demonstration
    const sampleData = {
      'kalai@gmail.com': {
        id: 12345,
        firstName: 'Kalai',
        lastName: 'Kim',
        email: 'kalai@gmail.com',
        phone: '+91 98765 43210',
        school: 'Government Higher Secondary School',
        grade: '12',
        gpa: '3.8',
        status: 'Under Review',
        submittedAt: '2024-01-15T10:30:00.000Z'
      }
    };
    
    // Simulate API call
    setTimeout(() => {
      // Check sample data first
      if (sampleData[email]) {
        setApplication(sampleData[email]);
      } else {
        // Check localStorage for actual submissions
        const savedApplication = localStorage.getItem('studentApplication');
        if (savedApplication) {
          const app = JSON.parse(savedApplication);
          if (app.email === email) {
            setApplication(app);
          } else {
            setApplication(null);
          }
        } else {
          setApplication(null);
        }
      }
      setLoading(false);
    }, 1500);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Under Review':
        return <Clock className="w-6 h-6 text-yellow-500" />;
      case 'Approved':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'Rejected':
        return <AlertCircle className="w-6 h-6 text-red-500" />;
      default:
        return <FileText className="w-6 h-6 text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Under Review':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Approved':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Rejected':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const timeline = application ? [
    {
      id: 1,
      title: 'Application Submitted',
      description: 'Your application has been received',
      date: new Date(application.submittedAt).toLocaleDateString(),
      completed: true,
      icon: FileText
    },
    {
      id: 2,
      title: 'Initial Review',
      description: 'Application is being reviewed by our team',
      date: 'In Progress',
      completed: application.status !== 'Under Review',
      icon: Clock
    },
    {
      id: 3,
      title: 'Interview Process',
      description: 'Scheduled interview with foundation representatives',
      date: 'Pending',
      completed: false,
      icon: CheckCircle
    },
    {
      id: 4,
      title: 'Final Decision',
      description: 'Final approval and scholarship award',
      date: 'Pending',
      completed: application.status === 'Approved',
      icon: CheckCircle
    }
  ] : [];

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 space-y-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Application Status</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Track your scholarship application progress and stay updated on your journey with us
        </p>
      </div>

      {/* Search Section */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-teal-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Find Your Application</h2>
          <p className="text-gray-600">Enter the email address you used when applying</p>
        </div>

        <form onSubmit={handleSearch} className="max-w-md mx-auto">
          <div className="relative mb-4">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              required
            />
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold py-3 rounded-lg transition-all duration-200"
          >
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Searching...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                <Search className="w-5 h-5" />
                <span>Check Status</span>
              </div>
            )}
          </Button>
        </form>
      </div>

      {/* Results Section */}
      {searched && (
        <div className="animate-in slide-in-from-bottom-4 duration-500">
          {application ? (
            <div className="space-y-8">
              {/* Status Overview */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 px-8 py-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {application.firstName} {application.lastName}
                      </h2>
                      <p className="text-gray-600">Application #{application.id}</p>
                    </div>
                    <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${getStatusColor(application.status)}`}>
                      {getStatusIcon(application.status)}
                      <span className="font-medium">{application.status}</span>
                    </div>
                  </div>
                </div>

                {/* Application Details */}
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center p-6 bg-teal-50 rounded-xl">
                      <FileText className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                      <h3 className="font-semibold text-gray-900 mb-1">Submitted</h3>
                      <p className="text-gray-600 text-sm">{new Date(application.submittedAt).toLocaleDateString()}</p>
                    </div>
                    <div className="text-center p-6 bg-cyan-50 rounded-xl">
                      <GraduationCap className="w-8 h-8 text-cyan-600 mx-auto mb-3" />
                      <h3 className="font-semibold text-gray-900 mb-1">School</h3>
                      <p className="text-gray-600 text-sm">{application.school}</p>
                    </div>
                    <div className="text-center p-6 bg-green-50 rounded-xl">
                      <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
                      <h3 className="font-semibold text-gray-900 mb-1">Grade</h3>
                      <p className="text-gray-600 text-sm">Grade {application.grade}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Timeline */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Application Journey</h3>
                <div className="relative">
                  {timeline.map((item, index) => {
                    const IconComponent = item.icon;
                    const isLast = index === timeline.length - 1;
                    return (
                      <div key={item.id} className="relative flex items-start pb-8">
                        {!isLast && (
                          <div className={`absolute left-6 top-12 w-0.5 h-16 ${
                            item.completed ? 'bg-green-300' : 'bg-gray-200'
                          }`} />
                        )}
                        <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center border-4 ${
                          item.completed 
                            ? 'bg-green-500 border-green-200 text-white' 
                            : index === 1 && application.status === 'Under Review'
                            ? 'bg-yellow-500 border-yellow-200 text-white'
                            : 'bg-white border-gray-200 text-gray-400'
                        }`}>
                          <IconComponent size={20} />
                        </div>
                        <div className="ml-6 flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h4 className={`text-lg font-semibold ${
                              item.completed ? 'text-gray-900' : 'text-gray-500'
                            }`}>
                              {item.title}
                            </h4>
                            <span className={`text-sm px-3 py-1 rounded-full ${
                              item.completed 
                                ? 'bg-green-100 text-green-700'
                                : index === 1 && application.status === 'Under Review'
                                ? 'bg-yellow-100 text-yellow-700'
                                : 'bg-gray-100 text-gray-500'
                            }`}>
                              {item.date}
                            </span>
                          </div>
                          <p className="text-gray-600 mt-2">{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-12 text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Application Not Found</h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                We couldn't find an application with the email "{email}". Please verify your email address or submit a new application.
              </p>
              <Button 
                onClick={() => window.location.href = '/student/apply'}
                className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-8 py-3"
              >
                Submit New Application
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StudentStatus;