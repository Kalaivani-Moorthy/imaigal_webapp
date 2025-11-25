import { useEffect } from 'react';
import { useStudentContext } from '../../../context/StudentContext';
import { mockApi } from '../../../services/mockApi';

export const useStudents = () => {
  const { state, dispatch } = useStudentContext();

  const fetchStudents = async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const students = await mockApi.getStudents();
      dispatch({ type: 'SET_STUDENTS', payload: students });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    }
  };

  const addStudent = async (studentData) => {
    try {
      const newStudent = await mockApi.createStudent(studentData);
      dispatch({ type: 'ADD_STUDENT', payload: newStudent });
      return newStudent;
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
      throw error;
    }
  };

  const updateStudent = async (id, studentData) => {
    try {
      const updatedStudent = await mockApi.updateStudent(id, studentData);
      dispatch({ type: 'UPDATE_STUDENT', payload: updatedStudent });
      return updatedStudent;
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
      throw error;
    }
  };

  const deleteStudent = async (id) => {
    try {
      await mockApi.deleteStudent(id);
      dispatch({ type: 'DELETE_STUDENT', payload: id });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
      throw error;
    }
  };

  useEffect(() => {
    if (state.students.length === 0) {
      fetchStudents();
    }
  }, []);

  return {
    students: state.students,
    loading: state.loading,
    error: state.error,
    addStudent,
    updateStudent,
    deleteStudent,
    refetch: fetchStudents,
  };
};