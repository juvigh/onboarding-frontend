import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../data/mutation/create-user';

interface CreateUserMutationProps {
  token: string;
}

export const useCreateUserMutation = ({ token }: CreateUserMutationProps) => {
  const [registerUser, { data, loading, error }] = useMutation(CREATE_USER, {
    context: {
      headers: {
        Authorization: token,
      },
    },
  });

  return { registerUser, data, loading, error };
};
