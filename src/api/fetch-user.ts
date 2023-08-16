import { useQuery } from '@apollo/client';
import { GET_USER, GetUserData } from './queries/get-user';

interface FetchUserOptions {
  token: string;
  userId?: string;
}

export const fetchUser = ({ token, userId }: FetchUserOptions) => {
  const { data, loading, error } = useQuery<GetUserData>(GET_USER, {
    variables: { userId },

    context: {
      headers: {
        Authorization: token,
      },
    },
  });

  return { data, loading, error };
};
