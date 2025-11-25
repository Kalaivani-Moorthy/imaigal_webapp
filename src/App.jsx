import { BrowserRouter } from 'react-router-dom';
import { StudentProvider } from './context/StudentContext';
import AppRoutes from './routes/AppRoutes';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <StudentProvider>
        <AppRoutes />
      </StudentProvider>
    </BrowserRouter>
  );
}

export default App;