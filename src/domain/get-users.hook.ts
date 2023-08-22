import { useQuery } from '@apollo/client';
import { GET_USERS, GetUsersData } from '../data/queries/get-users';
interface FetchUsersOptions {
  token: string;
  page: number;
  limit?: number;
}

export const useGetUsers = ({ token, page, limit = 4 }: FetchUsersOptions) => {
  const offset = (page - 1) * limit;
  const { data, loading, error, refetch } = useQuery<GetUsersData>(GET_USERS, {
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

  return { data, loading, error, refetch };
};
