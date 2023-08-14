import React, { useState } from 'react';
import { UserItem } from './user-item';
import { Title, UserListContainer } from './user-list-styles';
import { H1 } from '../../styles/text-styles';
import { fetchUsers } from '../../api/fetch-users';
import { LoadingIndicator } from '../loading/loading-indicador';
import { ErrorMessage } from '../forms/error-message';
import { useNavigate } from 'react-router-dom';
import { Pagination } from '../pagination/pagination';

interface UserListProps {
  token: string;
}

export const UserList = ({ token }: UserListProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading, error } = fetchUsers({ token, page: currentPage });

  const users = data?.users.nodes ?? [];
  const pageInfo = data?.users.count;
  const totalPages = pageInfo ? Math.ceil(pageInfo / 4) : 0;
  const navigate = useNavigate();
  if (error && error.message === 'Operação não autenticada.') {
    navigate('/login');
  }

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <UserListContainer>
        <Title>
          <H1> Lista de usuários </H1>
        </Title>
        {loading ? (
          <LoadingIndicator />
        ) : (
          <>
            {users.map((user, index) => (
              <UserItem
                key={user.id}
                username={user.name}
                email={user.email}
                hasBorderBottom={index !== users.length - 1}
              />
            ))}
            {error && <ErrorMessage message={error.message} />}
          </>
        )}
      </UserListContainer>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </>
  );
};
