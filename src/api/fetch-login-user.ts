import { useMutation } from '@apollo/client';
import { LOGIN_USER, LoginUserData } from './mutation/login-user';

export const useLoginMutation = () => {
  const [loginUser, { data, loading, error }] = useMutation<LoginUserData>(LOGIN_USER);

  return { loginUser, data, loading, error };
};
