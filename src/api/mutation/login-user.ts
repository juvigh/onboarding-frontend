import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation Mutation($data: LoginInput!) {
    login(data: $data) {
      token
    }
  }
`;

export interface LoginUserData {
  login: {
    token: string;
  };
}
