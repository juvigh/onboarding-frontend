import React from 'react';
import { UserItem } from './user-item';
import { Title, UserListContainer } from './user-list-styles';
import { H1 } from '../../styles/text-styles';
import { fetchUsers } from '../../api/fetch-users';
import { LoadingIndicator } from '../loading/loading-indicador';
import { ErrorMessage } from '../forms/error-message';
import { useNavigate } from 'react-router-dom';

interface UserListProps {
  token: string;
}

export const UserList = ({ token }: UserListProps) => {
  const { data, loading, error } = fetchUsers(token);
  const users = data?.users.nodes ?? [];
  const navigate = useNavigate();
  if (error && error.message === 'Operação não autenticada.') {
    navigate('/login');
  }

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <UserListContainer>
          <Title>
            <H1> Lista de usuários </H1>
          </Title>
          {users.map((user, index) => (
            <UserItem
              key={user.id}
              username={user.name}
              email={user.email}
              hasBorderBottom={index !== users.length - 1}
            />
          ))}
          {error && <ErrorMessage message={error.message} />}
        </UserListContainer>
      )}
    </>
  );
};
