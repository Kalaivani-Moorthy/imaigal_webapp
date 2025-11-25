import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '../../components/Table';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useStudents } from './hooks/useStudents';

const StudentList = () => {
  const navigate = useNavigate();
  const { students, loading, deleteStudent } = useStudents();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGrade, setFilterGrade] = useState('');

  const filteredStudents = students.filter(student => {
    const matchesSearch = 
      student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesGrade = !filterGrade || student.grade === filterGrade;
    
    return matchesSearch && matchesGrade;
  });

  const columns = [
    { header: 'Name', accessor: 'firstName', render: (row) => `${row.firstName} ${row.lastName}` },
    { header: 'Email', accessor: 'email' },
    { header: 'Phone', accessor: 'phone' },
    { header: 'Grade', accessor: 'grade' },
    { header: 'School', accessor: 'school' },
    {
      header: 'Actions',
      render: (row) => (
        <div className="flex space-x-2">
          <Button
            size="sm"
            variant="outline"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/students/${row.id}`);
            }}
          >
            View
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/students/${row.id}/edit`);
            }}
          >
            Edit
          </Button>
          <Button
            size="sm"
            variant="danger"
            onClick={(e) => {
              e.stopPropagation();
              if (confirm('Are you sure you want to delete this student?')) {
                deleteStudent(row.id);
              }
            }}
          >
            Delete
          </Button>
        </div>
      )
    }
  ];

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading...</div>;
  }

  return (
    <div>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Students</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all students in the foundation database.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <Button onClick={() => navigate('/students/new')}>
            Add Student
          </Button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input
          placeholder="Search students..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          value={filterGrade}
          onChange={(e) => setFilterGrade(e.target.value)}
        >
          <option value="">All Grades</option>
          <option value="9">Grade 9</option>
          <option value="10">Grade 10</option>
          <option value="11">Grade 11</option>
          <option value="12">Grade 12</option>
        </select>
      </div>

      <div className="mt-8">
        <Table
          columns={columns}
          data={filteredStudents}
          onRowClick={(student) => navigate(`/students/${student.id}`)}
        />
      </div>
    </div>
  );
};

export default StudentList;