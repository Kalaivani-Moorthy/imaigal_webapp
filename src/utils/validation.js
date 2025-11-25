export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
};

export const validateRequired = (value) => {
  return value && value.toString().trim().length > 0;
};

export const validateGPA = (gpa) => {
  const numGPA = parseFloat(gpa);
  return !isNaN(numGPA) && numGPA >= 0 && numGPA <= 4.0;
};