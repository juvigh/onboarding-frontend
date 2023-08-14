import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query User($data: PageInput) {
    users(data: $data) {
      nodes {
        id
        name
        email
      }
      count
      pageInfo {
        offset
        limit
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;

export interface GetUserData {
  users: {
    nodes: [{ id: string; name: string; email: string }];
    count: number;
    pageInfo: {
      offset: number;
      limit: number;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    };
  };
}
