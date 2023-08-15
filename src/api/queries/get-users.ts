import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query Users {
    users {
      nodes {
        id
        name
        email
      }
    }
  }
`;

export interface GetUserData {
  users: {
    nodes: [{ id: string; name: string; email: string }];
  };
}
