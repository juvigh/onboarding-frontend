import React from 'react';
import { UserItem } from './user-item';
import { Title, UserListContainer } from './user-list-styles';
import { H1 } from '../../styles/text-styles';

const fakeUsers = [
  { id: 1, username: 'user1', email: 'user1@example.com' },
  { id: 2, username: 'user2', email: 'user2@example.com' },
  { id: 3, username: 'user3', email: 'user3@example.com' },
  { id: 4, username: 'user4', email: 'user4@example.com' },
];

export const UserList = () => {
  return (
    <UserListContainer>
      <Title>
        <H1> Lista de usuários </H1>
      </Title>
      {fakeUsers.map((user, index) => (
        <UserItem
          key={user.id}
          username={user.username}
          email={user.email}
          hasBorderBottom={index !== fakeUsers.length - 1}
        />
      ))}
    </UserListContainer>
  );
};
