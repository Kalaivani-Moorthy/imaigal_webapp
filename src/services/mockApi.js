// Mock API service for student data
let students = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    phone: '123-456-7890',
    dateOfBirth: '2000-01-15',
    address: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zipCode: '12345',
    guardianName: 'Jane Doe',
    guardianPhone: '123-456-7891',
    school: 'Anytown High School',
    grade: '12',
    gpa: '3.8',
    interests: 'Science, Technology',
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    firstName: 'Alice',
    lastName: 'Smith',
    email: 'alice.smith@email.com',
    phone: '987-654-3210',
    dateOfBirth: '1999-05-20',
    address: '456 Oak Ave',
    city: 'Springfield',
    state: 'IL',
    zipCode: '62701',
    guardianName: 'Bob Smith',
    guardianPhone: '987-654-3211',
    school: 'Springfield High',
    grade: '11',
    gpa: '3.9',
    interests: 'Arts, Music',
    createdAt: new Date().toISOString(),
  }
];

let nextId = 3;

export const mockApi = {
  getStudents: () => 
    new Promise(resolve => 
      setTimeout(() => resolve([...students]), 500)
    ),

  getStudent: (id) =>
    new Promise(resolve => 
      setTimeout(() => resolve(students.find(s => s.id === parseInt(id))), 300)
    ),

  createStudent: (studentData) =>
    new Promise(resolve => {
      const newStudent = { ...studentData, id: nextId++, createdAt: new Date().toISOString() };
      students.push(newStudent);
      setTimeout(() => resolve(newStudent), 300);
    }),

  updateStudent: (id, studentData) =>
    new Promise(resolve => {
      const index = students.findIndex(s => s.id === parseInt(id));
      if (index !== -1) {
        students[index] = { ...students[index], ...studentData };
        setTimeout(() => resolve(students[index]), 300);
      }
    }),

  deleteStudent: (id) =>
    new Promise(resolve => {
      students = students.filter(s => s.id !== parseInt(id));
      setTimeout(() => resolve(true), 300);
    }),
};