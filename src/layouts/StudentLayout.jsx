import StudentNavbar from '../components/StudentNavbar';

const StudentLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <StudentNavbar />
      
      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>
    </div>
  );
};

export default StudentLayout;