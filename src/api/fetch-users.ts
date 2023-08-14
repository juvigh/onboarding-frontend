import { useQuery } from '@apollo/client';
import { GET_USERS, GetUserData } from './queries/get-users';

export const fetchUsers = (token: string) => {
  const { data, loading, error } = useQuery<GetUserData>(GET_USERS, {
    context: {
      headers: {
        Authorization: token,
      },
    },
  });

  return { data, loading, error };
};
