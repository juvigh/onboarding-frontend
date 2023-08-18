import React, { useEffect, useState } from 'react';
import { UserItem } from './user-item';
import { Title, UserListContainer } from './user-list-styles';
import { H1 } from '../../styles/text-styles';
import { fetchUsers } from '../../api/fetch-users';
import { LoadingIndicator } from '../loading/loading-indicador';
import { ErrorMessage } from '../forms/error-message';
import { useNavigate } from 'react-router-dom';
import { Pagination } from '../pagination/pagination';
import { Separator } from '../separator/separator';
import { separatorSize } from '../../styles/constants-size';

const LIMIT = 4;
interface UserListProps {
  token: string;
}

export const UserList = ({ token }: UserListProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading, error, refetch } = fetchUsers({ token, page: currentPage });

  const users = data?.users.nodes ?? [];
  const pageInfo = data?.users.count;
  const totalPages = pageInfo ? Math.ceil(pageInfo / LIMIT) : 0;
  const navigate = useNavigate();
  if (error && error.message === 'Operação não autenticada.') {
    navigate('/login');
  }

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    refetch();
  }, []);

  return (
    <>
      <UserListContainer>
        <Title>
          <H1 color="White" centred>
            Lista de usuários
          </H1>
        </Title>
        {loading ? (
          <LoadingIndicator isLoadingList />
        ) : (
          <>
            {users.map((user, index) => (
              <UserItem
                key={user.id}
                username={user.name}
                email={user.email}
                hasBorderBottom={index !== users.length - 1}
                userId={user.id}
              />
            ))}
            {error && <ErrorMessage message={error.message} />}
          </>
        )}
      </UserListContainer>
      <Separator vertical size={separatorSize.medium} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </>
  );
};
