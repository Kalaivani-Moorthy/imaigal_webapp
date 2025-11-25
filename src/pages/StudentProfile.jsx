import { useState, useEffect } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

const StudentProfile = () => {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    school: '',
    grade: '',
    gpa: '',
    interests: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedApplication = localStorage.getItem('studentApplication');
    if (savedApplication) {
      const application = JSON.parse(savedApplication);
      setProfile(application);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      localStorage.setItem('studentApplication', JSON.stringify(profile));
      setIsEditing(false);
      setLoading(false);
    }, 1000);
  };

  const ProfileSection = ({ title, children }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      {children}
    </div>
  );

  const ProfileField = ({ label, value, name, type = 'text' }) => (
    <div className="mb-4">
      {isEditing ? (
        <Input
          label={label}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
        />
      ) : (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
          <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">
            {value || 'Not provided'}
          </p>
        </div>
      )}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">My Profile</h1>
              <p className="text-blue-100 mt-2">Manage your personal information</p>
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">👤</span>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {profile.firstName} {profile.lastName}
              </h2>
              <p className="text-gray-600">{profile.email}</p>
            </div>
            <Button
              onClick={() => setIsEditing(!isEditing)}
              variant={isEditing ? 'outline' : 'primary'}
            >
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </Button>
          </div>

          {isEditing && (
            <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-700">
                📝 You are now in edit mode. Make your changes and click "Save Changes" when done.
              </p>
            </div>
          )}
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Personal Information */}
        <ProfileSection title="Personal Information">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProfileField
              label="First Name"
              value={profile.firstName}
              name="firstName"
            />
            <ProfileField
              label="Last Name"
              value={profile.lastName}
              name="lastName"
            />
            <ProfileField
              label="Email Address"
              value={profile.email}
              name="email"
              type="email"
            />
            <ProfileField
              label="Phone Number"
              value={profile.phone}
              name="phone"
            />
            <ProfileField
              label="Date of Birth"
              value={profile.dateOfBirth}
              name="dateOfBirth"
              type="date"
            />
          </div>
        </ProfileSection>

        {/* Address Information */}
        <ProfileSection title="Address Information">
          <div className="grid grid-cols-1 gap-6">
            <ProfileField
              label="Street Address"
              value={profile.address}
              name="address"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ProfileField
                label="City"
                value={profile.city}
                name="city"
              />
              <ProfileField
                label="State"
                value={profile.state}
                name="state"
              />
              <ProfileField
                label="ZIP Code"
                value={profile.zipCode}
                name="zipCode"
              />
            </div>
          </div>
        </ProfileSection>

        {/* Academic Information */}
        <ProfileSection title="Academic Information">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProfileField
              label="Current School"
              value={profile.school}
              name="school"
            />
            <div className="mb-4">
              {isEditing ? (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Current Grade
                  </label>
                  <select
                    name="grade"
                    value={profile.grade}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select Grade</option>
                    <option value="9">Grade 9</option>
                    <option value="10">Grade 10</option>
                    <option value="11">Grade 11</option>
                    <option value="12">Grade 12</option>
                  </select>
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Current Grade
                  </label>
                  <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">
                    {profile.grade ? `Grade ${profile.grade}` : 'Not provided'}
                  </p>
                </div>
              )}
            </div>
            <ProfileField
              label="Current GPA"
              value={profile.gpa}
              name="gpa"
            />
          </div>
          <div className="mt-6">
            {isEditing ? (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Academic Interests
                </label>
                <textarea
                  name="interests"
                  rows={4}
                  value={profile.interests}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Describe your academic interests and career goals..."
                />
              </div>
            ) : (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Academic Interests
                </label>
                <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">
                  {profile.interests || 'Not provided'}
                </p>
              </div>
            )}
          </div>
        </ProfileSection>

        {/* Account Settings */}
        <ProfileSection title="Account Settings">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">Email Notifications</h4>
                <p className="text-sm text-gray-600">Receive updates about your application</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">SMS Notifications</h4>
                <p className="text-sm text-gray-600">Get text messages for important updates</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </ProfileSection>

        {isEditing && (
          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              {loading ? 'Saving...' : 'Save Changes'}
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default StudentProfile;