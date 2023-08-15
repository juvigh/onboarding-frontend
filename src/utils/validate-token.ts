export const validateToken = (token: string) => {
  if (!token || token === '') {
    return false;
  }
};
