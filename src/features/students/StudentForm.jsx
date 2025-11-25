import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useStudents } from './hooks/useStudents';
import { mockApi } from '../../services/mockApi';

const StudentForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { addStudent, updateStudent } = useStudents();
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    guardianName: '',
    guardianPhone: '',
    school: '',
    grade: '',
    gpa: '',
    interests: '',
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isEditing) {
      setLoading(true);
      mockApi.getStudent(id).then(student => {
        if (student) {
          setFormData(student);
        }
        setLoading(false);
      });
    }
  }, [id, isEditing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.guardianName.trim()) newErrors.guardianName = 'Guardian name is required';
    if (!formData.school.trim()) newErrors.school = 'School is required';
    if (!formData.grade) newErrors.grade = 'Grade is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    try {
      if (isEditing) {
        await updateStudent(id, formData);
      } else {
        await addStudent(formData);
      }
      navigate('/students');
    } catch (error) {
      console.error('Error saving student:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading && isEditing) {
    return <div className="flex justify-center items-center h-64">Loading...</div>;
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          {isEditing ? 'Edit Student' : 'Add New Student'}
        </h1>
        <p className="mt-1 text-sm text-gray-600">
          {isEditing ? 'Update student information' : 'Fill out the form to add a new student'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
              <p className="mt-1 text-sm text-gray-500">Basic student details</p>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <Input
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    error={errors.firstName}
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <Input
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    error={errors.lastName}
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <Input
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    error={errors.phone}
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <Input
                    label="Date of Birth"
                    name="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    error={errors.dateOfBirth}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Address</h3>
              <p className="mt-1 text-sm text-gray-500">Student's residential address</p>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <Input
                    label="Street Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                  <Input
                    label="City"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <Input
                    label="State"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <Input
                    label="ZIP Code"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Guardian Information</h3>
              <p className="mt-1 text-sm text-gray-500">Parent or guardian details</p>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <Input
                    label="Guardian Name"
                    name="guardianName"
                    value={formData.guardianName}
                    onChange={handleChange}
                    error={errors.guardianName}
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <Input
                    label="Guardian Phone"
                    name="guardianPhone"
                    value={formData.guardianPhone}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Academic Information</h3>
              <p className="mt-1 text-sm text-gray-500">School and academic details</p>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-4">
                  <Input
                    label="School"
                    name="school"
                    value={formData.school}
                    onChange={handleChange}
                    error={errors.school}
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Grade
                  </label>
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select Grade</option>
                    <option value="9">Grade 9</option>
                    <option value="10">Grade 10</option>
                    <option value="11">Grade 11</option>
                    <option value="12">Grade 12</option>
                  </select>
                  {errors.grade && <p className="mt-1 text-sm text-red-600">{errors.grade}</p>}
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <Input
                    label="GPA"
                    name="gpa"
                    value={formData.gpa}
                    onChange={handleChange}
                    placeholder="e.g., 3.8"
                  />
                </div>
                <div className="col-span-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Interests
                  </label>
                  <textarea
                    name="interests"
                    rows={3}
                    value={formData.interests}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Student's interests and hobbies"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-3">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate('/students')}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={loading}
          >
            {loading ? 'Saving...' : (isEditing ? 'Update Student' : 'Add Student')}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;