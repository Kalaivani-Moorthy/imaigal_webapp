import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { mockApi } from '../../services/mockApi';

const StudentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const studentData = await mockApi.getStudent(id);
        setStudent(studentData);
      } catch (error) {
        console.error('Error fetching student:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, [id]);

  const handleExportPDF = () => {
    // Placeholder for PDF export functionality
    alert('PDF export functionality would be implemented here');
  };

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading...</div>;
  }

  if (!student) {
    return <div className="text-center">Student not found</div>;
  }

  const InfoSection = ({ title, children }) => (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>{children}</dl>
      </div>
    </div>
  );

  const InfoItem = ({ label, value }) => (
    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-medium text-gray-500">{label}</dt>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{value || 'Not provided'}</dd>
    </div>
  );

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {student.firstName} {student.lastName}
          </h1>
          <p className="mt-1 text-sm text-gray-600">Student Details</p>
        </div>
        <div className="flex space-x-3">
          <Button
            variant="outline"
            onClick={handleExportPDF}
          >
            Export PDF
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate(`/students/${student.id}/edit`)}
          >
            Edit
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate('/students')}
          >
            Back to List
          </Button>
        </div>
      </div>

      <InfoSection title="Personal Information">
        <InfoItem label="First Name" value={student.firstName} />
        <InfoItem label="Last Name" value={student.lastName} />
        <InfoItem label="Email" value={student.email} />
        <InfoItem label="Phone" value={student.phone} />
        <InfoItem label="Date of Birth" value={student.dateOfBirth} />
      </InfoSection>

      <InfoSection title="Address">
        <InfoItem label="Street Address" value={student.address} />
        <InfoItem label="City" value={student.city} />
        <InfoItem label="State" value={student.state} />
        <InfoItem label="ZIP Code" value={student.zipCode} />
      </InfoSection>

      <InfoSection title="Guardian Information">
        <InfoItem label="Guardian Name" value={student.guardianName} />
        <InfoItem label="Guardian Phone" value={student.guardianPhone} />
      </InfoSection>

      <InfoSection title="Academic Information">
        <InfoItem label="School" value={student.school} />
        <InfoItem label="Grade" value={student.grade} />
        <InfoItem label="GPA" value={student.gpa} />
        <InfoItem label="Interests" value={student.interests} />
      </InfoSection>

      <InfoSection title="System Information">
        <InfoItem label="Created At" value={new Date(student.createdAt).toLocaleDateString()} />
        <InfoItem label="Student ID" value={student.id} />
      </InfoSection>
    </div>
  );
};

export default StudentDetails;