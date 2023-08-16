import { gql } from '@apollo/client';

export const GET_USER = gql`
  query User($userId: ID) {
    user(id: $userId) {
      id
      name
      phone
      birthDate
      email
      role
    }
  }
`;

export interface GetUserData {
  user: {
    id: string;
    name: string;
    phone: string;
    birthDate: string;
    email: string;
    role: string;
  };
}
