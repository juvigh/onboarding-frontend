export const invalidToken = (token: string) => {
  if (!token || token === '') {
    return false;
  }
};
