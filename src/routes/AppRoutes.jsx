import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import StudentLayout from '../layouts/StudentLayout';
import Dashboard from '../pages/Dashboard';
import StudentList from '../features/students/StudentList';
import StudentForm from '../features/students/StudentForm';
import StudentDetails from '../features/students/StudentDetails';
import StudentApplication from '../pages/StudentApplication';
import StudentStatus from '../pages/StudentStatus';
import StudentProfile from '../pages/StudentProfile';
import StudentHome from '../pages/StudentHome';
import PortalSelector from '../pages/PortalSelector';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Default to Student Portal */}
      <Route path="/" element={<Navigate to="/student/home" replace />} />
      <Route path="/portal" element={<PortalSelector />} />
      
      {/* Admin Routes */}
      <Route path="/admin/*" element={
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/students/new" element={<StudentForm />} />
            <Route path="/students/:id" element={<StudentDetails />} />
            <Route path="/students/:id/edit" element={<StudentForm />} />
          </Routes>
        </DashboardLayout>
      } />
      
      {/* Student Routes */}
      <Route path="/student/*" element={
        <StudentLayout>
          <Routes>
            <Route path="/home" element={<StudentHome />} />
            <Route path="/about" element={<div className="text-center py-20"><h1 className="text-4xl font-bold">About Us</h1></div>} />
            <Route path="/gallery" element={<div className="text-center py-20"><h1 className="text-4xl font-bold">Gallery</h1></div>} />
            <Route path="/updates" element={<div className="text-center py-20"><h1 className="text-4xl font-bold">Updates</h1></div>} />
            <Route path="/membership" element={<div className="text-center py-20"><h1 className="text-4xl font-bold">Membership</h1></div>} />
            <Route path="/contact" element={<div className="text-center py-20"><h1 className="text-4xl font-bold">Contact Us</h1></div>} />
            <Route path="/apply" element={<StudentApplication />} />
            <Route path="/status" element={<StudentStatus />} />
            <Route path="/profile" element={<StudentProfile />} />
          </Routes>
        </StudentLayout>
      } />
      
      {/* Redirect old routes */}
      <Route path="/students" element={<Navigate to="/admin/students" replace />} />
      <Route path="/dashboard" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
};

export default AppRoutes;