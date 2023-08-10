export const validatePassword = (password: string): boolean => {
  const hasMinLength = password.length >= 7;
  const hasLetterAndDigit = /[A-Za-z]/.test(password) && /[0-9]/.test(password);

  return hasMinLength && hasLetterAndDigit;
};
