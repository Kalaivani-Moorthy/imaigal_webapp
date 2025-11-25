import { createContext, useContext, useReducer } from 'react';

const StudentContext = createContext();

const initialState = {
  students: [],
  loading: false,
  error: null,
  selectedStudent: null,
};

function studentReducer(state, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_STUDENTS':
      return { ...state, students: action.payload, loading: false };
    case 'ADD_STUDENT':
      return { ...state, students: [...state.students, action.payload] };
    case 'UPDATE_STUDENT':
      return {
        ...state,
        students: state.students.map(s => 
          s.id === action.payload.id ? action.payload : s
        )
      };
    case 'DELETE_STUDENT':
      return {
        ...state,
        students: state.students.filter(s => s.id !== action.payload)
      };
    case 'SET_SELECTED_STUDENT':
      return { ...state, selectedStudent: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}

export function StudentProvider({ children }) {
  const [state, dispatch] = useReducer(studentReducer, initialState);

  return (
    <StudentContext.Provider value={{ state, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
}

export const useStudentContext = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error('useStudentContext must be used within StudentProvider');
  }
  return context;
};