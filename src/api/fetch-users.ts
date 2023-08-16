import { useQuery } from '@apollo/client';
import { GET_USERS, GetUsersData } from './queries/get-users';
interface FetchUsersOptions {
  token: string;
  page: number;
  limit?: number;
}

export const fetchUsers = ({ token, page, limit = 4 }: FetchUsersOptions) => {
  const offset = (page - 1) * limit;
  const { data, loading, error } = useQuery<GetUsersData>(GET_USERS, {
    variables: {
      data: {
        offset,
        limit,
      },
    },

    context: {
      headers: {
        Authorization: token,
      },
    },
  });

  return { data, loading, error };
};
